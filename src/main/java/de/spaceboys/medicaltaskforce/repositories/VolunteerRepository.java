package de.spaceboys.medicaltaskforce.repositories;

import de.spaceboys.medicaltaskforce.entities.Volunteer;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

  Optional<Volunteer> findFirstByGoogleId(Long id);

  void deleteByGoogleId(Long id);
}
