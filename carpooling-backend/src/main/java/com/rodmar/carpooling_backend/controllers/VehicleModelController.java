package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.VehicleModel;
import com.rodmar.carpooling_backend.services.VehicleModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicle-models")
public class VehicleModelController {

    private final VehicleModelService vehicleModelService;

    @Autowired
    public VehicleModelController(VehicleModelService vehicleModelService) {
        this.vehicleModelService = vehicleModelService;
    }

    // Obtener todos los modelos de vehículos
    @GetMapping
    public List<VehicleModel> getAllVehicleModels() {
        return vehicleModelService.getAllVehicleModels();
    }

    // Obtener un modelo de vehículo por ID
    @GetMapping("/{id}")
    public ResponseEntity<VehicleModel> getVehicleModelById(@PathVariable Long id) {
        Optional<VehicleModel> vehicleModel = vehicleModelService.getVehicleModelById(id);
        return vehicleModel.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Crear un nuevo modelo de vehículo
    @PostMapping
    public ResponseEntity<VehicleModel> createVehicleModel(@RequestBody VehicleModel vehicleModel) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vehicleModelService.createVehicleModel(vehicleModel));
    }

    // Eliminar un modelo de vehículo por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicleModel(@PathVariable Long id) {
        try {
            vehicleModelService.deleteVehicleModel(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // Manejador de excepciones
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleException(IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
