package com.aizuda.easy.retry.client.common.dto;

import com.aizuda.easy.retry.server.model.dto.TaskLogFieldDTO;
import com.aizuda.easy.retry.server.model.dto.constant.LogFieldConstant;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author wodeyangzipingpingwuqi
 * @date 2023-12-27
 * @since 2.6.0
 */
@Data
public class LogContentDTO {
    private List<TaskLogFieldDTO> fieldList;

    public LogContentDTO() {
        this.fieldList = new ArrayList<>();
    }

    public void addField(String name, String value) {
        fieldList.add(new TaskLogFieldDTO(name, value));
    }

    public void addTimeField(String time) {
        this.addField(LogFieldConstant.TIME, time);
    }

    public void addTimeStamp(Long timeStamp) {
        this.addField(LogFieldConstant.TIME_STAMP, String.valueOf(timeStamp));
    }

    public Long getTimeStamp() {
        return Long.parseLong(fieldList.stream().filter(taskLogFieldDTO -> !Objects.isNull(taskLogFieldDTO.getValue()))
                .collect(Collectors.toMap(TaskLogFieldDTO::getName, TaskLogFieldDTO::getValue)).get(LogFieldConstant.TIME_STAMP));
    }

    public void addLevelField(String level) {
        this.addField(LogFieldConstant.LEVEL, level);
    }

    public void addThreadField(String thread) {
        this.addField(LogFieldConstant.THREAD, thread);
    }

    public void addMessageField(String message) {
        this.addField(LogFieldConstant.MESSAGE, message);
    }

    public void addLocationField(String location) {
        this.addField(LogFieldConstant.LOCATION, location);
    }

    public void addThrowableField(String throwable) {
        this.addField(LogFieldConstant.THROWABLE, throwable);
    }

    public void addLogField(String log) {
        this.addField(LogFieldConstant.LOG, log);
    }

    public void addJobIdField(Long jobInstanceId) {
        this.addField(LogFieldConstant.JOB_ID, String.valueOf(jobInstanceId));
    }

    public void addJobInstanceIdField(Long jobInstanceId) {
        this.addField(LogFieldConstant.JOB_INSTANCE_ID, String.valueOf(jobInstanceId));
    }

    public void addJobInstanceTaskIdField(Long taskId) {
        this.addField(LogFieldConstant.JOB_INSTANCE_TASK_ID, String.valueOf(taskId));
    }

    public void addJobDispatchVersionTaskIdField(Long version) {
        this.addField(LogFieldConstant.JOB_DISPATCH_VERSION, String.valueOf(version));
    }

    public void addTaskIdField(String taskId) {
        this.addField(LogFieldConstant.TASK_ID, taskId);
    }

    public void addCircleIdField(Long circleId) {
        this.addField(LogFieldConstant.CIRCLE_ID, String.valueOf(circleId));
    }

    public void addDelayTopic(String topic) {
        this.addField(LogFieldConstant.DELAY_TOPIC, topic);
    }

    public void addWorkerAddressField(String workerAddress) {
        this.addField(LogFieldConstant.WORKER_ADDRESS, workerAddress);
    }
}
