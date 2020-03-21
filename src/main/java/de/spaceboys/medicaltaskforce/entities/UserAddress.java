package de.spaceboys.medicaltaskforce.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class UserAddress {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private Integer zipCode;

  @Column
  private String streetName;

  @Column
  private Integer number;
}
