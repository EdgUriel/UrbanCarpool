package com.rodmar.carpooling_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "VEHICLE_TYPE")
public class VehicleType {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vehicle_type_seq")
    @SequenceGenerator(name = "vehicle_type_seq", sequenceName = "vehicle_type_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;
    
    @Column(name = "NAME", nullable = false)
    private String name;

    // Constructor por defecto (sin parámetros)
    public VehicleType() {}

    // Constructor con parámetros
    public VehicleType(String name) {
        this.name = name;
    }

    // Getters and Setters
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
