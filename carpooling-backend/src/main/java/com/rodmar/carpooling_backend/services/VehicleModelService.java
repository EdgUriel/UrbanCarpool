package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.VehicleModel;
import com.rodmar.carpooling_backend.repositories.VehicleModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleModelService {

    private final VehicleModelRepository vehicleModelRepository;

    @Autowired
    public VehicleModelService(VehicleModelRepository vehicleModelRepository) {
        this.vehicleModelRepository = vehicleModelRepository;
    }

    // Obtener todos los modelos de vehículos
    public List<VehicleModel> getAllVehicleModels() {
        return vehicleModelRepository.findAll();
    }

    // Obtener un modelo de vehículo por su ID
    public Optional<VehicleModel> getVehicleModelById(Long id) {
        return vehicleModelRepository.findById(id);
    }

    // Crear un nuevo modelo de vehículo
    public VehicleModel createVehicleModel(VehicleModel vehicleModel) {
        return vehicleModelRepository.save(vehicleModel);
    }

    // Eliminar un modelo de vehículo por su ID
    public void deleteVehicleModel(Long id) {
        try {
            vehicleModelRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new IllegalArgumentException("Modelo de vehículo no encontrado para eliminar");
        }
    }
}
