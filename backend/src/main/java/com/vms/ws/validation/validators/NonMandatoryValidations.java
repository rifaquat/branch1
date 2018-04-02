package com.vms.ws.validation.validators;

import com.vms.ws.validation.anontations.NonMandatory;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by LG on 4/1/2017.
 */
public class NonMandatoryValidations implements ConstraintValidator<NonMandatory, Object> {
    String regex;

    @Override
    public void initialize(NonMandatory nonMandatory) {
        regex = nonMandatory.regex();
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if(null == o || o.toString() == ""){
            return true;
        }
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(o.toString());
        boolean matches = matcher.matches();
        return matches;
    }
}
