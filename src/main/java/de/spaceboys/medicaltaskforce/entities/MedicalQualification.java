package de.spaceboys.medicaltaskforce.entities;

import static javax.persistence.EnumType.STRING;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class MedicalQualification {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  @Enumerated(STRING)
  private Qualification qualification;

  @Column
  private LocalDate lastTimeActive;

  @Column
  private String description;

  public enum Qualification {
    PARAMEDIC,
    EMT,
    MEDICAL_ASSISTANT,
    NURSE,
    NURSING_ASSISTANT,
    OTHER;
  }


}
