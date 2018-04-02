package com.vms.ws.controller.web.rest;

import com.vms.ws.controller.util.BaseController;
import com.vms.ws.util.GeneralConstants;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController  extends BaseController {

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String loginPage(HttpServletRequest httpServletRequest) {
        if (httpServletRequest.getSession().getAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY) == null)
            return "login/login";
        else
            return "redirect:/customer/";
    }

    @RequestMapping(value = {"/logout"}, method = RequestMethod.GET)
    public String logout(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().invalidate();
        return applicationConfig.getApplicationRedirectLogin();
    }
}
