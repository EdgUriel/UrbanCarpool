package com.rodmar.carpooling_backend.dto;

import com.rodmar.carpooling_backend.entities.RideHistory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class RideHistoryMapper {

    public RideHistoryDTO mapToDTO(RideHistory rideHistory) {
        // Mapea los datos del historial de viaje
        Long rideId = rideHistory.getRide().getId();
        Long userId = rideHistory.getUser().getId();
        String role = rideHistory.getRole();
        LocalDateTime joinedAt = rideHistory.getJoinedAt();

        // Mapea los datos del usuario
        String userFirstName = rideHistory.getUser().getFirstName();
        String userLastName = rideHistory.getUser().getLastName();

        // Mapea los datos del viaje
        String rideOrigin = rideHistory.getRide().getRoute().getOrigin();
        String rideDestination = rideHistory.getRide().getRoute().getDestination();
        LocalDateTime rideStartTime = rideHistory.getRide().getRoute().getStartTime();

        return new RideHistoryDTO(
            rideHistory.getId(),
            rideId,
            userId,
            role,
            joinedAt,
            userFirstName,
            userLastName,
            rideOrigin,
            rideDestination,
            rideStartTime
        );
    }
}
