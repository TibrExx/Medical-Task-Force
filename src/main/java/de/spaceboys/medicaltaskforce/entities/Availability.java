package de.spaceboys.medicaltaskforce.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Availability {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private Boolean upToTwoDaysDuty;

  @Column
  private Boolean upToFiveDaysDuty;

  @Column
  private Boolean weekendDuty;
}
