package de.spaceboys.medicaltaskforce.mapper;

import static org.mapstruct.ReportingPolicy.IGNORE;

import de.spaceboys.medicaltaskforce.controller.VolunteerDto;
import de.spaceboys.medicaltaskforce.entities.Volunteer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface VolunteerMapper {

  @Mapping(source = "zipCode", target = "userAddress.zipCode")
  @Mapping(source = "streetName", target = "userAddress.streetName")
  @Mapping(source = "number", target = "userAddress.number")
  @Mapping(source = "qualification", target = "medicalQualification.qualification")
  @Mapping(source = "lastTimeActive", target = "medicalQualification.lastTimeActive")
  @Mapping(source = "description", target = "medicalQualification.description")
  @Mapping(source = "yearsOfPractice", target = "medicalQualification.yearsOfPractice")
  @Mapping(source = "mailAddress", target = "contactData.mailAddress")
  @Mapping(source = "phoneNumber", target = "contactData.phoneNumber")
  @Mapping(source = "hasCar", target = "mobility.hasCar")
  @Mapping(source = "licenseClasses", target = "mobility.licenseClasses")
  @Mapping(source = "upToTwoDaysDuty", target = "availability.upToTwoDaysDuty")
  @Mapping(source = "upToFiveDaysDuty", target = "availability.upToFiveDaysDuty")
  @Mapping(source = "weekendDuty", target = "availability.weekendDuty")
  Volunteer volunteerDtoToVolunteer(VolunteerDto volunteerDto);
}
