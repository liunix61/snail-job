package com.aizuda.snail.job.client.common.event;

import org.springframework.context.ApplicationEvent;

/**
 * @author xiaowoniu
 * @date 2024-03-14 21:23:29
 * @since 3.1.0
 */
public class SnailClientStartingEvent extends ApplicationEvent {
    private static final String SOURCE = "EasyRetryStarting";

    public SnailClientStartingEvent() {
        super(SOURCE);
    }
}