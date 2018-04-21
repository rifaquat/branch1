package com.vms.ws.controller.web.controller;

import com.vms.ws.controller.util.BaseController;
import com.vms.ws.model.LoginDetails;
import com.vms.ws.model.ServerResponse;
import com.vms.ws.model.User;
import com.vms.ws.util.CommonUtility;
import com.vms.ws.util.GeneralConstants;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Controller
public class LoginController extends BaseController {

    private final static Logger logger = Logger.getLogger(LoginController.class);

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String loginPage(HttpServletRequest httpServletRequest) {
        if (httpServletRequest.getSession().getAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY) == null)
            return "login/login";
        else
            return "redirect:/vehicle";
    }

    @RequestMapping(value = {"/logout"}, method = RequestMethod.GET)
    public String logout(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().invalidate();
        return applicationConfig.getApplicationRedirectLogin();
    }

    @RequestMapping(value = "/validate", method = RequestMethod.POST)
    public @ResponseBody
    ServerResponse validateUser(@Valid @RequestBody LoginDetails loginDetails,
                                BindingResult result, HttpServletRequest request) {
        logger.info(" Request for user validation " + gson.toJson(loginDetails));
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setCode(GeneralConstants.FAILURE_CODE);
        try {
            serverResponse = commonUtility.getErrors(result);
            if (serverResponse.getCode().intValue() == GeneralConstants.FAILURE_CODE) {
                return serverResponse;
            }
            User user= userService.validateUser(loginDetails.getUserName(), loginDetails.getPassword(),Long.valueOf(GeneralConstants.SUPER_ADMIN_ROLE));
            if (null == user) {
                serverResponse.setCode(GeneralConstants.NOT_FOUND_CODE);
                serverResponse.setMessage("Invalid Credentials");
                logger.info(" Response " + gson.toJson(serverResponse));
                return serverResponse;
            }
            request.getSession().setAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY,user);
            serverResponse.setCode(GeneralConstants.SUCCESS_CODE);
            serverResponse.setMessage("Success");
            serverResponse.setResult(user);
        } catch (Exception e) {
            serverResponse.setMessage("Internal Server Error");
            serverResponse.setCode(GeneralConstants.INTERNAL_SERVER_ERROR_CODE);
        }
        logger.info(" Response " + gson.toJson(serverResponse));
        return serverResponse;
    }
}
