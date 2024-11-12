package com.rodmar.carpooling_backend.controllers;

import com.rodmar.carpooling_backend.entities.Route;
import com.rodmar.carpooling_backend.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/routes")
@CrossOrigin(origins = "http://localhost:3000")
public class RouteController {
    @Autowired
    private RouteService routeService;

    // Obtener todas las rutas
    @GetMapping
    public ResponseEntity<List<Route>> getAllRoutes() {
        List<Route> routes = routeService.getAllRoutes();
        if (routes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(routes, HttpStatus.OK);
    }

    // Crear una nueva ruta
    @PostMapping
    public ResponseEntity<Route> createRoute(@RequestBody Route route) {
        Route newRoute = routeService.createRoute(route);
        return new ResponseEntity<>(newRoute, HttpStatus.CREATED);
    }

    // Obtener una ruta por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Route> getRouteById(@PathVariable Long id) {
        Optional<Route> route = routeService.getRouteById(id);
        return route.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Actualizar una ruta existente
    @PutMapping("/{id}")
    public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route route) {
        try {
            Route updatedRoute = routeService.updateRoute(id, route);
            return new ResponseEntity<>(updatedRoute, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar una ruta
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoute(@PathVariable Long id) {
        routeService.deleteRoute(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
