package com.virtualpairprogrammers.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class FleetmanApiGateway {
	public static void main(String[] args) {
		System.out.println("AUTHENTICATION EDITION");
		SpringApplication.run(FleetmanApiGateway.class, args);		
	}	
}

