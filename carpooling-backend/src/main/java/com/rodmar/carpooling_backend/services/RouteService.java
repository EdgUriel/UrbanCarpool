package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.Route;
import com.rodmar.carpooling_backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteService {
    @Autowired
    private RouteRepository routeRepository;

    // Obtener todas las rutas
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    // Crear una nueva ruta
    public Route createRoute(Route route) {
        return routeRepository.save(route);
    }

    // Obtener una ruta por su ID
    public Optional<Route> getRouteById(Long id) {
        return routeRepository.findById(id);
    }

    // Actualizar una ruta existente
    public Route updateRoute(Long id, Route route) {
        Optional<Route> existingRoute = routeRepository.findById(id);
        if (existingRoute.isPresent()) {
            route.setId(id);
            return routeRepository.save(route);
        } else {
            throw new RuntimeException("Route with id " + id + " not found");
        }
    }

    // Eliminar una ruta
    public void deleteRoute(Long id) {
        routeRepository.deleteById(id);
    }
}
