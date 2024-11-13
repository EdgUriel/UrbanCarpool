package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.dto.RideHistoryDTO;
import com.rodmar.carpooling_backend.dto.RideHistoryMapper;
import com.rodmar.carpooling_backend.entities.RideHistory;
import com.rodmar.carpooling_backend.repositories.RideHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RideHistoryService {

    private final RideHistoryRepository rideHistoryRepository;
    private final RideHistoryMapper rideHistoryMapper;

    @Autowired
    public RideHistoryService(RideHistoryRepository rideHistoryRepository, RideHistoryMapper rideHistoryMapper) {
        this.rideHistoryRepository = rideHistoryRepository;
        this.rideHistoryMapper = rideHistoryMapper;
    }

    public List<RideHistoryDTO> getHistoryByUserId(Long userId) {
        return rideHistoryRepository.findByUserId(userId)
                                    .stream()
                                    .map(rideHistoryMapper::mapToDTO)
                                    .collect(Collectors.toList());
    }

    public List<RideHistoryDTO> getHistoryByRideId(Long rideId) {
        return rideHistoryRepository.findByRideId(rideId)
                .stream()
                .map(rideHistoryMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public RideHistoryDTO createRideHistory(RideHistory rideHistory) {
        RideHistory savedHistory = rideHistoryRepository.save(rideHistory);
        return rideHistoryMapper.mapToDTO(savedHistory);
    }

    public Optional<RideHistoryDTO> getHistoryById(Long id) {
        return rideHistoryRepository.findById(id).map(rideHistoryMapper::mapToDTO);
    }

    public void deleteRideHistory(Long id) {
        rideHistoryRepository.deleteById(id);
    }
}
