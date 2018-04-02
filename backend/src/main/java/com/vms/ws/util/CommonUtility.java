package com.vms.ws.util;

import com.vms.ws.config.ApplicationConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.crypto.Cipher;
import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;
import java.util.TimeZone;

/**
 * Created by LocationGuru on 27-06-2017.
 */
@Service
public class CommonUtility<T> {

    @Autowired
    ApplicationConfig applicationConfig;

    @Autowired
    HttpServletRequest httpServletRequest;

    public Integer generatePassword(){
        return new Random().nextInt(900000) + 100000;
    }


/*
    public static void main(String[] args) {
        TimeZone timeZone1 = TimeZone.getTimeZone("Mexico/BajaSur");
        Calendar calender = new GregorianCalendar();

        calender.setTimeZone(timeZone1);

        System.out.println(calender.get(Calendar.DATE));
    }
*/

   /* public SMSDetails populateSMSForSignUp(User user){
        SMSDetails smsDetails = new SMSDetails();
        smsDetails.setReceiver(user.getDriverDetails().getMobileNumber());
        String smsContent = applicationConfig.getSmsContent();
        smsDetails.setContent(smsContent);
        smsDetails.setSender(applicationConfig.getSmsSender());
        return smsDetails;
    }*/

    /*public boolean isSessionActive(){
        if(httpServletRequest.getSession().getAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY) == null){
            return false;
        }
        return true;
    }
*/
    /*public String currentUserDetails(){
        if(httpServletRequest.getSession().getAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY) == null){
            return null;
        }
        return (String)httpServletRequest.getSession().getAttribute(GeneralConstants.LOGGED_IN_OBJECT_KEY);
    }*/

    public String encryptData(String data,Key key) {
        String cipherText = "";
        try {
            Cipher aesCipher = Cipher.getInstance("DESede");
            aesCipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] byteDataToEncrypt = data.getBytes();
            byte[] byteCipherText = aesCipher.doFinal(byteDataToEncrypt);
            cipherText = new BASE64Encoder().encode(byteCipherText);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cipherText;
    }

    public String decryptText(String data,Key key) {
        String decryptedText = "";
        try {
            Cipher aesCipher = Cipher.getInstance("DESede");
            aesCipher.init(Cipher.DECRYPT_MODE, key, aesCipher.getParameters());
            byte[] byteDecryptedText;
            byteDecryptedText = aesCipher.doFinal(new BASE64Decoder().decodeBuffer(data));
            decryptedText = new String(byteDecryptedText);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return decryptedText;
    }

    public Long generateUniqueNumber(){
        return System.currentTimeMillis();
    }

    public String getPrefixCustomerId(){
        return applicationConfig.getCustomerIdPrefix().concat(getDate(new Timestamp(System.currentTimeMillis())));
    }

    public String getDate(Timestamp timestamp) {
       return timestamp.toString().split(" ")[0].replace("-","");
    }
}
