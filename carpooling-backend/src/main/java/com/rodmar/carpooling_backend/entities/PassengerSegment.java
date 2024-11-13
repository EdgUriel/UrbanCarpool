package com.rodmar.carpooling_backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "PASSENGER_SEGMENTS")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class PassengerSegment {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "passenger_segment_seq")
    @SequenceGenerator(name = "passenger_segment_seq", sequenceName = "passenger_segment_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ride_ID", nullable = false)
    @JsonIgnoreProperties({ "driver", "vehicle", "route", "passengerSegments" })
    private Ride ride;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "passenger_ID", nullable = false)
    @JsonIgnoreProperties({ "rides", "vehicles", "password" })
    private User passenger;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "segment_start_ID", nullable = false)
    @JsonIgnoreProperties({ "route" })
    private RouteSegment segmentStart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "segment_end_ID", nullable = false)
    @JsonIgnoreProperties({ "route" })
    private RouteSegment segmentEnd;

    // Constructor por defecto
    public PassengerSegment() {
    }

    // Constructor con parámetros
    public PassengerSegment(Ride ride, User passenger, RouteSegment segmentStart, RouteSegment segmentEnd) {
        this.ride = ride;
        this.passenger = passenger;
        this.segmentStart = segmentStart;
        this.segmentEnd = segmentEnd;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Ride getRide() {
        return ride;
    }

    public void setRide(Ride ride) {
        this.ride = ride;
    }

    public User getPassenger() {
        return passenger;
    }

    public void setPassenger(User passenger) {
        this.passenger = passenger;
    }

    public RouteSegment getSegmentStart() {
        return segmentStart;
    }

    public void setSegmentStart(RouteSegment segmentStart) {
        this.segmentStart = segmentStart;
    }

    public RouteSegment getSegmentEnd() {
        return segmentEnd;
    }

    public void setSegmentEnd(RouteSegment segmentEnd) {
        this.segmentEnd = segmentEnd;
    }
}
