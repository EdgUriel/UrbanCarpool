package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.dto.RideDTO;
import com.rodmar.carpooling_backend.services.RideService;
import org.springframework.beans.factory.annotation.Autowired;
import com.rodmar.carpooling_backend.exception.RideNotFoundException;
import com.rodmar.carpooling_backend.entities.PassengerSegment;
import com.rodmar.carpooling_backend.exception.SeatsUnavailableException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/rides")
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {

    @Autowired
    private RideService rideService;

    // Obtener todos los viajes
    @GetMapping
    public ResponseEntity<List<RideDTO>> getAllRides() {
        List<RideDTO> rides = rideService.getAllRides();
        if (rides.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rides, HttpStatus.OK);
    }

    // Crear un nuevo viaje
    @PostMapping
    public ResponseEntity<Ride> createRide(@RequestBody RideDTO rideDTO) {
        try {
            Ride ride = rideService.createRide(rideDTO);
            return new ResponseEntity<>(ride, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Endpoint de búsqueda
    @GetMapping("/search")
    public ResponseEntity<List<RideDTO>> searchRides(
            @RequestParam String origin,
            @RequestParam String destination,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        try {
            List<RideDTO> rides = rideService.searchRides(origin, destination, date);
            return new ResponseEntity<>(rides, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Obtener un viaje por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Ride> getRideById(@PathVariable Long id) {
        try {
            Ride ride = rideService.getRideById(id);
            return new ResponseEntity<>(ride, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Actualizar un viaje existente
    @PutMapping("/{id}")
    public ResponseEntity<Ride> updateRide(@PathVariable Long id, @RequestBody Ride ride) {
        try {
            Ride updatedRide = rideService.updateRide(id, ride);
            return new ResponseEntity<>(updatedRide, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar un viaje
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRide(@PathVariable Long id) {
        try {
            rideService.deleteRide(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Join a ride
    @PostMapping("/{id}/join")
    public ResponseEntity<PassengerSegment> joinRide(@PathVariable Long id, @RequestParam Long passengerId) {
        try {
            PassengerSegment passengerSegment = rideService.joinRide(id, passengerId);
            return new ResponseEntity<>(passengerSegment, HttpStatus.CREATED);
        } catch (RideNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (SeatsUnavailableException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
