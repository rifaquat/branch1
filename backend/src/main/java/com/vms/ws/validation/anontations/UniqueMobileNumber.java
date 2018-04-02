package com.vms.ws.validation.anontations;

import com.vms.ws.validation.validators.MobileNumberValidator;
import com.vms.ws.validation.validators.UniqueMobileNumberValidatorConstraints;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * Created by LocationGuru on 03-06-2017.
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueMobileNumberValidatorConstraints.class)
@Documented
public @interface UniqueMobileNumber {
    String message() default "{unique.mobile.number.violation}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    Class<? extends MobileNumberValidator> service();
    String serviceQualifier() default "";
}
