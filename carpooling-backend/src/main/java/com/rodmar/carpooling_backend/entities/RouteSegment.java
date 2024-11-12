package com.rodmar.carpooling_backend.entities;

import com.rodmar.carpooling_backend.entities.Route;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "ROUTE_SEGMENTS")
public class RouteSegment {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "route_segment_seq")
    @SequenceGenerator(name = "route_segment_seq", sequenceName = "route_segment_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "route_ID", nullable = false)
    @JsonIgnore
    private Route route;

    @Column(name = "origin", nullable = false)
    private String origin;

    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "segment_order", nullable = false)
    private int segmentOrder;

    // Constructor por defecto
    public RouteSegment() {
    }

    // Constructor con parámetros
    public RouteSegment(Route route, String origin, String destination, int segmentOrder) {
        this.route = route;
        this.origin = origin;
        this.destination = destination;
        this.segmentOrder = segmentOrder;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
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

    public int getSegmentOrder() {
        return segmentOrder;
    }

    public void setSegmentOrder(int segmentOrder) {
        this.segmentOrder = segmentOrder;
    }
}
