package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.PassengerSegment;
import com.rodmar.carpooling_backend.services.PassengerSegmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/passenger-segments")
@CrossOrigin(origins = "http://localhost:3000")
public class PassengerSegmentController {
    @Autowired
    private PassengerSegmentService passengerSegmentService;

    // Endpoint para que un pasajero se una a un ride
    @PostMapping("/join")
    public ResponseEntity<PassengerSegment> joinRide(
            @RequestParam Long rideId,
            @RequestParam Long passengerId,
            @RequestParam Long segmentStartId,
            @RequestParam Long segmentEndId) {
        PassengerSegment passengerSegment = passengerSegmentService.joinRide(rideId, passengerId, segmentStartId,
                segmentEndId);
        return new ResponseEntity<>(passengerSegment, HttpStatus.CREATED);
    }
}
