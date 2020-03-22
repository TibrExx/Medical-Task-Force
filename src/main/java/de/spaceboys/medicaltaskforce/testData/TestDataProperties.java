package de.spaceboys.medicaltaskforce.testData;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "medicaltaskforce.testdata")
@Data
public class TestDataProperties {
  private Boolean enabled;
  private Integer amountOfTestEntries;
}
