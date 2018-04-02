package com.vms.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;

import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "task_list")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "task_id")
    private Integer id;

    @Column(name = "task_name")
    @NotBlank(message = "Task name must not be blank!")
    private String taskName;

    @Column(name = "task_description")
    @NotBlank(message = "Task description must not be blank!")
    private String taskDescription;

    @Column(name = "task_priority")
    private String taskPriority;

    @Column(name = "task_status")
    private String taskStatus;

    @Column(name = "task_archived")
    private Integer taskArchived = 0;

    public Integer getTaskId() {
	return id;
    }

    public void setTaskId(Integer taskId) {
	this.id = taskId;
    }

    public String getTaskName() {
	return taskName;
    }

    public void setTaskName(String taskName) {
	this.taskName = taskName;
    }

    public String getTaskDescription() {
	return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
	this.taskDescription = taskDescription;
    }

    public String getTaskPriority() {
	return taskPriority;
    }

    public void setTaskPriority(String taskPriority) {
	this.taskPriority = taskPriority;
    }

    public String getTaskStatus() {
	return taskStatus;
    }

    public void setTaskStatus(String taskStatus) {
	this.taskStatus = taskStatus;
    }

    public Integer isTaskArchived() {
	return taskArchived;
    }

    public void setTaskArchived(Integer taskArchived) {
	this.taskArchived = taskArchived;
    }

    @Override
    public String toString() {
	return "Task [id=" + id + ", taskName=" + taskName + ", taskDescription=" + taskDescription + ", taskPriority=" + taskPriority
		+ ",taskStatus=" + taskStatus + "]";
    }
}