package com.vms.ws.validation.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.lang.annotation.Annotation;

/**
 * Created by LocationGuru on 26-06-2017.
 */
public class SessionValidatorImpl implements ConstraintValidator{

    @Override
    public void initialize(Annotation annotation) {

    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        return false;
    }
}
