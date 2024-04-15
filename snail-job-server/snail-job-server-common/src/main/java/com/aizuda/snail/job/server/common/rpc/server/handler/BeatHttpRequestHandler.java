package com.aizuda.snail.job.server.common.rpc.server.handler;

import cn.hutool.core.net.url.UrlQuery;
import com.aizuda.snail.job.common.core.constant.SystemConstants.HTTP_PATH;
import com.aizuda.snail.job.common.log.EasyRetryLog;
import com.aizuda.snail.job.common.core.model.NettyResult;
import com.aizuda.snail.job.common.core.model.EasyRetryRequest;
import com.aizuda.snail.job.common.core.util.JsonUtil;
import com.aizuda.snail.job.server.common.handler.GetHttpRequestHandler;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpMethod;
import org.springframework.stereotype.Component;

import static com.aizuda.snail.job.common.core.constant.SystemConstants.BEAT.PONG;

/**
 * 接收心跳请求
 *
 * @author: opensnail
 * @date : 2022-03-07 16:26
 * @since 1.0.0
 */
@Component
public class BeatHttpRequestHandler extends GetHttpRequestHandler {

    @Override
    public boolean supports(String path) {
        return HTTP_PATH.BEAT.equals(path);
    }

    @Override
    public HttpMethod method() {
        return HttpMethod.GET;
    }

    @Override
    public String doHandler(String content, UrlQuery query, HttpHeaders headers) {
        EasyRetryLog.LOCAL.debug("Beat check content:[{}]", content);
        EasyRetryRequest retryRequest = JsonUtil.parseObject(content, EasyRetryRequest.class);
       return JsonUtil.toJsonString(new NettyResult(PONG, retryRequest.getReqId()));
    }
}