package de.spaceboys.medicaltaskforce.testData;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@RequiredArgsConstructor
@Slf4j
public class TestDataInitializer {

  private final DataCreator dataCreator;

  @EventListener(ApplicationReadyEvent.class)
  public void init() {
    dataCreator.createTestData();
  }

}
