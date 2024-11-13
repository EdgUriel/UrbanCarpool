import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaStar,
  FaClock,
  FaCar,
  FaDog,
  FaUser,
  FaMusic,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import MapComponent from "./MapComponent";

const RideCard = ({ ride, onBookRide }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(1);

  const handleBookRide = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmBooking = () => {
    onBookRide({ ...ride, bookedSeats: selectedSeats });
    setIsConfirmationOpen(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap${ride.id}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window[`initMap${ride.id}`] = () => {
      const map = new window.google.maps.Map(
        document.getElementById(`map${ride.id}`),
        {
          center: { lat: 20.6597, lng: -103.3496 },
          zoom: 12,
        }
      );

      if (ride.origin && ride.destination) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request = {
          origin: ride.origin,
          destination: ride.destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          } else {
            console.error("Error al obtener las direcciones:", status);
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      delete window[`initMap${ride.id}`];
    };
  }, [ride.origin, ride.destination, ride.id]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-2xl mx-auto">
      <div className="relative h-48">
        <div id={`map${ride.id}`} className="absolute inset-0"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <h2 className="text-2xl font-bold">{ride.origin}</h2>
                <div className="flex items-center text-sm mt-1">
                  <FaArrowRight className="mr-2" />
                  <p>{ride.destination}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-3 gap-6">
        <div className="col-span-1 border-r border-gray-200 dark:border-gray-700 pr-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Driver
          </h3>
          <div className="flex flex-col items-center">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${ride.driverName}`}
              alt={ride.driverName}
              className="w-20 h-20 rounded-full border-2 border-blue-500 mb-2"
            />
            <p className="font-semibold text-lg text-gray-800 dark:text-white">
              {ride.driverName}
            </p>
            <div className="flex items-center mt-1">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {ride.driverRating}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-2">
              <FaUser className="mr-2 text-blue-500" />
              {ride.driverGender}
            </p>
          </div>
        </div>

        <div className="col-span-2 space-y-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Trip Details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <FaClock className="text-blue-500" />
              <span>{new Date(ride.departureDatetime).toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCar className="text-blue-500" />
              <span>
                {ride.car} ({ride.plate})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUsers className="text-blue-500" />
              <span>{ride.availableSeats} seats available</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-blue-500" />
              <span>{ride.seatPrice} MXN per seat</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDog className="text-blue-500" />
              <span>{ride.petsAllowed ? "Pets allowed" : "No pets"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMusic className="text-blue-500" />
              <span>{ride.musicPreference ? "Music allowed" : "No music"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-50 dark:bg-gray-700 flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {ride.seatPrice} MXN
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">per seat</p>
        </div>
        <button
          onClick={handleBookRide}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Book This Ride
        </button>
      </div>

      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Confirm Your Booking
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Trip</span>
                <span>
                  {ride.origin} to {ride.destination}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Date & Time</span>
                <span>{new Date(ride.departureDatetime).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Driver</span>
                <span>{ride.driverName}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Price per seat</span>
                <span>{ride.seatPrice} MXN</span>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="seats"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Number of seats:
              </label>
              <select
                id="seats"
                value={selectedSeats}
                onChange={(e) => setSelectedSeats(Number(e.target.value))}
                className="w-full p-3 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                {[...Array(ride.availableSeats)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between items-center mb-6 text-xl font-bold text-gray-800 dark:text-white">
              <span>Total:</span>
              <span>{ride.seatPrice * selectedSeats} MXN</span>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsConfirmationOpen(false)}
                className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center"
              >
                <FaCheckCircle className="mr-2" />
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

RideCard.propTypes = {
  ride: PropTypes.object.isRequired,
  onBookRide: PropTypes.func.isRequired,
};

export default RideCard;
