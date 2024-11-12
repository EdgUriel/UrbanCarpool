package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    @Query("SELECT CASE WHEN COUNT(v) > 0 THEN TRUE ELSE FALSE END FROM Vehicle v WHERE v.plate = :plate")
    boolean existsByPlate(@Param("plate") String plate);
}
