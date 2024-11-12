package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.VehicleBrand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleBrandRepository extends JpaRepository<VehicleBrand, Long> {
    // Puedes agregar consultas personalizadas si es necesario
}
