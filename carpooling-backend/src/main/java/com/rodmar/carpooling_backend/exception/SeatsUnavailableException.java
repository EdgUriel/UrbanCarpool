package com.rodmar.carpooling_backend.exception;

public class SeatsUnavailableException extends RuntimeException {
    public SeatsUnavailableException(String message) {
        super(message);
    }
}
