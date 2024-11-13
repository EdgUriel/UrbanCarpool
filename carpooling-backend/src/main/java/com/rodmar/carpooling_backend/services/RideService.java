package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.dto.PassengerSegmentDTO;
import com.rodmar.carpooling_backend.dto.RideDTO;
import com.rodmar.carpooling_backend.entities.*;
import com.rodmar.carpooling_backend.exception.RideNotFoundException;
import com.rodmar.carpooling_backend.exception.SeatsUnavailableException;
import com.rodmar.carpooling_backend.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Map;
import java.util.Optional;

@Service
public class RideService {

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private RouteSegmentRepository routeSegmentRepository;

    @Autowired
    private PassengerSegmentRepository passengerSegmentRepository;

    // Obtener todos los viajes
    public List<RideDTO> getAllRides() {
        List<Ride> rides = rideRepository.findAll();
        return rides.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    // Crear un nuevo viaje
    public Ride createNewRide(Map<String, Object> rideData) {
        Ride ride = new Ride();
        ride.setDepartureDatetime(LocalDateTime.parse((String) rideData.get("departureDatetime")));
        ride.setAvailableSeats((int) rideData.get("availableSeats"));
        ride.setPrice((double) rideData.get("seatPrice"));
        ride.setPetsAllowed((boolean) rideData.get("petsAllowed") ? 'Y' : 'N');
        ride.setStatus("scheduled"); // Hardcodear el estado por ahora

        User driver = userRepository.findById(((Number) rideData.get("driverId")).longValue())
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        Vehicle vehicle = vehicleRepository.findById(((Number) rideData.get("vehicleId")).longValue())
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));

        Route route = new Route((String) rideData.get("origin"), (String) rideData.get("destination"),
                LocalDateTime.parse((String) rideData.get("departureDatetime")), null);
        route = routeRepository.save(route);

        ride.setDriver(driver);
        ride.setVehicle(vehicle);
        ride.setRoute(route);
        ride.setMaxSeats((int) rideData.get("availableSeats")); // Asegúrate de establecer maxSeats

