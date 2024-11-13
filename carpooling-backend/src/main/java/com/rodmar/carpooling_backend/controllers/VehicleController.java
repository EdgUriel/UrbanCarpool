package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.services.VehicleService;
import com.rodmar.carpooling_backend.dto.VehicleDTO;
import com.rodmar.carpooling_backend.entities.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        Optional<Vehicle> vehicle = vehicleService.getVehicleById(id);
        return vehicle.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody VehicleDTO vehicleDTO) {
        try {
            Vehicle vehicle = vehicleService.convertDTOToEntity(vehicleDTO);
            Vehicle createdVehicle = vehicleService.createVehicle(vehicle);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdVehicle);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        try {
            vehicleService.deleteVehicle(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/vehicles")
    public List<VehicleDTO> getVehicles() {
        return vehicleService.getAllVehicles().stream()
                .map(vehicleService::convertToDTO)
                .collect(Collectors.toList());
    }
}
