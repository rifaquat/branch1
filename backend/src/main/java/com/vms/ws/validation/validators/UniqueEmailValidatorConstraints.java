package com.vms.ws.validation.validators;

import com.vms.ws.validation.anontations.UniqueEmailId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Created by LocationGuru on 03-06-2017.
 */
public class UniqueEmailValidatorConstraints implements ConstraintValidator<UniqueEmailId, Object> {
    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    EmailIdValidator emailIdValidator;



    @Override
    public void initialize(UniqueEmailId uniqueEmailId) {
        Class<? extends EmailIdValidator> cls = uniqueEmailId.service();
        if (StringUtils.isEmpty(uniqueEmailId.serviceQualifier())) {
            this.emailIdValidator = this.applicationContext.getBean(cls);
        } else {
            this.emailIdValidator = this.applicationContext.getBean(uniqueEmailId.serviceQualifier(), cls);
        }
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if(o == null ){
            return true;
        }
        return emailIdValidator.isEmailIdExists(o.toString());
    }
}
