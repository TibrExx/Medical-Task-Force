package de.spaceboys.medicaltaskforce;

import de.spaceboys.medicaltaskforce.testData.TestDataProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@Slf4j
@EnableConfigurationProperties(TestDataProperties.class)
public class MedicalTaskForceApplication {
	public static void main(String[] args) {
	    SpringApplication.run(MedicalTaskForceApplication.class, args);
        log.info("Hello spaceboys");
	}
}
