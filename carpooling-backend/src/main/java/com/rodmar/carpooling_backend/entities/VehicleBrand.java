package com.rodmar.carpooling_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "VEHICLE_BRAND")
public class VehicleBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vehicle_brand_seq")
    @SequenceGenerator(name = "vehicle_brand_seq", sequenceName = "vehicle_brand_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    // Constructor sin parámetros
    public VehicleBrand() {}

    // Constructor con todos los parámetros
    public VehicleBrand(String name) {
        this.name = name;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
