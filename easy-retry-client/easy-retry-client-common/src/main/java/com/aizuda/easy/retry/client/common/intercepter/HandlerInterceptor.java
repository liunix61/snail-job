package com.aizuda.easy.retry.client.common.intercepter;

import com.aizuda.easy.retry.client.common.netty.server.EndPointInfo;
import com.aizuda.easy.retry.client.common.netty.server.HttpRequest;
import com.aizuda.easy.retry.client.common.netty.server.HttpResponse;

/**
 * @author: opensnail
 * @date : 2024-04-12
 * @since : 3.3.0
 */
public interface HandlerInterceptor {

    boolean preHandle(HttpRequest httpRequest, HttpResponse httpResponse, EndPointInfo handler);

    void postHandle(HttpRequest httpRequest, HttpResponse httpResponse, EndPointInfo handler);

    void afterCompletion(HttpRequest httpRequest, HttpResponse httpResponse, EndPointInfo handler, Exception ex);

    default int order() {
        return 1;
    }
}