package com.vms.ws.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by LocationGuru on 03-06-2017.
 */
public class GeneralConstants {

    public final static String SUCCESS_MESSAGE="Success";
    public final static int SUCCESS_CODE=200;
    public final static int FAILURE_CODE=401;
    public final static int INTERNAL_SERVER_ERROR_CODE=500;
    public final static int NOT_FOUND_CODE=404;

    public final static int SUCCESS_SMS=1;
    public final static int PENDING_SMS=2;
    public final static int FAILED_SMS=3;


    public final static int TRIP_ADD=1;
    public final static int TRIP_UPDATE=2;


    public final static int SUPER_ADMIN_ROLE=1;
    public final static int ADMIN_ROLE=3;
    public final static int DRIVER_ROLE=2;
    public static List<String> excludePropertiesForUsers = new ArrayList<>();
    static {
        excludePropertiesForUsers.add("driverDetails.license");
    }


    public final static String LOGGED_IN_OBJECT_KEY="loggedInUser";

}
