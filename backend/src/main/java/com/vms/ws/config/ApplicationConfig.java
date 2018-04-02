package com.vms.ws.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by LocationGuru on 28-05-2017.
 */
@Service
public class ApplicationConfig {

    @Value("${application.new.user.message}")
    private String smsContent;

    @Value("${gcm.application.key}")
    private String gcmAppKey;

    @Value("${customer.id.prefix}")
    private String customerIdPrefix;

    @Value("${password.key}")
    private String passwordKey;

    @Value("${application.lading.page.url}")
    private String landingPageUrl;

    @Value("${application.redirect.login}")
    private String applicationRedirectLogin;

    @Value("${application.sms.sender}")
    private String smsSender;

    @Value("${application.image.path}")
    private String imagePath;


    private ExecutorService executorService = Executors.newFixedThreadPool(10);

    public SecretKey passwordSecretKey;

    public String getGcmAppKey() {
        return gcmAppKey;
    }

    public String getCustomerIdPrefix() {
        return customerIdPrefix;
    }

    public SecretKeyFactory getSecretKeyFactory(){
        try {
            return SecretKeyFactory.getInstance("DESede");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

    /*private final Map<Long,PriceDetails> priceMap = new HashMap<>();*/

    public String getSmsContent() {
        return smsContent;
    }

    public String getSmsSender() {
        return smsSender;
    }

    public String getLandingPageUrl() {
        return landingPageUrl;
    }

    public String getApplicationRedirectLogin() {
        return applicationRedirectLogin;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getPasswordKey() {
        return passwordKey;
    }

    public SecretKey getPasswordSecretKey() {
        return passwordSecretKey;
    }

    @PostConstruct
    public void initializeConfig(){
        generatePasswordKeyForEncryptDecrypt();
    }


    public void generatePasswordKeyForEncryptDecrypt()
    {
        try
        {
            passwordSecretKey = getSecretKeyFactory().generateSecret(new DESedeKeySpec(passwordKey.getBytes("ASCII")));
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }


    public ExecutorService getExecutorService(){
        return executorService;
    }
}
