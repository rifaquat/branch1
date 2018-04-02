package com.vms.ws.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

/**
 * this class is extended by those classes who want to maintain the audit trial
 * or the classes where created date and modified date is required Almost all
 * classes will implement this base entity, you can also add id property here
 * as, all the entities will have id of their own
 */
@MappedSuperclass
public abstract class BaseEntity implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;


    /*@JsonIgnore*/
    @Column(name = "created_date", nullable = false, updatable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    @CreatedDate
    protected Timestamp createdDate = new Timestamp(System.currentTimeMillis());

    @JsonIgnore
    @Column(name = "last_modified_date")
    @LastModifiedDate
    protected Timestamp lastModifiedDate;

    @JsonIgnore
    @Column(name = "created_by")
    protected String createdBy;

    @JsonIgnore
    @Column(name = "modified_by")
    protected String modifiedBy;

    @PreUpdate
    protected void onPreUpdate() {
	lastModifiedDate = new Timestamp(System.currentTimeMillis());
    }

    @PrePersist
    protected void onPrePersist() {
        if (createdDate == null) {
            createdDate = new Timestamp(System.currentTimeMillis());
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getCreatedDate() {
	return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
	this.createdDate = createdDate;
    }

    public Timestamp getLastModifiedDate() {
	return lastModifiedDate;
    }

    public void setLastModifiedDate(Timestamp lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }
}
