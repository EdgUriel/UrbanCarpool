package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.Ride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
    List<Ride> findByDepartureDatetimeBetween(LocalDateTime start, LocalDateTime end);

    List<Ride> findByRouteOriginAndRouteDestinationAndDepartureDatetimeBetween(
            String origin, String destination, LocalDateTime start, LocalDateTime end);
}
