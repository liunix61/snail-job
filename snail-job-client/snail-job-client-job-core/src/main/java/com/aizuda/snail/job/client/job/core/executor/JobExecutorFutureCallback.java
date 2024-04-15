package com.aizuda.snail.job.client.job.core.executor;

import com.aizuda.snail.job.client.common.rpc.client.RequestBuilder;
import com.aizuda.snail.job.client.common.log.support.EasyRetryLogManager;
import com.aizuda.snail.job.client.job.core.cache.ThreadPoolCache;
import com.aizuda.snail.job.client.job.core.client.JobNettyClient;
import com.aizuda.snail.job.client.job.core.log.JobLogMeta;
import com.aizuda.snail.job.client.model.ExecuteResult;
import com.aizuda.snail.job.client.model.request.DispatchJobResultRequest;
import com.aizuda.snail.job.common.core.enums.JobTaskStatusEnum;
import com.aizuda.snail.job.common.core.enums.JobTaskTypeEnum;
import com.aizuda.snail.job.common.core.enums.StatusEnum;
import com.aizuda.snail.job.common.log.EasyRetryLog;
import com.aizuda.snail.job.common.core.model.JobContext;
import com.aizuda.snail.job.common.core.model.NettyResult;
import com.aizuda.snail.job.common.core.util.JsonUtil;
import com.aizuda.snail.job.common.log.enums.LogTypeEnum;
import com.google.common.util.concurrent.FutureCallback;
import lombok.extern.slf4j.Slf4j;

import java.util.Objects;
import java.util.concurrent.CancellationException;

/**
 * @author: opensnail
 * @date : 2023-10-08 16:44
 * @since : 2.4.0
 */
@Slf4j
public class JobExecutorFutureCallback implements FutureCallback<ExecuteResult> {

    private static final JobNettyClient CLIENT = RequestBuilder.<JobNettyClient, NettyResult>newBuilder()
            .client(JobNettyClient.class)
            .callback(nettyResult -> EasyRetryLog.LOCAL.info("Job execute result report successfully requestId:[{}]", nettyResult.getRequestId())).build();

    private final JobContext jobContext;

    public JobExecutorFutureCallback(final JobContext jobContext) {
        this.jobContext = jobContext;
    }

    @Override
    public void onSuccess(ExecuteResult result) {

        try {
            // 初始化调度信息（日志上报LogUtil）
            initLogContext();

            // 上报执行成功
            EasyRetryLog.REMOTE.info("任务执行成功 taskBatchId:[{}] [{}]", jobContext.getTaskBatchId(),
                JsonUtil.toJsonString(result));

            if (Objects.isNull(result)) {
                result = ExecuteResult.success();
            }

            int taskStatus;
            if (result.getStatus() == StatusEnum.NO.getStatus()) {
                taskStatus = JobTaskStatusEnum.FAIL.getStatus();
            } else {
                taskStatus = JobTaskStatusEnum.SUCCESS.getStatus();
            }

            CLIENT.dispatchResult(buildDispatchJobResultRequest(result, taskStatus));
        } catch (Exception e) {
            EasyRetryLog.REMOTE.error("执行结果上报异常.[{}]", jobContext.getTaskId(), e);
        } finally {
            EasyRetryLogManager.removeLogMeta();
            stopThreadPool();
        }
    }

    @Override
    public void onFailure(final Throwable t) {

        try {
            // 初始化调度信息（日志上报LogUtil）
            initLogContext();

            // 上报执行失败
            EasyRetryLog.REMOTE.error("任务执行失败 taskBatchId:[{}]", jobContext.getTaskBatchId(), t);

            ExecuteResult failure = ExecuteResult.failure();
            if (t instanceof CancellationException) {
                failure.setMessage("任务被取消");
            } else {
                failure.setMessage(t.getMessage());
            }

            CLIENT.dispatchResult(
                buildDispatchJobResultRequest(failure, JobTaskStatusEnum.FAIL.getStatus())
            );
        } catch (Exception e) {
            EasyRetryLog.REMOTE.error("执行结果上报异常.[{}]", jobContext.getTaskId(), e);
        } finally {
            EasyRetryLogManager.removeLogMeta();
            stopThreadPool();
        }
    }

    private void initLogContext() {
        JobLogMeta logMeta = new JobLogMeta();
        logMeta.setNamespaceId(jobContext.getNamespaceId());
        logMeta.setTaskId(jobContext.getTaskId());
        logMeta.setGroupName(jobContext.getGroupName());
        logMeta.setJobId(jobContext.getJobId());
        logMeta.setTaskBatchId(jobContext.getTaskBatchId());
        EasyRetryLogManager.initLogInfo(logMeta, LogTypeEnum.JOB);
    }

    private void stopThreadPool() {
        if (jobContext.getTaskType() == JobTaskTypeEnum.CLUSTER.getType()) {
            ThreadPoolCache.stopThreadPool(jobContext.getTaskBatchId());
        }
    }

    private DispatchJobResultRequest buildDispatchJobResultRequest(ExecuteResult executeResult, int status) {
        DispatchJobResultRequest dispatchJobRequest = new DispatchJobResultRequest();
        dispatchJobRequest.setTaskBatchId(jobContext.getTaskBatchId());
        dispatchJobRequest.setGroupName(jobContext.getGroupName());
        dispatchJobRequest.setJobId(jobContext.getJobId());
        dispatchJobRequest.setTaskId(jobContext.getTaskId());
        dispatchJobRequest.setWorkflowTaskBatchId(jobContext.getWorkflowTaskBatchId());
        dispatchJobRequest.setWorkflowNodeId(jobContext.getWorkflowNodeId());
        dispatchJobRequest.setTaskBatchId(jobContext.getTaskBatchId());
        dispatchJobRequest.setTaskId(jobContext.getTaskId());
        dispatchJobRequest.setTaskType(jobContext.getTaskType());
        dispatchJobRequest.setExecuteResult(executeResult);
        dispatchJobRequest.setTaskStatus(status);
        dispatchJobRequest.setRetry(jobContext.isRetry());
        dispatchJobRequest.setRetryScene(jobContext.getRetryScene());
        return dispatchJobRequest;
    }
}