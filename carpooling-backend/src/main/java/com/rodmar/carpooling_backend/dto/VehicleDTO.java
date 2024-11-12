package com.rodmar.carpooling_backend.dto;

public class VehicleDTO {

    private Long id;
    private String plate;
    private Long userId;  // Solo el ID del usuario
    private Long modelId; // Solo el ID del modelo
    private Long typeId;  // Solo el ID del tipo

    // Constructor por defecto
    public VehicleDTO() {}

    // Constructor con parámetros
    public VehicleDTO(Long id, String plate, Long userId, Long modelId, Long typeId) {
        this.id = id;
        this.plate = plate;
        this.userId = userId;
        this.modelId = modelId;
        this.typeId = typeId;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getModelId() {
        return modelId;
    }

    public void setModelId(Long modelId) {
        this.modelId = modelId;
    }

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }
}
