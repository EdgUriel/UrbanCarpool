package com.rodmar.carpooling_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.rodmar.carpooling_backend.entities.RouteSegment;

public interface RouteSegmentRepository extends JpaRepository<RouteSegment, Long> {
    List<RouteSegment> findByRouteIdOrderBySegmentOrder(Long routeId);
}
