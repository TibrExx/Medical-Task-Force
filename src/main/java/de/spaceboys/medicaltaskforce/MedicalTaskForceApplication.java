package de.spaceboys.medicaltaskforce;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class MedicalTaskForceApplication {
	public static void main(String[] args) {
	    SpringApplication.run(MedicalTaskForceApplication.class, args);
        log.info("Hello spaceboys");
	}
}
