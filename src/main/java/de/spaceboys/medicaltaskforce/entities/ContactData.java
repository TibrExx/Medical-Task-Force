package de.spaceboys.medicaltaskforce.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class ContactData {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String mailAddress;

  @Column
  private String phoneNumber;
}
