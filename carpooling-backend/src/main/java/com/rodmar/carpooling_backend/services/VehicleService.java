package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.entities.Vehicle;
import com.rodmar.carpooling_backend.entities.VehicleModel;
import com.rodmar.carpooling_backend.entities.VehicleType;
import com.rodmar.carpooling_backend.repositories.UserRepository;
import com.rodmar.carpooling_backend.repositories.VehicleRepository;
import com.rodmar.carpooling_backend.repositories.VehicleModelRepository;
import com.rodmar.carpooling_backend.repositories.VehicleTypeRepository;
import com.rodmar.carpooling_backend.dto.VehicleDTO;
import com.rodmar.carpooling_backend.exception.VehicleAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final UserRepository userRepository;
    private final VehicleModelRepository vehicleModelRepository;
    private final VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepository,
            UserRepository userRepository,
            VehicleModelRepository vehicleModelRepository,
            VehicleTypeRepository vehicleTypeRepository) {
        this.vehicleRepository = vehicleRepository;
        this.userRepository = userRepository;
        this.vehicleModelRepository = vehicleModelRepository;
        this.vehicleTypeRepository = vehicleTypeRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        if (vehicleRepository.existsByPlate(vehicle.getPlate())) {
            throw new VehicleAlreadyExistsException("Vehicle with this plate already exists");
        }
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public VehicleDTO convertToDTO(Vehicle vehicle) {
        return new VehicleDTO(
                vehicle.getId(),
                vehicle.getPlate(),
                vehicle.getUser().getId(),
                vehicle.getModel().getId(),
                vehicle.getType().getId());
    }

    public Vehicle convertDTOToEntity(VehicleDTO vehicleDTO) {
        User user = userRepository.findById(vehicleDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        VehicleModel model = vehicleModelRepository.findById(vehicleDTO.getModelId())
                .orElseThrow(() -> new IllegalArgumentException("Model not found"));
        VehicleType type = vehicleTypeRepository.findById(vehicleDTO.getTypeId())
                .orElseThrow(() -> new IllegalArgumentException("Type not found"));

        return new Vehicle(user, model, type, vehicleDTO.getPlate());
    }
}
