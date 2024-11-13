package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.dto.RideHistoryDTO;
import com.rodmar.carpooling_backend.entities.RideHistory;
import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.services.RideHistoryService;
import com.rodmar.carpooling_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ride-history")
public class RideHistoryController {

    private final RideHistoryService rideHistoryService;

    @Autowired
    private UserService userService;

    @Autowired
    public RideHistoryController(RideHistoryService rideHistoryService) {
        this.rideHistoryService = rideHistoryService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<RideHistoryDTO>> getHistoryByUserId(@PathVariable Long userId) {
        List<RideHistoryDTO> historyDTO = rideHistoryService.getHistoryByUserId(userId);
        if (historyDTO.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(historyDTO);
    }

    @GetMapping("/ride/{rideId}")
    public ResponseEntity<List<RideHistoryDTO>> getHistoryByRideId(@PathVariable Long rideId) {
        List<RideHistoryDTO> historyDTO = rideHistoryService.getHistoryByRideId(rideId);
        if (historyDTO.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(historyDTO);
    }

    @PostMapping
    public ResponseEntity<RideHistoryDTO> createRideHistory(@RequestBody RideHistory rideHistory) {
        RideHistoryDTO createdRideHistoryDTO = rideHistoryService.createRideHistory(rideHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRideHistoryDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RideHistoryDTO> getHistoryById(@PathVariable Long id) {
        Optional<RideHistoryDTO> historyDTO = rideHistoryService.getHistoryById(id);
        return historyDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRideHistory(@PathVariable Long id) {
        Optional<RideHistoryDTO> rideHistory = rideHistoryService.getHistoryById(id);
        if (rideHistory.isPresent()) {
            rideHistoryService.deleteRideHistory(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{email}/history")
    public ResponseEntity<List<RideHistoryDTO>> getRideHistoryByUserEmail(@PathVariable String email) {
        Optional<User> user = userService.findByEmail(email);
        if (user.isPresent()) {
            List<RideHistoryDTO> historyDTO = rideHistoryService.getHistoryByUserId(user.get().getId());
            return ResponseEntity.ok(historyDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
