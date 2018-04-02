
package com.vms.ws.model;

import javax.persistence.*;

/**
 * Created by LocationGuru on 29-06-2017.
 */
@Entity
@Table(name = "sms_details")
public class SMSDetails extends BaseEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String sender;

    private String receiver;

    private String content;

    private Integer status;

    private String response;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    @Override
    public String toString() {
        return "SMSDetails{" +
                "id=" + id +
                ", sender='" + sender + '\'' +
                ", receiver='" + receiver + '\'' +
                ", content='" + content + '\'' +
                ", status=" + status +
                ", response='" + response + '\'' +
                '}';
    }
}
