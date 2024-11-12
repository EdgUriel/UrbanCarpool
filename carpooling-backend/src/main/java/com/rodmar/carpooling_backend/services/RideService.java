package com.rodmar.carpooling_backend.service;

import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.repositories.RideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rodmar.carpooling_backend.exception.RideNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class RideService {

    @Autowired
    private RideRepository rideRepository;

    // Obtener todos los viajes
    public List<Ride> getAllRides() {
        return rideRepository.findAll();
    }

    // Crear un nuevo viaje
    public Ride createRide(Ride ride) {
        // Aquí podrías agregar validaciones o lógica adicional si es necesario
        return rideRepository.save(ride);
    }

    // Actualizar un viaje existente
    public Ride updateRide(Long id, Ride ride) {
        Optional<Ride> existingRide = rideRepository.findById(id);
        if (existingRide.isPresent()) {
            ride.setId(id); // Establecer el ID para actualizar el viaje existente
            return rideRepository.save(ride);
        } else {
            throw new RideNotFoundException("Ride with id " + id + " not found");
        }
    }

    // Eliminar un viaje
    public void deleteRide(Long id) {
        Optional<Ride> existingRide = rideRepository.findById(id);
        if (existingRide.isPresent()) {
            rideRepository.deleteById(id);
        } else {
            throw new RideNotFoundException("Ride with id " + id + " not found");
        }
    }
}
