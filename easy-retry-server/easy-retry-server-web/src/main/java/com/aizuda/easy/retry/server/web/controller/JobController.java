package com.aizuda.easy.retry.server.web.controller;

import com.aizuda.easy.retry.server.web.annotation.LoginRequired;
import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.JobQueryVO;
import com.aizuda.easy.retry.server.web.model.request.JobRequestVO;
import com.aizuda.easy.retry.server.web.model.request.JobUpdateJobStatusRequestVO;
import com.aizuda.easy.retry.server.web.model.response.JobResponseVO;
import com.aizuda.easy.retry.server.web.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
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
    public JobResponseVO getJobDetail(@PathVariable("id") Long id) {
        return jobService.getJobDetail(id);
    }

    @PostMapping
    @LoginRequired
    public Boolean saveJob(@RequestBody @Validated JobRequestVO jobRequestVO) {
        return jobService.saveJob(jobRequestVO);
    }

    @PutMapping
    @LoginRequired
    public Boolean updateJob(@RequestBody @Validated JobRequestVO jobRequestVO) {
        return jobService.updateJob(jobRequestVO);
    }

    @PutMapping("/status")
    @LoginRequired
    public Boolean updateJobStatus(@RequestBody @Validated JobUpdateJobStatusRequestVO jobRequestVO) {
        return jobService.updateJobStatus(jobRequestVO);
    }

    @DeleteMapping("{id}")
    @LoginRequired
    public Boolean deleteJobById(@PathVariable("id") Long id) {
        return jobService.deleteJobById(id);
    }

    @GetMapping("/cron")
    @LoginRequired
    public List<String> getTimeByCron(@RequestParam("cron") String cron) {
        return jobService.getTimeByCron(cron);
    }

}