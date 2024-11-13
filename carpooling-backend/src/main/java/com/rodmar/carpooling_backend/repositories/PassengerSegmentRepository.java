package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.PassengerSegment;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassengerSegmentRepository extends JpaRepository<PassengerSegment, Long> {
    List<PassengerSegment> findByPassengerId(Long passengerId);

    Optional<PassengerSegment> findByRideIdAndPassengerId(Long rideId, Long passengerId);

}
