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

@RestController
@RequestMapping("/api/maps")
@CrossOrigin(origins = "http://localhost:3000") // Permitir solicitudes desde el frontend
public class MapController {

    private final String API_KEY = System.getenv("GOOGLE_MAPS_API_KEY");

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/directions")
    public ResponseEntity<?> getDirections(@RequestParam String origin, @RequestParam String destination) {
        String url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination="
                + destination + "&key=" + API_KEY;

        try {
            // Realiza la llamada a la API de Google Maps
            String response = restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(response); // Devolver el JSON de la API
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al obtener direcciones: " + e.getMessage());
        }
    }
}
