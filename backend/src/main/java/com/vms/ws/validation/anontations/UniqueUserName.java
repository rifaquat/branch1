package com.vms.ws.validation.anontations;


import com.vms.ws.validation.validators.UniqueUserNameConstraint;
import com.vms.ws.validation.validators.UserNameValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * Created by LG on 4/1/2017.
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueUserNameConstraint.class)
@Documented
public @interface UniqueUserName {

    String message() default "{unique.user.name.violation}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    Class<? extends UserNameValidator> service();
    String serviceQualifier() default "";
}