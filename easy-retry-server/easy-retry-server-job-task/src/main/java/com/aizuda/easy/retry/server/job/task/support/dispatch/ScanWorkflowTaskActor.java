package com.aizuda.easy.retry.server.job.task.support.dispatch;

import akka.actor.AbstractActor;
import akka.actor.ActorRef;
import com.aizuda.easy.retry.common.core.constant.SystemConstants;
import com.aizuda.easy.retry.common.core.enums.StatusEnum;
import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.server.common.WaitStrategy;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.cache.CacheConsumerGroup;
import com.aizuda.easy.retry.server.common.config.SystemProperties;
import com.aizuda.easy.retry.server.common.dto.PartitionTask;
import com.aizuda.easy.retry.server.common.dto.ScanTask;
import com.aizuda.easy.retry.server.common.enums.JobExecuteStrategyEnum;
import com.aizuda.easy.retry.server.common.strategy.WaitStrategies;
import com.aizuda.easy.retry.server.common.util.DateUtils;
import com.aizuda.easy.retry.server.common.util.PartitionTaskUtils;
import com.aizuda.easy.retry.server.job.task.dto.WorkflowPartitionTaskDTO;
import com.aizuda.easy.retry.server.job.task.dto.WorkflowTaskPrepareDTO;
import com.aizuda.easy.retry.server.job.task.support.WorkflowTaskConverter;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.WorkflowMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.Workflow;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author xiaowoniu
 * @date 2023-12-21 21:15:29
 * @since 2.6.0
 */
@Component(ActorGenerator.SCAN_WORKFLOW_ACTOR)
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
@RequiredArgsConstructor
public class ScanWorkflowTaskActor extends AbstractActor {
    private final WorkflowMapper workflowMapper;
    private final SystemProperties systemProperties;

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(ScanTask.class, config -> {

            try {
                doScan(config);
            } catch (Exception e) {
                LogUtils.error(log, "Data scanner processing exception. [{}]", config, e);
            }

        }).build();
    }

    private void doScan(ScanTask scanTask) {
        long total = PartitionTaskUtils.process(startId -> listAvailableJobs(startId, scanTask),
                this::processPartitionTasks, 0);
    }

    private void processPartitionTasks(List<? extends PartitionTask> partitionTasks) {
        List<Workflow> waitUpdateJobs = new ArrayList<>();
        List<WorkflowTaskPrepareDTO> waitExecWorkflows = new ArrayList<>();
        long now = DateUtils.toNowMilli();
        for (PartitionTask partitionTask : partitionTasks) {
            WorkflowPartitionTaskDTO workflowPartitionTaskDTO = (WorkflowPartitionTaskDTO) partitionTask;
            processJob(workflowPartitionTaskDTO, waitUpdateJobs, waitExecWorkflows, now);
        }

        // 批量更新
        workflowMapper.updateBatchNextTriggerAtById(waitUpdateJobs);

        for (final WorkflowTaskPrepareDTO waitExecTask : waitExecWorkflows) {
            // 执行预处理阶段
            ActorRef actorRef = ActorGenerator.workflowTaskPrepareActor();
            waitExecTask.setExecuteStrategy(JobExecuteStrategyEnum.AUTO.getType());
            actorRef.tell(waitExecTask, actorRef);
        }
    }

    private void processJob(WorkflowPartitionTaskDTO partitionTask, List<Workflow> waitUpdateWorkflows,
                            List<WorkflowTaskPrepareDTO> waitExecJobs, long now) {
        CacheConsumerGroup.addOrUpdate(partitionTask.getGroupName(), partitionTask.getNamespaceId());

        Workflow workflow = new Workflow();
        workflow.setId(partitionTask.getId());

        // 更新下次触发时间
        Long nextTriggerAt = calculateNextTriggerTime(partitionTask, now);
        workflow.setNextTriggerAt(nextTriggerAt);
        waitUpdateWorkflows.add(workflow);
        waitExecJobs.add(WorkflowTaskConverter.INSTANCE.toWorkflowTaskPrepareDTO(partitionTask));

    }

    private Long calculateNextTriggerTime(WorkflowPartitionTaskDTO partitionTask, long now) {

        long nextTriggerAt = partitionTask.getNextTriggerAt();
        if ((nextTriggerAt + DateUtils.toEpochMilli(SystemConstants.SCHEDULE_PERIOD)) < now) {
            nextTriggerAt = now;
            partitionTask.setNextTriggerAt(nextTriggerAt);
        }

        // 更新下次触发时间
        WaitStrategy waitStrategy = WaitStrategies.WaitStrategyEnum.getWaitStrategy(partitionTask.getTriggerType());
        WaitStrategies.WaitStrategyContext waitStrategyContext = new WaitStrategies.WaitStrategyContext();
        waitStrategyContext.setTriggerInterval(partitionTask.getTriggerInterval());
        waitStrategyContext.setNextTriggerAt(nextTriggerAt);

        return waitStrategy.computeTriggerTime(waitStrategyContext);
    }

    private List<WorkflowPartitionTaskDTO> listAvailableJobs(Long startId, ScanTask scanTask) {
        if (CollectionUtils.isEmpty(scanTask.getBuckets())) {
            return Collections.emptyList();
        }

        List<Workflow> workflows = workflowMapper.selectPage(new PageDTO<>(0, systemProperties.getJobPullPageSize()),
                new LambdaQueryWrapper<Workflow>()
                        .select(Workflow::getId, Workflow::getGroupName, Workflow::getNextTriggerAt, Workflow::getTriggerType,
                                Workflow::getTriggerInterval, Workflow::getExecutorTimeout, Workflow::getNamespaceId,
                                Workflow::getFlowInfo, Workflow::getBlockStrategy)
                        .eq(Workflow::getWorkflowStatus, StatusEnum.YES.getStatus())
                        .eq(Workflow::getDeleted, StatusEnum.NO.getStatus())
                        .in(Workflow::getBucketIndex, scanTask.getBuckets())
                        .le(Workflow::getNextTriggerAt, DateUtils.toNowMilli() + DateUtils.toEpochMilli(SystemConstants.SCHEDULE_PERIOD))
                        .ge(Workflow::getId, startId)
                        .orderByAsc(Workflow::getId)
        ).getRecords();

        return WorkflowTaskConverter.INSTANCE.toWorkflowPartitionTaskList(workflows);
    }
}
