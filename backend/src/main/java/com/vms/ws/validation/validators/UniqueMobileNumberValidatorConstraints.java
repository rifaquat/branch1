package com.vms.ws.validation.validators;

import com.vms.ws.validation.anontations.UniqueMobileNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Created by LocationGuru on 03-06-2017.
 */
public class UniqueMobileNumberValidatorConstraints implements ConstraintValidator<UniqueMobileNumber, Object> {

    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    MobileNumberValidator mobileNumberValidator;

    @Override
    public void initialize(UniqueMobileNumber uniqueEmailId) {
        Class<? extends MobileNumberValidator> cls = uniqueEmailId.service();
        if (StringUtils.isEmpty(uniqueEmailId.serviceQualifier())) {
            this.mobileNumberValidator= this.applicationContext.getBean(cls);
        } else {
            this.mobileNumberValidator = this.applicationContext.getBean(uniqueEmailId.serviceQualifier(), cls);
        }
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if(o == null ){
            return false;
        }
        return mobileNumberValidator.isMobileNumberExists(o.toString());
    }
}
