package com.vms.ws.validation.anontations;

import com.vms.ws.validation.validators.EmailIdValidator;
import com.vms.ws.validation.validators.UniqueEmailValidatorConstraints;
import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * Created by LocationGuru on 03-06-2017.
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidatorConstraints.class)
@Documented
public @interface UniqueEmailId {
    String message() default "{unique.email.id.violation}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    Class<? extends EmailIdValidator> service();
    String serviceQualifier() default "";
}
