package com.rodmar.carpooling_backend.exceptions;

public class VehicleAlreadyExistsException extends RuntimeException {
    public VehicleAlreadyExistsException(String message) {
        super(message);
    }

    public VehicleAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}
