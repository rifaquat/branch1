package com.vms.ws.validation.anontations;

import com.vms.ws.validation.validators.NonMandatoryValidations;
import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * Created by LG on 4/1/2017.
 */
@Target( {ElementType.FIELD} )
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = NonMandatoryValidations.class)
@Documented
public @interface NonMandatory {
    String message() default "{unique.mobile.number.violation}";
    String regex() default "";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
