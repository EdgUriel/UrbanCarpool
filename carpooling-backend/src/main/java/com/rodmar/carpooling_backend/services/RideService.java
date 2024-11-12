package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.Ride;
import com.rodmar.carpooling_backend.entities.Route;
import com.rodmar.carpooling_backend.entities.RouteSegment;
import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.entities.Vehicle;
import com.rodmar.carpooling_backend.dto.RideDTO;
import com.rodmar.carpooling_backend.exception.RideNotFoundException;
import com.rodmar.carpooling_backend.exception.SeatsUnavailableException;
import com.rodmar.carpooling_backend.repositories.RideRepository;
import com.rodmar.carpooling_backend.repositories.RouteRepository;
import com.rodmar.carpooling_backend.repositories.RouteSegmentRepository;
import com.rodmar.carpooling_backend.repositories.UserRepository;
import com.rodmar.carpooling_backend.repositories.VehicleRepository;
import com.rodmar.carpooling_backend.repositories.PassengerSegmentRepository;
import com.rodmar.carpooling_backend.entities.PassengerSegment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RideService {

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private RouteSegmentRepository routeSegmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private PassengerSegmentRepository passengerSegmentRepository;

    // Obtener todos los viajes
    public List<RideDTO> getAllRides() {
        List<Ride> rides = rideRepository.findAll();
        return rides.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    // Crear un nuevo viaje
    public Ride createRide(RideDTO rideDTO) {
        Ride ride = new Ride();

        // Establecer origen, destino, fecha y hora, asientos disponibles, precio y
        // mascotas permitidas
        ride.setDepartureDatetime(rideDTO.getDepartureDatetime());
        ride.setAvailableSeats(rideDTO.getAvailableSeats());
        ride.setPrice(rideDTO.getSeatPrice());
        ride.setPetsAllowed(rideDTO.isPetsAllowed() ? 'Y' : 'N');

        // Obtener el conductor y el vehículo de la base de datos
        User driver = userRepository.findById(rideDTO.getDriverId())
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        Vehicle vehicle = vehicleRepository.findById(rideDTO.getVehicleId())
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));

        // Crear la ruta
        Route route = new Route(rideDTO.getOrigin(), rideDTO.getDestination(), rideDTO.getDepartureDatetime(), null);
        route = routeRepository.save(route);

        ride.setDriver(driver);
        ride.setVehicle(vehicle);
        ride.setRoute(route);

        // Guardar el viaje en la base de datos
        return rideRepository.save(ride);
    }

    // Obtener un viaje por su ID
    public Ride getRideById(Long id) {
        return rideRepository.findById(id)
                .orElseThrow(() -> new RideNotFoundException("Ride with id " + id + " not found"));
    }

    // Actualizar un viaje existente
    public Ride updateRide(Long id, Ride ride) {
        if (!rideRepository.existsById(id)) {
            throw new RideNotFoundException("Ride with id " + id + " not found");
        }
        ride.setId(id);
        return rideRepository.save(ride);
    }

    // Eliminar un viaje
    public void deleteRide(Long id) {
        if (!rideRepository.existsById(id)) {
            throw new RideNotFoundException("Ride with id " + id + " not found");
        }
        rideRepository.deleteById(id);
    }

    // Método para encontrar viajes compatibles
    public List<Ride> findMatchingRides(String passengerOrigin, String passengerDestination, LocalDateTime travelDate) {
        // Obtener los rides programados para la fecha dada
        List<Ride> availableRides = rideRepository.findByDepartureDatetimeBetween(
                travelDate.minusDays(1), travelDate.plusDays(1));

        List<Ride> matchingRides = new ArrayList<>();
        for (Ride ride : availableRides) {
            if (isRouteCompatible(ride.getRoute().getId(), passengerOrigin, passengerDestination)) {
                matchingRides.add(ride);
            }
        }
        return matchingRides;
    }

    // Verificar si la ruta es compatible
    private boolean isRouteCompatible(Long routeId, String passengerOrigin, String passengerDestination) {
        List<RouteSegment> segments = routeSegmentRepository.findByRouteIdOrderBySegmentOrder(routeId);

        boolean originFound = false;
        for (RouteSegment segment : segments) {
            if (segment.getOrigin().equalsIgnoreCase(passengerOrigin)) {
                originFound = true;
            }
            if (originFound && segment.getDestination().equalsIgnoreCase(passengerDestination)) {
                return true;
            }
        }
        return false;
    }

    // Convertir Ride a RideDTO
    private RideDTO convertToDTO(Ride ride) {
        RideDTO rideDTO = new RideDTO();
        rideDTO.setId(ride.getId());
        rideDTO.setOrigin(ride.getRoute().getOrigin());
        rideDTO.setDestination(ride.getRoute().getDestination());
        rideDTO.setDepartureDatetime(ride.getDepartureDatetime());
        rideDTO.setAvailableSeats(ride.getAvailableSeats());
        rideDTO.setSeatPrice(ride.getPrice());
        rideDTO.setPetsAllowed(ride.getPetsAllowed() == 'Y');
        rideDTO.setDriverName(ride.getDriver().getFirstName() + " " + ride.getDriver().getLastName());
        rideDTO.setDriverRating(ride.getDriver().getRating());
        rideDTO.setDriverGender(ride.getDriver().getGender());
        rideDTO.setCar(ride.getVehicle().getModel().getName());
        rideDTO.setPlate(ride.getVehicle().getPlate());
        return rideDTO;
    }

    public PassengerSegment joinRide(Long rideId, Long passengerId)
            throws RideNotFoundException, SeatsUnavailableException {
        Ride ride = rideRepository.findById(rideId)
                .orElseThrow(() -> new RideNotFoundException("Ride not found"));

        if (ride.getAvailableSeats() <= 0) {
            throw new SeatsUnavailableException("No available seats");
        }

        User passenger = userRepository.findById(passengerId)
                .orElseThrow(() -> new RuntimeException("Passenger not found"));

        // Logic to determine appropriate segments (waypoints)
        Route route = ride.getRoute();
        List<RouteSegment> segments = routeSegmentRepository.findByRouteIdOrderBySegmentOrder(route.getId());

        // Example: Assign the first and last segments as start and end
        RouteSegment segmentStart = segments.get(0);
        RouteSegment segmentEnd = segments.get(segments.size() - 1);

        PassengerSegment passengerSegment = new PassengerSegment();
        passengerSegment.setRide(ride);
        passengerSegment.setPassenger(passenger);
        passengerSegment.setSegmentStart(segmentStart);
        passengerSegment.setSegmentEnd(segmentEnd);

        // Save the passenger segment
        PassengerSegment savedPassengerSegment = passengerSegmentRepository.save(passengerSegment);

        // Update available seats
        ride.setAvailableSeats(ride.getAvailableSeats() - 1);
        rideRepository.save(ride);

        return savedPassengerSegment;
    }

    /**
     * Método para buscar viajes que coincidan con el origen, destino y fecha
     * proporcionados.
     *
     * @param origin      Origen del pasajero.
     * @param destination Destino del pasajero.
     * @param date        Fecha del viaje.
     * @return Lista de RideDTO que coinciden con los criterios de búsqueda.
     */
    public List<RideDTO> searchRides(String origin, String destination, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.plusDays(1).atStartOfDay();

        List<Ride> rides = rideRepository.findByRouteOriginAndRouteDestinationAndDepartureDatetimeBetween(
                origin, destination, startOfDay, endOfDay);

        // Convertir entidades a DTOs
        return rides.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    /**
     * Método para convertir una entidad Ride a RideDTO.
     *
     * @param ride Entidad Ride.
     * @return Objeto RideDTO.
     */
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
}
