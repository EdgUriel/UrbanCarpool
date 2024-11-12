package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    boolean existsByPlate(String plate);  // Método para verificar si existe un vehículo con la misma matrícula
}
