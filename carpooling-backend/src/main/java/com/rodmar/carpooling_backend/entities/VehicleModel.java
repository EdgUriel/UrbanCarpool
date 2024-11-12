package com.rodmar.carpooling_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "VEHICLE_MODEL")
public class VehicleModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vehicle_model_seq")
    @SequenceGenerator(name = "vehicle_model_seq", sequenceName = "vehicle_model_seq", allocationSize = 1)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_ID", nullable = false)
    private VehicleBrand brand;

    @Column(name = "NAME", length = 50, nullable = false)
    private String name;

    // Constructor por defecto (sin parámetros)
    public VehicleModel() {}

    // Constructor con parámetros
    public VehicleModel(VehicleBrand brand, String name) {
        this.brand = brand;
        this.name = name;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VehicleBrand getBrand() {
        return brand;
    }

    public void setBrand(VehicleBrand brand) {
        this.brand = brand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
