package com.rodmar.carpooling_backend.exception;

public class RideNotFoundException extends RuntimeException {
    public RideNotFoundException(String message) {
        super(message);
    }
}
