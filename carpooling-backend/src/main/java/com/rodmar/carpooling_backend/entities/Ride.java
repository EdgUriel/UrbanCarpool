package com.rodmar.carpooling_backend.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "RIDES")
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ride_seq")
    @SequenceGenerator(name = "ride_seq", sequenceName = "ride_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;

    @Column(name = "route_ID", nullable = false)
    private Long routeId;

    @Column(name = "driver_ID", nullable = false)
    private Long driverId;

    @Column(name = "vehicle_ID", nullable = false)
    private Long vehicleId;

    @Column(name = "price", nullable = false, precision = 10)
    private BigDecimal price;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "available_seats", nullable = false)
    private Integer availableSeats;

    @Column(name = "max_seats", nullable = false)
    private Integer maxSeats;

    @Column(name = "pets_allowed")
    private Character petsAllowed;  // 'Y' para sí, 'N' para no

    @Column(name = "rating", precision = 2)
    private Double rating;

    @Column(name = "departure_datetime", nullable = false)
    private LocalDateTime departureDatetime;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    // Constructor sin parámetros
    public Ride() {}

    // Constructor con parámetros
    public Ride(Long routeId, Long driverId, Long vehicleId, BigDecimal price, String status, Integer availableSeats,
                Integer maxSeats, Character petsAllowed, Double rating, LocalDateTime departureDatetime) {
        this.routeId = routeId;
        this.driverId = driverId;
        this.vehicleId = vehicleId;
        this.price = price;
        this.status = status;
        this.availableSeats = availableSeats;
        this.maxSeats = maxSeats;
        this.petsAllowed = petsAllowed;
        this.rating = rating;
        this.departureDatetime = departureDatetime;
        this.createdAt = LocalDateTime.now();
    }

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(Integer availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Integer getMaxSeats() {
        return maxSeats;
    }

    public void setMaxSeats(Integer maxSeats) {
        this.maxSeats = maxSeats;
    }

    public Character getPetsAllowed() {
        return petsAllowed;
    }

    public void setPetsAllowed(Character petsAllowed) {
        this.petsAllowed = petsAllowed;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public LocalDateTime getDepartureDatetime() {
        return departureDatetime;
    }

    public void setDepartureDatetime(LocalDateTime departureDatetime) {
        this.departureDatetime = departureDatetime;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
