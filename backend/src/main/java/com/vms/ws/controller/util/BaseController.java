package com.vms.ws.controller.util;

import com.google.gson.Gson;
import com.vms.ws.config.ApplicationConfig;
import com.vms.ws.mvc.services.UserService;
import com.vms.ws.util.CommonUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by LocationGuru on 29-06-2017.
 */
@Controller
public class BaseController {

    @Autowired
    public Gson gson;

    @Autowired
    public ApplicationConfig applicationConfig;

    @Autowired
    public UserService userService;

    @Autowired
    public CommonUtility commonUtility;


}
