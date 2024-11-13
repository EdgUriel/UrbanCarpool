package com.rodmar.carpooling_backend.exception;

public class VehicleAlreadyExistsException extends RuntimeException {
    public VehicleAlreadyExistsException(String message) {
        super(message);
    }

    public VehicleAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}
