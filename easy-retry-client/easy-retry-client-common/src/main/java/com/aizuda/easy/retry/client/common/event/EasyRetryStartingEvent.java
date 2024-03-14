package com.aizuda.easy.retry.client.common.event;

import org.springframework.context.ApplicationEvent;

/**
 * @author xiaowoniu
 * @date 2024-03-14 21:23:29
 * @since 3.1.0
 */
public class EasyRetryStartingEvent extends ApplicationEvent {
    private static final String SOURCE = "EasyRetryStarting";

    public EasyRetryStartingEvent() {
        super(SOURCE);
    }
}
