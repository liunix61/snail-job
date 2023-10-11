package com.aizuda.easy.retry.server.web.controller;

import com.aizuda.easy.retry.server.web.annotation.LoginRequired;
import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.JobQueryVO;
import com.aizuda.easy.retry.server.web.model.request.JobRequestVO;
import com.aizuda.easy.retry.server.web.model.response.JobResponseVO;
import com.aizuda.easy.retry.server.web.model.response.SceneConfigResponseVO;
import com.aizuda.easy.retry.server.web.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author www.byteblogs.com
 * @date 2023-10-11 22:18:29
 * @since 2.4.0
 */
@RestController
@RequestMapping("/job")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/list")
    @LoginRequired
    public PageResult<List<JobResponseVO>> getJobPage(JobQueryVO jobQueryVO) {
        return jobService.getJobPage(jobQueryVO);
    }

    @GetMapping("{id}")
    @LoginRequired
    public PageResult<List<JobResponseVO>> getJobDetail(@PathVariable("id") Long id) {
        return jobService.getJobDetail(id);
    }

    @PostMapping
    @LoginRequired
    public PageResult<List<JobResponseVO>> saveJob(@RequestBody JobRequestVO jobRequestVO) {
        return jobService.saveJob(jobRequestVO);
    }

    @PutMapping
    @LoginRequired
    public PageResult<List<JobResponseVO>> updateJob(@RequestBody JobRequestVO jobRequestVO) {
        return jobService.updateJob(jobRequestVO);
    }

}
