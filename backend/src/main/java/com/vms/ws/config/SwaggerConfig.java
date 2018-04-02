package com.vms.ws.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/*@Configuration
@EnableSwagger2*/
public class SwaggerConfig {

    /**
     * API Documents are available at -
     * http://localhost:8080/Go/swagger-ui.html
     */

    @Bean
    public Docket api() {
	// @formatter:off
	return new Docket(DocumentationType.SWAGGER_2).select()
		.apis(RequestHandlerSelectors.any())
		.paths(PathSelectors.any()).build()
		.apiInfo(apiInfo());
	 // @formatter:on
    }

    private ApiInfo apiInfo() {
	// @formatter:off
	return new ApiInfoBuilder().title("Spring REST Sample with Swagger")
		.description("Spring REST Sample with Swagger description")
		.termsOfServiceUrl("http://www-03.ibm.com/software/sla/sladb.nsf/sla/bm?Open")
		.contact(new Contact("Pranay Damake", "http://harriersys.com", "pranay.damake@harriersys.com"))
		.license("Apache License Version 2.0")
		.licenseUrl("https://github.com/IBM-Bluemix/news-aggregator/blob/master/LICENSE")
		.version("1")
		.build();
	// @formatter:on
    }
}