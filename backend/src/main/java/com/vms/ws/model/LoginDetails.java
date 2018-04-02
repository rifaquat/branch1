package com.vms.ws.model;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

/**
 * Created by LocationGuru on 27-05-2017.
 */
public class LoginDetails {

    @NotNull(message = "Username cannot be empty")
    private String userName;

    @NotNull(message = "Password cannot be empty")
    private String password;

    private Long roleId;

    private String deviceKey;

    public String getDeviceKey() {
        return deviceKey;
    }

    public void setDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
