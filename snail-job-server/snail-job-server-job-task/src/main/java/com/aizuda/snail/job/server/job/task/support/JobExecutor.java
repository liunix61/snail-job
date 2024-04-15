package com.aizuda.snail.job.server.job.task.support;

import com.aizuda.snail.job.common.core.enums.JobTaskTypeEnum;
import com.aizuda.snail.job.server.job.task.support.executor.job.JobExecutorContext;

/**
 * @author opensnail
 * @date 2023-09-24 11:40:21
 * @since 2.4.0
 */
public interface JobExecutor {

    JobTaskTypeEnum getTaskInstanceType();

    void execute(JobExecutorContext context);
}