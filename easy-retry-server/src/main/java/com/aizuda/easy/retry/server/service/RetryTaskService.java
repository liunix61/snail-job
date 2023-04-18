package com.aizuda.easy.retry.server.service;

import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.RetryTaskQueryVO;
import com.aizuda.easy.retry.server.web.model.request.RetryTaskRequestVO;
import com.aizuda.easy.retry.server.web.model.response.RetryTaskResponseVO;

import java.util.List;

/**
 * @author www.byteblogs.com
 * @date 2022-02-27
 * @since 2.0
 */
public interface RetryTaskService {

    PageResult<List<RetryTaskResponseVO>> getRetryTaskPage(RetryTaskQueryVO queryVO);

    RetryTaskResponseVO getRetryTaskById(String groupName, Long id);

    int updateRetryTaskStatus(RetryTaskRequestVO retryTaskRequestVO);
}