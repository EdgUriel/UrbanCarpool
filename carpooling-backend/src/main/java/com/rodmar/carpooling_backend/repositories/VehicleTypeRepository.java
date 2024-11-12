package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface VehicleTypeRepository extends JpaRepository<VehicleType, Long> {
    // Método para buscar por nombre
    Optional<VehicleType> findByName(String name);
}
