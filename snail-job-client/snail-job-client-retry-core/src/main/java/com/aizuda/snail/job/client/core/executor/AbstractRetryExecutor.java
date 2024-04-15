package com.aizuda.snail.job.client.core.executor;

import com.aizuda.snail.job.client.core.RetryExecutor;
import com.aizuda.snail.job.client.core.retryer.RetryerInfo;
import com.aizuda.snail.job.client.core.strategy.ExecutorMethod;
import com.aizuda.snail.job.client.core.strategy.ExecutorAnnotationMethod;
import com.aizuda.snail.job.common.core.context.SpringContext;
import com.aizuda.snail.job.common.log.EasyRetryLog;
import com.aizuda.snail.job.common.core.util.JsonUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @author: opensnail
 * @date : 2022-03-03 18:08
 */
@Slf4j
public abstract class AbstractRetryExecutor<BR, SR> implements RetryExecutor<BR, SR> {

    protected RetryerInfo retryerInfo;

    @Override
    public Object execute(Object... params) {
        return doExecute(params);
    }

    public Object doExecute(Object... params) {

        Class<? extends ExecutorMethod> retryMethodClass = retryerInfo.getExecutorMethod();
        if (retryMethodClass.isAssignableFrom(ExecutorAnnotationMethod.class)) {
           EasyRetryLog.LOCAL.debug("执行注解重试方法：{},参数为：{}", retryMethodClass.getName(), JsonUtil.toJsonString(params));
            ExecutorAnnotationMethod retryAnnotationMethod = new ExecutorAnnotationMethod(retryerInfo);
            return retryAnnotationMethod.doExecute(params);
        } else {
           EasyRetryLog.LOCAL.debug("执行自定义重试方法：{},参数为：{}", retryMethodClass.getName(), JsonUtil.toJsonString(params));
            ExecutorMethod executorMethod = SpringContext.getBeanByType(retryMethodClass);
            return executorMethod.doExecute(params);
        }
    }

    @Override
    public RetryerInfo getRetryerInfo() {
        return retryerInfo;
    }

}