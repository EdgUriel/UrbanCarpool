package com.rodmar.carpooling_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rodmar.carpooling_backend.entities.doctor;

public interface DoctorRepository extends JpaRepository<doctor, Long> {
    // Puedes agregar métodos personalizados si lo necesitas
}
