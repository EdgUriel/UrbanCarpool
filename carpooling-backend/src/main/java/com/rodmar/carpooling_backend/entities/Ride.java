package com.rodmar.carpooling_backend.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "rides")
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ride_seq")
    @SequenceGenerator(name = "ride_seq", sequenceName = "ride_seq", allocationSize = 1)
    @Column(name = "ride_id")
    private Long rideId;

    @Column(name = "origin", nullable = false)
    private String origin;

    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "available_seats", nullable = false)
    private Integer availableSeats;

    @Column(name = "car", nullable = false)
    private String car;

    @Column(name = "plate", nullable = false)
    private String plate;

    @Column(name = "departure_datetime", nullable = false)  // Cambié "departure_time" a "departure_datetime"
    private LocalDateTime departureDatetime;  // Cambié el nombre a "departureDatetime" para reflejar el cambio

    @Column(name = "seat_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal seatPrice;

    @Column(name = "driver_name", nullable = false)
    private String driverName;

    @Column(name = "driver_phone")
    private String driverPhone;

    @Column(name = "driver_rating")
    private Double driverRating;

    @Column(name = "pets_allowed")  // Cambié "Character" por "Integer" para reflejar el uso de 0/1
    private Integer petsAllowed;  // Cambié de "Character" a "Integer"

    @Column(name = "music_preference")  // Cambié "Character" por "Integer" para reflejar el uso de 0/1
    private Integer musicPreference;  // Cambié de "Character" a "Integer"

    @Column(name = "driver_gender")
    private String driverGender;

    @Column(name = "travel_preference")
    private String travelPreference;

    @Column(name = "max_passenger_price")
    private BigDecimal maxPassengerPrice;

    @Column(name = "passenger_seats_needed")
    private Integer passengerSeatsNeeded;

    @Column(name = "require_pets")  // Cambié "Character" por "Integer" para reflejar el uso de 0/1
    private Integer requirePets;  // Cambié de "Character" a "Integer"

    @Column(name = "require_music")  // Cambié "Character" por "Integer" para reflejar el uso de 0/1
    private Integer requireMusic;  // Cambié de "Character" a "Integer"

    @Column(name = "require_gender")
    private String requireGender;

    // Constructor sin parámetros
    public Ride() {}

    // Constructor con parámetros
    public Ride(String origin, String destination, Integer availableSeats, String car, String plate, 
                LocalDateTime departureDatetime, BigDecimal seatPrice, String driverName, 
                String driverPhone, Double driverRating, Integer petsAllowed, Integer musicPreference, 
                String driverGender, String travelPreference, BigDecimal maxPassengerPrice, 
                Integer passengerSeatsNeeded, Integer requirePets, Integer requireMusic, String requireGender) {
        this.origin = origin;
        this.destination = destination;
        this.availableSeats = availableSeats;
        this.car = car;
        this.plate = plate;
        this.departureDatetime = departureDatetime;
        this.seatPrice = seatPrice;
        this.driverName = driverName;
        this.driverPhone = driverPhone;
        this.driverRating = driverRating;
        this.petsAllowed = petsAllowed;
        this.musicPreference = musicPreference;
        this.driverGender = driverGender;
        this.travelPreference = travelPreference;
        this.maxPassengerPrice = maxPassengerPrice;
        this.passengerSeatsNeeded = passengerSeatsNeeded;
        this.requirePets = requirePets;
        this.requireMusic = requireMusic;
        this.requireGender = requireGender;
    }

    // Getters y Setters

    public Long getRideId() {
        return rideId;
    }

    public void setRideId(Long rideId) {
        this.rideId = rideId;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Integer getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(Integer availableSeats) {
        this.availableSeats = availableSeats;
    }

    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public LocalDateTime getDepartureDatetime() {
        return departureDatetime;
    }

    public void setDepartureDatetime(LocalDateTime departureDatetime) {
        this.departureDatetime = departureDatetime;
    }

    public BigDecimal getSeatPrice() {
        return seatPrice;
    }

    public void setSeatPrice(BigDecimal seatPrice) {
        this.seatPrice = seatPrice;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getDriverPhone() {
        return driverPhone;
    }

    public void setDriverPhone(String driverPhone) {
        this.driverPhone = driverPhone;
    }

    public Double getDriverRating() {
        return driverRating;
    }

    public void setDriverRating(Double driverRating) {
        this.driverRating = driverRating;
    }

    public Integer getPetsAllowed() {
        return petsAllowed;
    }

    public void setPetsAllowed(Integer petsAllowed) {
        this.petsAllowed = petsAllowed;
    }

    public Integer getMusicPreference() {
        return musicPreference;
    }

    public void setMusicPreference(Integer musicPreference) {
        this.musicPreference = musicPreference;
    }

    public String getDriverGender() {
        return driverGender;
    }

    public void setDriverGender(String driverGender) {
        this.driverGender = driverGender;
    }

    public String getTravelPreference() {
        return travelPreference;
    }

    public void setTravelPreference(String travelPreference) {
        this.travelPreference = travelPreference;
    }

    public BigDecimal getMaxPassengerPrice() {
        return maxPassengerPrice;
    }

    public void setMaxPassengerPrice(BigDecimal maxPassengerPrice) {
        this.maxPassengerPrice = maxPassengerPrice;
    }

    public Integer getPassengerSeatsNeeded() {
        return passengerSeatsNeeded;
    }

    public void setPassengerSeatsNeeded(Integer passengerSeatsNeeded) {
        this.passengerSeatsNeeded = passengerSeatsNeeded;
    }

    public Integer getRequirePets() {
        return requirePets;
    }

    public void setRequirePets(Integer requirePets) {
        this.requirePets = requirePets;
    }

    public Integer getRequireMusic() {
        return requireMusic;
    }

    public void setRequireMusic(Integer requireMusic) {
        this.requireMusic = requireMusic;
    }

    public String getRequireGender() {
        return requireGender;
    }

    public void setRequireGender(String requireGender) {
        this.requireGender = requireGender;
    }
}
