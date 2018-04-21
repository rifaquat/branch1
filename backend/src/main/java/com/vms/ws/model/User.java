package com.vms.ws.model;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vms.ws.mvc.services.UserService;
import com.vms.ws.validation.anontations.UniqueUserName;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "user")
public class User extends BaseEntity {

    @NotNull
    @Length(max = 50, message = "username max length is 50")
    @NotEmpty
    @Column(name="username",unique = true, nullable = false)
    @UniqueUserName(service = UserService.class , message = "username already exists")
    private String username;

    @JsonIgnore
    @Column(name="password")
    private String password;

    @NotNull(message = "Enter FirstName")
    private String firstName;

    @NotNull(message = "Enter LastName")
    private String lastName;
    /*@JsonIgnore*/
    /*@NotNull*/
    @JsonIgnore
    @Column(name="enabled")
    private boolean enabled=true;

    @JsonIgnore
    @Column(name="deleted")
    private boolean deleted=false;

    @JsonIgnore
    @Column(name="invalidloginattempt")
    private Integer invalidLoginAttempts;

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="role")
    @Valid
    private Role role;

    @Pattern(regexp = "^[a-zA-Z0-9 ]*$", message = "vehicleNumber cannot be empty")
    @NotNull(message = "empty.name.text")
    @Column(name = "vehicle_number")
    private String vehicleNumber;

    @Pattern(regexp = "^[a-zA-Z0-9 ]*$", message = "primaryContactNumber cannot be empty")
    @NotNull(message = "empty.name.text")
    @Column(name = "primary_contact_number")
    private String primaryContactNumber;

    @Pattern(regexp = "^[a-zA-Z0-9 ]*$", message = "enter valid secondaryContactNumber")
    @Column(name = "secondary_contact_number")
    private String secondaryContactNumber;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "nearest_ps_address")
    private String addressNearPS;


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getPrimaryContactNumber() {
        return primaryContactNumber;
    }

    public void setPrimaryContactNumber(String primaryContactNumber) {
        this.primaryContactNumber = primaryContactNumber;
    }

    public String getSecondaryContactNumber() {
        return secondaryContactNumber;
    }

    public void setSecondaryContactNumber(String secondaryContactNumber) {
        this.secondaryContactNumber = secondaryContactNumber;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getAddressNearPS() {
        return addressNearPS;
    }

    public void setAddressNearPS(String addressNearPS) {
        this.addressNearPS = addressNearPS;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Integer getInvalidLoginAttempts() {
        return invalidLoginAttempts;
    }

    public void setInvalidLoginAttempts(Integer invalidLoginAttempts) {
        this.invalidLoginAttempts = invalidLoginAttempts;
    }
}