        return rideRepository.save(ride);
    }

    // Método para convertir Ride a RideDTO
    private RideDTO convertToDTO(Ride ride) {
        RideDTO rideDTO = new RideDTO();
        rideDTO.setId(ride.getId());
        rideDTO.setOrigin(ride.getRoute().getOrigin());
        rideDTO.setDestination(ride.getRoute().getDestination());
        rideDTO.setDepartureDatetime(ride.getDepartureDatetime());
        rideDTO.setAvailableSeats(ride.getAvailableSeats());
        rideDTO.setSeatPrice(ride.getPrice());
        rideDTO.setPetsAllowed(ride.getPetsAllowed() == 'Y');

        // Obtener y mapear los datos del conductor
        User driver = ride.getDriver();
        if (driver != null) {
            rideDTO.setDriverId(driver.getId());
            rideDTO.setDriverName(driver.getFirstName() + " " + driver.getLastName());
            rideDTO.setDriverRating(driver.getRating());
            rideDTO.setDriverGender(driver.getGender());
        }

        // Obtener y mapear los datos del vehículo
        Vehicle vehicle = ride.getVehicle();
        if (vehicle != null) {
            rideDTO.setCar(vehicle.getModel().getName());
            rideDTO.setPlate(vehicle.getPlate());
            rideDTO.setVehicleType(vehicle.getType().getName());
            rideDTO.setVehicleBrand(vehicle.getModel().getBrand().getName());
            rideDTO.setVehicleId(vehicle.getId());
        }

        return rideDTO;
    }

    public PassengerSegmentDTO joinRide(Long rideId, Long passengerId)
            throws RideNotFoundException, SeatsUnavailableException {
        Ride ride = rideRepository.findById(rideId)
                .orElseThrow(() -> new RideNotFoundException("Ride not found"));

        if (ride.getAvailableSeats() <= 0) {
            throw new SeatsUnavailableException("No available seats");
        }

        User passenger = userRepository.findById(passengerId)
                .orElseThrow(() -> new RuntimeException("Passenger not found"));

        // Lógica para determinar los segmentos apropiados
        Route route = ride.getRoute();
        List<RouteSegment> segments = routeSegmentRepository.findByRouteIdOrderBySegmentOrder(route.getId());

        if (segments.isEmpty()) {
            throw new RuntimeException("No route segments found for this ride");
        }

        RouteSegment segmentStart = segments.get(0);
        RouteSegment segmentEnd = segments.get(segments.size() - 1);

        PassengerSegment passengerSegment = new PassengerSegment();
        passengerSegment.setRide(ride);
        passengerSegment.setPassenger(passenger);
        passengerSegment.setSegmentStart(segmentStart);
        passengerSegment.setSegmentEnd(segmentEnd);

        // Guardar el pasajero en el segmento
        PassengerSegment savedPassengerSegment = passengerSegmentRepository.save(passengerSegment);

        // Actualizar los asientos disponibles
        ride.setAvailableSeats(ride.getAvailableSeats() - 1);
        rideRepository.save(ride);

        // Convertir a DTO
        PassengerSegmentDTO dto = new PassengerSegmentDTO();
        dto.setId(savedPassengerSegment.getId());
        dto.setRideId(savedPassengerSegment.getRide().getId());
        dto.setPassengerId(savedPassengerSegment.getPassenger().getId());
        dto.setSegmentStartId(savedPassengerSegment.getSegmentStart().getId());
        dto.setSegmentEndId(savedPassengerSegment.getSegmentEnd().getId());

        return dto;
    }

    public Ride getRideById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getRideById'");
    }

    public List<RideDTO> searchRides(String origin, String destination, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.plusDays(1).atStartOfDay();

        List<Ride> rides = rideRepository.findByRouteOriginAndRouteDestinationAndDepartureDatetimeBetween(
                origin, destination, startOfDay, endOfDay);

        // Convertir entidades a DTOs
        return rides.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    private RideDTO convertToDto(Ride ride) {
        RideDTO dto = new RideDTO();
        dto.setId(ride.getId());
        dto.setOrigin(ride.getRoute().getOrigin());
        dto.setDestination(ride.getRoute().getDestination());
        dto.setDepartureDatetime(ride.getDepartureDatetime());
        dto.setAvailableSeats(ride.getAvailableSeats());
        dto.setSeatPrice(ride.getPrice());
        dto.setPetsAllowed(ride.getPetsAllowed() == 'Y');
        dto.setDriverId(ride.getDriver().getId());
        dto.setDriverName(ride.getDriver().getFirstName() + " " + ride.getDriver().getLastName());
        dto.setDriverRating(ride.getDriver().getRating());
        dto.setDriverGender(ride.getDriver().getGender());
        dto.setCar(ride.getVehicle().getModel().getName());
        dto.setPlate(ride.getVehicle().getPlate());
        dto.setVehicleType(ride.getVehicle().getType().getName());
        dto.setVehicleBrand(ride.getVehicle().getModel().getBrand().getName());
        dto.setVehicleId(ride.getVehicle().getId());
        return dto;
    }

    public List<RideDTO> getUserRides(Long userId) {
        List<PassengerSegment> passengerSegments = passengerSegmentRepository.findByPassengerId(userId);
        List<Ride> rides = passengerSegments.stream()
                .map(PassengerSegment::getRide)
                .distinct()
                .collect(Collectors.toList());
        return rides.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public void addSeatToRide(Long rideId, Long passengerId) throws Exception {
        Ride ride = rideRepository.findById(rideId)
                .orElseThrow(() -> new RideNotFoundException("Ride not found"));
        if (ride.getAvailableSeats() <= 0) {
            throw new SeatsUnavailableException("No available seats");
        }
        User passenger = userRepository.findById(passengerId)
                .orElseThrow(() -> new RuntimeException("Passenger not found"));

        // Verificar si el pasajero ya está en el ride
        Optional<PassengerSegment> existingSegment = passengerSegmentRepository.findByRideIdAndPassengerId(rideId,
                passengerId);
        if (existingSegment.isPresent()) {
            // Lógica para agregar más asientos (esto podría ser incrementar un contador)
            // Por simplicidad, asumiremos que cada reserva es por un asiento
        } else {
            throw new Exception("El pasajero no tiene una reserva en este viaje");
        }

        // Actualizar los asientos disponibles
        ride.setAvailableSeats(ride.getAvailableSeats() - 1);
        rideRepository.save(ride);
    }
}
