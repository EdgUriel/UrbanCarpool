package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.PassengerSegment;
import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.entities.RouteSegment;
import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.repositories.PassengerSegmentRepository;
import com.rodmar.carpooling_backend.repositories.RideRepository;
import com.rodmar.carpooling_backend.repositories.RouteSegmentRepository;
import com.rodmar.carpooling_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PassengerSegmentService {
    @Autowired
    private PassengerSegmentRepository passengerSegmentRepository;

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RouteSegmentRepository routeSegmentRepository;

    // Método para que un pasajero se una a un ride
    public PassengerSegment joinRide(Long rideId, Long passengerId, Long segmentStartId, Long segmentEndId) {
        Ride ride = rideRepository.findById(rideId).orElseThrow(() -> new RuntimeException("Ride not found"));
        User passenger = userRepository.findById(passengerId)
                .orElseThrow(() -> new RuntimeException("Passenger not found"));
        RouteSegment segmentStart = routeSegmentRepository.findById(segmentStartId)
                .orElseThrow(() -> new RuntimeException("Segment start not found"));
        RouteSegment segmentEnd = routeSegmentRepository.findById(segmentEndId)
                .orElseThrow(() -> new RuntimeException("Segment end not found"));

        PassengerSegment passengerSegment = new PassengerSegment();
        passengerSegment.setRide(ride);
        passengerSegment.setPassenger(passenger);
        passengerSegment.setSegmentStart(segmentStart);
        passengerSegment.setSegmentEnd(segmentEnd);

        return passengerSegmentRepository.save(passengerSegment);
    }
}
