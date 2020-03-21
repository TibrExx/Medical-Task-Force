package de.spaceboys.medicaltaskforce.entities;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;
import lombok.Data;

@Entity
@Data
public class Volunteer {

  @Id
  @GeneratedValue
  private Long id;

  @NotEmpty
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_address_id")
  private UserAddress userAddress;

  @Column
  @NotEmpty
  private String surname;

  @Column
  @NotEmpty
  private String forename;

  @NotEmpty
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "medical_qualification_id")
  private MedicalQualification medicalQualification;

  @NotEmpty
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "contact_data_id")
  private ContactData contactData;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "mobility_id")
  private Mobility mobility;

  @NotEmpty
  private String languages;
}
