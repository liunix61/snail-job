package com.aizuda.easy.retry.server.starter.dispatch;

import akka.actor.AbstractActor;
import akka.actor.ActorRef;
import com.aizuda.easy.retry.common.core.enums.StatusEnum;
import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.cache.CacheConsumerGroup;
import com.aizuda.easy.retry.server.common.cache.CacheGroupScanActor;
import com.aizuda.easy.retry.server.common.config.SystemProperties;
import com.aizuda.easy.retry.server.common.enums.SystemModeEnum;
import com.aizuda.easy.retry.server.common.enums.TaskTypeEnum;
import com.aizuda.easy.retry.server.common.dto.ScanTask;
import com.aizuda.easy.retry.server.retry.task.support.cache.CacheGroupRateLimiter;
import com.aizuda.easy.retry.template.datasource.access.AccessTemplate;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.ServerNodeMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.GroupConfig;
import com.aizuda.easy.retry.template.datasource.persistence.po.ServerNode;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.google.common.cache.Cache;
import com.google.common.util.concurrent.RateLimiter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Objects;

/**
 * 消费当前节点分配的bucket并生成扫描任务
 * <p>
 *
 * @author www.byteblogs.com
 * @date 2023-09-21 23:47:23
 * @since 2.4.0
 */
@Component(ActorGenerator.SCAN_BUCKET_ACTOR)
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class ConsumerBucketActor extends AbstractActor {

    @Autowired
    protected AccessTemplate accessTemplate;
    @Autowired
    protected ServerNodeMapper serverNodeMapper;
    @Autowired
    protected SystemProperties systemProperties;

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(ConsumerBucket.class, consumerBucket -> {

            try {
                doDispatch(consumerBucket);
            } catch (Exception e) {
                LogUtils.error(log, "Data dispatcher processing exception. [{}]", consumerBucket, e);
            }

        }).build();
    }

    private void doDispatch(final ConsumerBucket consumerBucket) {
        if (CollectionUtils.isEmpty(consumerBucket.getBuckets())) {
            return;
        }

        if (SystemModeEnum.isRetry(systemProperties.getMode())) {
            // 查询桶对应组信息
            List<GroupConfig> groupConfigs = accessTemplate.getGroupConfigAccess().list(
                    new LambdaQueryWrapper<GroupConfig>()
                            .select(GroupConfig::getGroupName)
                            .eq(GroupConfig::getGroupStatus, StatusEnum.YES.getStatus())
                            .in(GroupConfig::getBucketIndex, consumerBucket.getBuckets())
            );

            if (!CollectionUtils.isEmpty(groupConfigs)) {
                for (final GroupConfig groupConfig : groupConfigs) {
                    CacheConsumerGroup.addOrUpdate(groupConfig.getGroupName());
                    ScanTask scanTask = new ScanTask();
                    scanTask.setGroupName(groupConfig.getGroupName());
                    scanTask.setBuckets(consumerBucket.getBuckets());
                    produceScanActorTask(scanTask);
                }
            }
        }

        if (SystemModeEnum.isJob(systemProperties.getMode())) {
            // 扫描回调数据
            ScanTask scanTask = new ScanTask();
            scanTask.setBuckets(consumerBucket.getBuckets());
            scanTask.setSize(1000);
            scanTask.setStartId(0);
            ActorRef scanJobActorRef = cacheActorRef("DEFAULT_JOB_KEY", TaskTypeEnum.JOB);
            scanJobActorRef.tell(scanTask, scanJobActorRef);
        }

    }

    /**
     * 扫描任务生成器
     *
     * @param scanTask {@link  ScanTask} 组上下文
     */
    private void produceScanActorTask(ScanTask scanTask) {

        String groupName = scanTask.getGroupName();

        // 缓存按照
        cacheRateLimiter(groupName);

        // 扫描重试数据
        ActorRef scanRetryActorRef = cacheActorRef(groupName, TaskTypeEnum.RETRY);
        scanRetryActorRef.tell(scanTask, scanRetryActorRef);

        // 扫描回调数据
        ActorRef scanCallbackActorRef = cacheActorRef(groupName, TaskTypeEnum.CALLBACK);
        scanCallbackActorRef.tell(scanTask, scanCallbackActorRef);

    }

    /**
     * 缓存限流对象
     */
    private void cacheRateLimiter(String groupName) {
        List<ServerNode> serverNodes = serverNodeMapper.selectList(new LambdaQueryWrapper<ServerNode>()
            .eq(ServerNode::getGroupName, groupName));
        Cache<String, RateLimiter> rateLimiterCache = CacheGroupRateLimiter.getAll();
        for (ServerNode serverNode : serverNodes) {
            RateLimiter rateLimiter = rateLimiterCache.getIfPresent(serverNode.getHostId());
            if (Objects.isNull(rateLimiter)) {
                rateLimiterCache.put(serverNode.getHostId(), RateLimiter.create(systemProperties.getLimiter()));
            }
        }

    }

    /**
     * 缓存Actor对象
     */
    private ActorRef cacheActorRef(String groupName, TaskTypeEnum typeEnum) {
        ActorRef scanActorRef = CacheGroupScanActor.get(groupName, typeEnum);
        if (Objects.isNull(scanActorRef)) {
            scanActorRef = typeEnum.getActorRef().get();
            // 缓存扫描器actor
            CacheGroupScanActor.put(groupName, typeEnum, scanActorRef);
        }
        return scanActorRef;
    }
}