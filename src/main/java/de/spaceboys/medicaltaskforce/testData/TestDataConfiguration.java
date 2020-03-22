package de.spaceboys.medicaltaskforce.testData;

import com.github.javafaker.Faker;
import de.spaceboys.medicaltaskforce.repositories.VolunteerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class TestDataConfiguration {

  private final TestDataProperties testDataProperties;
  private final VolunteerRepository volunteerRepository;

  @Bean
  @ConditionalOnProperty(value = "medicaltaskforce.testdata.enabled", havingValue = "true")
  public TestDataInitializer testDataInitializer() {
    return new TestDataInitializer(dataCreator());
  }

  @Bean
  public Faker faker() {
    return new Faker();
  }

  @Bean
  public TestDataCreator dataCreator() {
    return new TestDataCreator(testDataProperties, volunteerRepository, faker());
  }
}
