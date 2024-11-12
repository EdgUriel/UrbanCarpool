package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.exception.RideNotFoundException;
import com.rodmar.carpooling_backend.services.RideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rides")
@CrossOrigin(origins = "http://localhost:3000") // Permite solicitudes desde el frontend
public class RideController {

    @Autowired
    private RideService rideService;

    // Obtener todos los viajes
    @GetMapping
    public ResponseEntity<List<Ride>> getAllRides() {
        List<Ride> rides = rideService.getAllRides();
        if (rides.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content si no hay viajes
        }
        return new ResponseEntity<>(rides, HttpStatus.OK);
    }

    // Crear un nuevo viaje
    @PostMapping
    public ResponseEntity<Ride> createRide(@RequestBody Ride ride) {
        Ride newRide = rideService.createRide(ride);
        return new ResponseEntity<>(newRide, HttpStatus.CREATED); // 201 Created
    }

    // Actualizar un viaje existente
    @PutMapping("/{id}")
    public ResponseEntity<Ride> updateRide(@PathVariable Long id, @RequestBody Ride ride) {
        try {
            Ride updatedRide = rideService.updateRide(id, ride);
            return new ResponseEntity<>(updatedRide, HttpStatus.OK); // 200 OK si la actualización fue exitosa
        } catch (RideNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 Not Found si no se encuentra el viaje
        }
    }

    // Eliminar un viaje
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRide(@PathVariable Long id) {
        try {
            rideService.deleteRide(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content si la eliminación fue exitosa
        } catch (RideNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 Not Found si no se encuentra el viaje
        }
    }
}
