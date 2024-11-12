import React, { useState, useEffect } from "react";
import { FaCar, FaStar, FaMapMarkerAlt, FaDollarSign, FaClock, FaRoute } from "react-icons/fa";
import axios from "axios";

// Componente para mostrar el mapa
const MapComponent = ({ origin, destination, mapId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap${mapId}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window[`initMap${mapId}`] = () => {
      const map = new window.google.maps.Map(document.getElementById(`map${mapId}`), {
        center: { lat: 20.6597, lng: -103.3496 },
        zoom: 12,
      });

      if (origin && destination) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request = {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(result);
          } else {
            console.error('Error al obtener las direcciones:', status);
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      delete window[`initMap${mapId}`];
    };
  }, [origin, destination, mapId]);

  return (
    <div>
      <div id={`map${mapId}`} style={{ height: '200px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}></div>
    </div>
  );
};

// Componente para mostrar la tarjeta del viaje
const RideCard = ({ ride, onBookRide }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{ride.origin} to {ride.destination}</h2>
        <span className="text-lg font-bold text-green-600 dark:text-green-400">{ride.seatPrice} MXN</span>
      </div>
      <div className="flex items-center mb-4">
        {/* Aquí se puede agregar la foto del conductor si es necesario */}
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">{ride.driverName}</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{ride.driverRating}</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <p className="flex items-center"><FaClock className="mr-2" /> {new Date(ride.departureTime).toLocaleString()}</p>
        <p className="flex items-center"><FaCar className="mr-2" /> {ride.car} ({ride.plate})</p>
        <p className="flex items-center"><FaRoute className="mr-2" /> {ride.travelPreference}</p>
      </div>
    </div>

    {/* Mapa para cada tarjeta de viaje */}
    <MapComponent 
      origin={ride.origin} 
      destination={ride.destination} 
      mapId={ride.rideId} 
    />

    <div className="p-4">
      <button
        onClick={() => onBookRide(ride)}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
      >
        Book This Ride
      </button>
    </div>
  </div>
);


// Componente para mostrar el diálogo de confirmación
const ConfirmDialog = ({ ride, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Confirm Booking</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        You are about to book a ride with {ride?.driverName}
      </p>
      {ride && (
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>From:</strong> {ride.origin}</p>
          <p><strong>To:</strong> {ride.destination}</p>
          <p><strong>Departure Time:</strong> {new Date(ride.departureTime).toLocaleString()}</p>
          <p><strong>Price:</strong> {ride.seatPrice} MXN</p>
          <p><strong>Car:</strong> {ride.car} ({ride.plate})</p>
          <p><strong>Travel Preference:</strong> {ride.travelPreference}</p>
        </div>
      )}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  </div>
);

const RideDetails = () => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  // Llamada a la API para obtener los viajes
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/rides");
        console.log(response.data);  // Verificar los datos
        setRides(response.data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRides();
  }, []);

  const handleBookRide = (ride) => {
    setSelectedRide(ride);
  };

  const handleCloseDialog = () => {
    setSelectedRide(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-blue-500 to-teal-400">
            Discover Your Perfect Ride
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose from a variety of available rides tailored to your destination.
          Experience convenience, comfort, and affordability with our trusted drivers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rides.map((ride) => (
          <RideCard key={ride.rideId} ride={ride} onBookRide={handleBookRide} />
        ))}
      </div>
      {selectedRide && <ConfirmDialog ride={selectedRide} onClose={handleCloseDialog} />}
    </div>
  );
};

export default RideDetails;
