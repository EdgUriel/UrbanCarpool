package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.VehicleBrand;
import com.rodmar.carpooling_backend.repositories.VehicleBrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleBrandService {

    private final VehicleBrandRepository vehicleBrandRepository;

    @Autowired
    public VehicleBrandService(VehicleBrandRepository vehicleBrandRepository) {
        this.vehicleBrandRepository = vehicleBrandRepository;
    }

    // Obtener todas las marcas de vehículos
    public List<VehicleBrand> getAllVehicleBrands() {
        return vehicleBrandRepository.findAll();
    }

    // Obtener una marca de vehículo por ID
    public Optional<VehicleBrand> getVehicleBrandById(Long id) {
        return vehicleBrandRepository.findById(id);
    }

    // Crear una nueva marca de vehículo
    public VehicleBrand createVehicleBrand(VehicleBrand vehicleBrand) {
        return vehicleBrandRepository.save(vehicleBrand);
    }

    // Eliminar una marca de vehículo
    public void deleteVehicleBrand(Long id) {
        try {
            vehicleBrandRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new IllegalArgumentException("Vehicle brand with id " + id + " not found.");
        }
    }
}
