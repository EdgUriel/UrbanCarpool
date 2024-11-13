package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.RideHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RideHistoryRepository extends JpaRepository<RideHistory, Long> {

    // Buscar el historial de viajes de un usuario
    List<RideHistory> findByUserId(Long userId);

    // Buscar el historial de viajes por viaje específico
    List<RideHistory> findByRideId(Long rideId);
}
