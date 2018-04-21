package com.vms.ws.controller.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vms.ws.controller.util.BaseController;
import com.vms.ws.model.LoginDetails;
import com.vms.ws.model.ServerResponse;
import com.vms.ws.model.User;
import com.vms.ws.util.GeneralConstants;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

/**
 * Created by LocationGuru on 27-06-2017.
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/user")
public class UserMobileController extends BaseController {

    private final static Logger logger=Logger.getLogger(UserMobileController.class);

    @RequestMapping(value= "/validate" ,method = RequestMethod.POST )
    public ServerResponse validate(@Valid @RequestBody LoginDetails loginDetails,
                            BindingResult result, HttpServletRequest request) {
        logger.info(" Request for driver validation "+gson.toJson(loginDetails));
        ServerResponse serverResponse =new ServerResponse();
        serverResponse.setCode(GeneralConstants.FAILURE_CODE);
        try {
            serverResponse = commonUtility.getErrors(result);
            if(serverResponse.getCode().intValue() == GeneralConstants.FAILURE_CODE){
                return serverResponse;
            }
            User user= userService.validateUser(loginDetails.getUserName(), loginDetails.getPassword(),Long.valueOf(GeneralConstants.DRIVER_ROLE));
            if(null == user){
                serverResponse.setCode(GeneralConstants.NOT_FOUND_CODE);
                serverResponse.setMessage("Invalid Credentials");
                logger.info(" Invalid Credentials ");
                logger.info(" Response "+gson.toJson(serverResponse));
                return serverResponse;
            }
            serverResponse.setCode(GeneralConstants.SUCCESS_CODE);
            serverResponse.setMessage("Success");
            serverResponse.setResult(user);
        } catch (Exception e) {
            serverResponse.setMessage("Internal Server Error");
            serverResponse.setCode(GeneralConstants.INTERNAL_SERVER_ERROR_CODE);
        }
        logger.info(" Response "+gson.toJson(serverResponse));
        return serverResponse;
    }







}
