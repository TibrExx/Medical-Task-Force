package de.spaceboys.medicaltaskforce.testData;

import com.github.javafaker.Faker;
import de.spaceboys.medicaltaskforce.entities.Availability;
import de.spaceboys.medicaltaskforce.entities.ContactData;
import de.spaceboys.medicaltaskforce.entities.MedicalQualification;
import de.spaceboys.medicaltaskforce.entities.MedicalQualification.Qualification;
import de.spaceboys.medicaltaskforce.entities.Mobility;
import de.spaceboys.medicaltaskforce.entities.Mobility.LicenseClasses;
import de.spaceboys.medicaltaskforce.entities.UserAddress;
import de.spaceboys.medicaltaskforce.entities.Volunteer;
import de.spaceboys.medicaltaskforce.repositories.VolunteerRepository;
import java.security.SecureRandom;
import java.time.ZoneId;
import java.util.Collections;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;

@RequiredArgsConstructor
@Slf4j
public class TestDataCreator {

  private final TestDataProperties testDataProperties;
  private final VolunteerRepository volunteerRepository;
  private final Faker faker;
  private static final SecureRandom random = new SecureRandom();


  @Async
  public void createTestData() {
    Optional.ofNullable(testDataProperties.getAmountOfTestEntries()).ifPresent(amount -> {
      log.info("Delete all entries");
      volunteerRepository.deleteAll();
      for (int i = 0; i < amount; i++) {
        Volunteer volunteer = new Volunteer();
        volunteer.setContactData(createContactData());
        volunteer.setForename(faker.name().firstName());
        volunteer.setSurname(faker.name().lastName());
        volunteer.setLanguages(Collections.singletonList(faker.nation().language()));
        volunteer.setMedicalQualification(createMedicalQualification());
        volunteer.setMobility(createMobility());
        volunteer.setAvailability(createAvailability());
        volunteer.setUserAddress(createUserAddress());
        volunteer.setGoogleId(faker.number().randomNumber(15, true));
        volunteerRepository.save(volunteer);
      }
      log.info("Saved new entries");
    });
  }

  private Availability createAvailability() {
    Availability availability = new Availability();
    availability.setUpToFiveDaysDuty(faker.bool().bool());
    availability.setUpToTwoDaysDuty(faker.bool().bool());
    availability.setWeekendDuty(faker.bool().bool());
    return availability;
  }

  private UserAddress createUserAddress() {
    UserAddress userAddress = new UserAddress();
    userAddress.setNumber(Integer.parseInt(faker.address().buildingNumber()));
    userAddress.setStreetName(faker.address().streetName());
    userAddress.setZipCode(faker.number().numberBetween(01001, 99998));
    return userAddress;
  }

  private Mobility createMobility() {
    Mobility mobility = new Mobility();
    mobility.setHasCar(faker.bool().bool());
    mobility.setLicenseClasses(Collections.singletonList(randomEnum(LicenseClasses.class)));
    return mobility;
  }

  private MedicalQualification createMedicalQualification() {
    MedicalQualification medicalQualification = new MedicalQualification();
    medicalQualification.setLastTimeActive(
        faker.date().past(10000, TimeUnit.DAYS).toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
    medicalQualification.setQualification(randomEnum(Qualification.class));
    medicalQualification.setYearsOfPractice(faker.number().numberBetween(1, 40));
    return medicalQualification;
  }

  private ContactData createContactData() {
    ContactData contactData = new ContactData();
    contactData.setPhoneNumber(faker.phoneNumber().phoneNumber());
    contactData.setMailAddress(faker.internet().emailAddress());
    return contactData;
  }

  public static <T extends Enum<?>> T randomEnum(Class<T> clazz) {
    int x = random.nextInt(clazz.getEnumConstants().length);
    return clazz.getEnumConstants()[x];
  }
}
