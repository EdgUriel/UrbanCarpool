package com.rodmar.carpooling_backend.dto;

public class PassengerSegmentDTO {
    private Long id;
    private Long rideId;
    private Long passengerId;
    private Long segmentStartId;
    private Long segmentEndId;

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

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public Long getSegmentStartId() {
        return segmentStartId;
    }

    public void setSegmentStartId(Long segmentStartId) {
        this.segmentStartId = segmentStartId;
    }

    public Long getSegmentEndId() {
        return segmentEndId;
    }

    public void setSegmentEndId(Long segmentEndId) {
        this.segmentEndId = segmentEndId;
    }
}
