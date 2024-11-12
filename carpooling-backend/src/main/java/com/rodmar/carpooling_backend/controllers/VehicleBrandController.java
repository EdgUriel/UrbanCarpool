package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.VehicleBrand;
import com.rodmar.carpooling_backend.services.VehicleBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicle-brands")
public class VehicleBrandController {

    private final VehicleBrandService vehicleBrandService;

    @Autowired
    public VehicleBrandController(VehicleBrandService vehicleBrandService) {
        this.vehicleBrandService = vehicleBrandService;
    }

    @GetMapping
    public List<VehicleBrand> getAllVehicleBrands() {
        return vehicleBrandService.getAllVehicleBrands();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleBrand> getVehicleBrandById(@PathVariable Long id) {
        Optional<VehicleBrand> vehicleBrand = vehicleBrandService.getVehicleBrandById(id);
        return vehicleBrand.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<VehicleBrand> createVehicleBrand(@RequestBody VehicleBrand vehicleBrand) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vehicleBrandService.createVehicleBrand(vehicleBrand));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicleBrand(@PathVariable Long id) {
        try {
            vehicleBrandService.deleteVehicleBrand(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Exception handler for handling specific errors
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleException(IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
