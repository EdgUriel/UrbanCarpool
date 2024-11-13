package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.dto.CreateRideDTO;
import com.rodmar.carpooling_backend.dto.PassengerSegmentDTO;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Ride> createRide(@RequestBody CreateRideDTO createRideDTO) {
        try {
            Map<String, Object> rideData = new HashMap<>();
            rideData.put("origin", createRideDTO.getOrigin());
            rideData.put("destination", createRideDTO.getDestination());
            rideData.put("date", createRideDTO.getDate());
            rideData.put("seatsAvailable", createRideDTO.getSeatsAvailable());
            Ride ride = rideService.createNewRide(rideData);
            return new ResponseEntity<>(ride, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Endpoint para buscar viajes que coincidan con los criterios proporcionados.
     *
     * @param origin      Origen del pasajero.
     * @param destination Destino del pasajero.
     * @param date        Fecha del viaje.
     * @return Lista de RideDTO que coinciden con los criterios.
     */
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

    // Endpoint para obtener un viaje por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Ride> getRideById(@PathVariable Long id) {
        try {
            Ride ride = rideService.getRideById(id);
            return new ResponseEntity<>(ride, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{id}/join")
    public ResponseEntity<PassengerSegmentDTO> joinRide(@PathVariable Long id, @RequestParam Long passengerId) {
        try {
            PassengerSegmentDTO passengerSegment = rideService.joinRide(id, passengerId);
            return new ResponseEntity<>(passengerSegment, HttpStatus.CREATED);
        } catch (RideNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (SeatsUnavailableException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace(); // Esto imprimirá el error en los logs
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/{rideId}/addSeats")
    public ResponseEntity<?> addSeatsToRide(
            @PathVariable Long rideId,
            @RequestParam Long passengerId) {
        try {
            rideService.addSeatToRide(rideId, passengerId);
            return ResponseEntity.ok("Seat added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
