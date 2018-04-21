package com.vms.ws.controller.web.controller;

import com.vms.ws.controller.util.BaseController;
import com.vms.ws.model.ServerResponse;
import com.vms.ws.model.User;
import com.vms.ws.util.GeneralConstants;
import org.apache.log4j.Logger;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by LocationGuru on 11-06-2017.
 */
@Controller
@RequestMapping(value = "/vehicle")
public class VehicleController extends BaseController {

    private final static Logger logger=Logger.getLogger(VehicleController.class);


    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String view() {
        if(!commonUtility.isSessionActive()){
            return applicationConfig.getApplicationRedirectLogin();
        }
        return "vehicle/view";
    }


    @RequestMapping(value= "/add" ,method = RequestMethod.POST )
    public @ResponseBody ServerResponse addUser(@Valid @RequestBody User userDetails,
                                  BindingResult result){
        logger.info(" Request for driver validation "+gson.toJson(userDetails));
        ServerResponse serverResponse =new ServerResponse();
        serverResponse.setCode(GeneralConstants.FAILURE_CODE);
        try{
            serverResponse = commonUtility.getErrors(result);
            if(serverResponse.getCode().intValue() == GeneralConstants.FAILURE_CODE){
                return serverResponse;
            }
            userService.save(userDetails);
            serverResponse.setCode(GeneralConstants.SUCCESS_CODE);
            serverResponse.setMessage("Success");

        }catch (Exception  e){
            serverResponse.setCode(GeneralConstants.INTERNAL_SERVER_ERROR_CODE);
            serverResponse.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return serverResponse;
    }

    @RequestMapping(value = "/modify", method = RequestMethod.POST)
    public
    @ResponseBody
    ServerResponse modify(@Valid @RequestBody User userDetails,
                          BindingResult result) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setCode(403);
        try {
            if (null == userDetails.getId()) {
                serverResponse.setMessage("User Id missing");
                return serverResponse;
            }

            serverResponse = commonUtility.getErrors(result);
            if(serverResponse.getCode().intValue() == GeneralConstants.FAILURE_CODE){
                return serverResponse;
            }

            userService.save(userDetails);
            serverResponse.setCode(GeneralConstants.SUCCESS_CODE);
            serverResponse.setMessage("Success");
            serverResponse.setCode(200);
        } catch (Exception e) {
            serverResponse.setMessage("Internal Server Error");
            serverResponse.setCode(500);
        }
        return serverResponse;
    }

    @RequestMapping(value= "/list" ,method = RequestMethod.GET )
    public @ResponseBody
    ServerResponse list(HttpServletRequest request){
        ServerResponse serverResponse =new ServerResponse();
        serverResponse.setCode(GeneralConstants.FAILURE_CODE);
        try{
            String iStart = request.getParameter("iDisplayStart");
            String length = request.getParameter("iDisplayLength");
            String searchBy = request.getParameter("sSearch");
            if (!StringUtils.isEmpty(iStart)) {
                int pageNumber = Integer.valueOf(iStart) / Integer.valueOf(length);
                if (pageNumber < 0) {
                    pageNumber = 0;
                }
                Pageable pageable = new PageRequest(pageNumber, Integer.valueOf(length));
                Page<User> list;
                List<Long> roles =new ArrayList<>();
                roles.add(Long.valueOf(GeneralConstants.DRIVER_ROLE));
                if (StringUtils.isEmpty(searchBy)) {
                    list = userService.findAll(pageable,roles);
                } else {
                    list = userService.findAll(pageable,searchBy,roles);
                }
                serverResponse.setiTotalRecords(list.getTotalElements());
                serverResponse.setiTotalDisplayRecords(list.getTotalElements());
                serverResponse.setResult(list.getContent());
                return serverResponse;
            }
        }catch (Exception  e){
            e.printStackTrace();
        }
        return serverResponse;
    }

   /* @RequestMapping(value = "/list", method = RequestMethod.GET)
    public
    @ResponseBody
    ServerResponse list(HttpServletRequest request) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage("Success");
        serverResponse.setCode(200);
        try {
            String sortColumn = request.getParameter("sortBy");
            String order = request.getParameter("orderBy");
            String sortOn = "";
            String start = request.getParameter("pageNo");
            String iStart = request.getParameter("iDisplayStart");
            String length = request.getParameter("iDisplayLength");
            String searchBy = request.getParameter("sSearch");
            if (!StringUtils.isEmpty(iStart)) {
                int pageNumber = Integer.valueOf(iStart) / Integer.valueOf(length);
                if (pageNumber < 0) {
                    pageNumber = 0;
                }
                Pageable pageable = new PageRequest(pageNumber, Integer.valueOf(length));
                Page<VehicleDetails> list;

                if (StringUtils.isEmpty(searchBy)) {
                    list = vehicleService.getAllVehicle(pageable);
                } else {
                    list = vehicleService.getAllVehicle(searchBy, pageable);
                }
                serverResponse.setiTotalRecords(list.getTotalElements());
                serverResponse.setiTotalDisplayRecords(list.getTotalElements());
                serverResponse.setResult(list.getContent());
                return serverResponse;
            }

            List<VehicleDetails> list = vehicleService.getAllVehicle();
            serverResponse.setiTotalRecords(Long.valueOf(list.size()));
            serverResponse.setiTotalDisplayRecords(Long.valueOf(list.size()));
            serverResponse.setResult(list);
            return serverResponse;
        } catch (Exception e) {
            serverResponse.setMessage("Internal Server Error");
            serverResponse.setCode(500);
        }
        return serverResponse;
    }*/

   /* @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public
    @ResponseBody
    ServerResponse deleteUser(@RequestParam(value = "id") Long vehicleId) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setCode(403);
        try {
            VehicleDetails vehicleDetails = vehicleService.findOne(vehicleId);
            vehicleDetails.setDeleted(true);
            vehicleService.save(vehicleDetails);
            serverResponse.setMessage("Success");
            serverResponse.setCode(200);
        } catch (Exception e) {
            serverResponse.setMessage("Internal Server Error");
            serverResponse.setCode(500);
        }
        return serverResponse;
    }
*/

}
