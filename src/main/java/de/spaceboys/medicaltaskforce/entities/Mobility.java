package de.spaceboys.medicaltaskforce.entities;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Mobility {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private Boolean hasCar;

  @ElementCollection
  private List<LicenseClasses> licenseClasses;

  public enum LicenseClasses {
    CAR,
    TRUCK,
    BUS
  }

}
