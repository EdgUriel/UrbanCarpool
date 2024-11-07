import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import ConfirmTrip from "../components/ConfirmTrip";
import {
  FaCar,
  FaStar,
  FaUser,
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";

const RideDetails = () => {
  const [showConfirmTrip, setShowConfirmTrip] = useState(false);
  const { id } = useParams();

  const ride = {
    origin: "CUCEI",
    destination: "CUCEA",
    driver: {
      name: "John Doe",
      rating: 4.8,
      photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    time: "10:00 AM",
    price: "$25",
    availableSeats: 2,
  };

  const tripDetails = {
    date: "May 15, 2024",
    time: ride.time,
    origin: ride.origin,
    destination: ride.destination,
    price: ride.price,
    seats: ride.availableSeats,
  };

  const handleConfirmBooking = () => {
    setShowConfirmTrip(true);
  };

  const handleCloseConfirmTrip = () => {
    setShowConfirmTrip(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Ride Details
        </h1>
        <div className="mb-4">
          <img
            src={ride.driver.photoUrl}
            alt={ride.driver.name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaUser className="text-gray-500 mr-2" />
            <strong>Driver:</strong> {ride.driver.name}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaStar className="text-yellow-400 mr-2" />
            <strong>Rating:</strong> {ride.driver.rating} ⭐
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <strong>Origin:</strong> {ride.origin}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <strong>Destination:</strong> {ride.destination}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaDollarSign className="text-gray-500 mr-2" />
            <strong>Price:</strong> {ride.price}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
            <FaCar className="text-gray-500 mr-2" />
            <strong>Available Seats:</strong> {ride.availableSeats}
          </p>
        </div>

        <div className="mb-6">
          <button
            onClick={handleConfirmBooking}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Confirm Booking
          </button>
        </div>

        <div className="mt-6">
          <MapComponent origin={ride.origin} destination={ride.destination} />
        </div>

        {showConfirmTrip && (
          <ConfirmTrip
            tripDetails={tripDetails}
            onClose={handleCloseConfirmTrip}
          />
        )}
      </div>
    </div>
  );
};

export default RideDetails;
