package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.Vehicle;
import com.rodmar.carpooling_backend.repositories.VehicleRepository;
import com.rodmar.carpooling_backend.dto.VehicleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    // Obtener todos los vehículos
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Obtener un vehículo por su ID
    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    // Crear un nuevo vehículo
    public Vehicle createVehicle(Vehicle vehicle) {
        // Validar si el vehículo ya existe por la matrícula
        if (vehicleRepository.existsByPlate(vehicle.getPlate())) {
            throw new IllegalArgumentException("Vehicle with this plate already exists");
        }
        return vehicleRepository.save(vehicle);
    }

    // Eliminar un vehículo por su ID
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    // Método para convertir Vehicle a VehicleDTO
    public VehicleDTO convertToDTO(Vehicle vehicle) {
        return new VehicleDTO(
            vehicle.getId(),
            vehicle.getPlate(),
            vehicle.getUser().getId(),  // Solo el ID del usuario
            vehicle.getModel().getId(), // Solo el ID del modelo
            vehicle.getType().getId()   // Solo el ID del tipo
        );
    }
}
