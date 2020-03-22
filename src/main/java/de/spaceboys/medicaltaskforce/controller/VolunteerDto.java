package de.spaceboys.medicaltaskforce.controller;

import de.spaceboys.medicaltaskforce.entities.MedicalQualification.Qualification;
import de.spaceboys.medicaltaskforce.entities.Mobility.LicenseClasses;
import java.time.LocalDate;
import java.util.List;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.Data;

@Data
public class VolunteerDto {

  @NotNull
  private Integer zipCode;

  private String streetName;

  private Integer number;

  @NotEmpty
  private String surname;

  @NotEmpty
  private String forename;

  @NotNull
  private Qualification qualification;

  @NotNull
  private LocalDate lastTimeActive;

  private String description;

  @NotEmpty
  @Email
  private String mailAddress;

  private String phoneNumber;

  @NotNull
  private Boolean hasCar;

  private List<LicenseClasses> licenseClasses;

  private List<String> languages;

  private Boolean upToTwoDaysDuty;

  private Boolean upToFiveDaysDuty;

  private Boolean weekendDuty;

  private Integer yearsOfPractice;
}
