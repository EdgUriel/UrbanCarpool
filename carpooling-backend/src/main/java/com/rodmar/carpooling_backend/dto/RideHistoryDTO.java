package com.rodmar.carpooling_backend.dto;

import java.time.LocalDateTime;

public class RideHistoryDTO {

    private Long id;  // ID del historial
    private Long rideId;  // ID del viaje
    private Long userId;  // ID del usuario
    private String role;  // Rol del usuario (por ejemplo, "passenger", "driver")
    private LocalDateTime joinedAt;  // Fecha y hora en que el usuario se unió al viaje

    // Información del usuario
    private String userFirstName;  // Nombre del usuario
    private String userLastName;   // Apellido del usuario

    // Información del viaje (solo lo más relevante)
    private String rideOrigin;  // Origen del viaje
    private String rideDestination;  // Destino del viaje
    private LocalDateTime rideStartTime;  // Hora de inicio del viaje

    // Constructor
    public RideHistoryDTO(Long id, Long rideId, Long userId, String role, LocalDateTime joinedAt, 
                          String userFirstName, String userLastName, String rideOrigin, 
                          String rideDestination, LocalDateTime rideStartTime) {
        this.id = id;
        this.rideId = rideId;
        this.userId = userId;
        this.role = role;
        this.joinedAt = joinedAt;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.rideOrigin = rideOrigin;
        this.rideDestination = rideDestination;
        this.rideStartTime = rideStartTime;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRideId() {
        return rideId;
    }

    public void setRideId(Long rideId) {
        this.rideId = rideId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }

    public void setJoinedAt(LocalDateTime joinedAt) {
        this.joinedAt = joinedAt;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getRideOrigin() {
        return rideOrigin;
    }

    public void setRideOrigin(String rideOrigin) {
        this.rideOrigin = rideOrigin;
    }

    public String getRideDestination() {
        return rideDestination;
    }

    public void setRideDestination(String rideDestination) {
        this.rideDestination = rideDestination;
    }

    public LocalDateTime getRideStartTime() {
        return rideStartTime;
    }

    public void setRideStartTime(LocalDateTime rideStartTime) {
        this.rideStartTime = rideStartTime;
    }
}
