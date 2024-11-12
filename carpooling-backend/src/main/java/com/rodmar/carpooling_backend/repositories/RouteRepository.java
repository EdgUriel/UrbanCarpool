package com.rodmar.carpooling_backend.repositories;

import com.rodmar.carpooling_backend.entities.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
}
