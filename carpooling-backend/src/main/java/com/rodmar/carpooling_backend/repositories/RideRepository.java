package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.Ride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
    // Aquí puedes agregar métodos de consulta personalizados si los necesitas
}
