package com.rodmar.carpooling_backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import io.github.cdimascio.dotenv.Dotenv;

import java.util.Collections;

@RestController
@RequestMapping("/api/maps")
@CrossOrigin(origins = "http://localhost:3000") // Permitir solicitudes desde el frontend
public class MapController {
    private final String API_KEY;

    @Autowired
    private RestTemplate restTemplate;

    public MapController() {
        Dotenv dotenv = Dotenv.load();
        API_KEY = dotenv.get("GOOGLE_MAPS_API_KEY");
    }

    @GetMapping("/directions")
    public ResponseEntity<?> getDirections(
            @RequestParam String origin,
            @RequestParam String destination,
            @RequestParam(defaultValue = "true") boolean alternatives) {
        if (API_KEY == null || API_KEY.isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "API key is missing or invalid"));
        }
        String url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin
                + "&destination=" + destination
                + "&alternatives=" + alternatives
                + "&key=" + API_KEY;
        try {
            String response = restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(response); // Devolver el JSON de la API
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Error al obtener direcciones: " + e.getMessage()));
        }
    }
}
