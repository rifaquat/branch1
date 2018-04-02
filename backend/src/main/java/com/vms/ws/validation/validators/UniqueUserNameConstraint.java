package com.vms.ws.validation.validators;

import com.vms.ws.validation.anontations.UniqueUserName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Created by LG on 4/1/2017.
 */
@Service
public class UniqueUserNameConstraint implements ConstraintValidator<UniqueUserName, Object> {

    @Autowired
    private ApplicationContext applicationContext;

    UserNameValidator userNameValidator = null;

    @Override
    public void initialize(UniqueUserName uniqueUserName) {
        Class<? extends UserNameValidator> cls = uniqueUserName.service();
        if (StringUtils.isEmpty(uniqueUserName.serviceQualifier())) {
            this.userNameValidator = this.applicationContext.getBean(cls);
        } else {
            this.userNameValidator = this.applicationContext.getBean(uniqueUserName.serviceQualifier(), cls);
        }
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if(o == null ){
            return false;
        }
        return userNameValidator.isUserNameExists(o.toString());
    }
}
