package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.VehicleType;
import com.rodmar.carpooling_backend.repositories.VehicleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleTypeService {

    private final VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    public VehicleTypeService(VehicleTypeRepository vehicleTypeRepository) {
        this.vehicleTypeRepository = vehicleTypeRepository;
    }

    public List<VehicleType> getAllVehicleTypes() {
        return vehicleTypeRepository.findAll();
    }

    public Optional<VehicleType> getVehicleTypeById(Long id) {
        return vehicleTypeRepository.findById(id);
    }

    public VehicleType createVehicleType(VehicleType vehicleType) {
        return vehicleTypeRepository.save(vehicleType);
    }

    public void deleteVehicleType(Long id) {
        try {
            vehicleTypeRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            // Handle exception if no entity is found
            throw new IllegalArgumentException("Vehicle Type with id " + id + " not found.");
        }
    }
}
