// Displays detailed information about a selected ride, including the route on a map, driver information, time, and cost.

import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import { FaCar, FaStar, FaUser, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

function RideDetails() {
    const { id } = useParams();
    const ride = {
        origin: 'CUCEI',
        destination: 'CUCEA',
        driver: {
            name: 'John Doe',
            rating: 4.8,
            photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        time: '10:00 AM',
        price: '$25',
        availableSeats: 2,
    };

    const handleBooking = () => {
        alert('Booking confirmed!');
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ride Details</h1>

                {/* Información del viaje con íconos */}
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-blue-600 mr-2" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Origin:</strong> {ride.origin}
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-blue-600 mr-2" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Destination:</strong> {ride.destination}
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaCar className="text-green-600 mr-2" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Departure Time:</strong> {ride.time}
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaDollarSign className="text-yellow-500 mr-2" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Price per Seat:</strong> {ride.price}
                        </p>
                    </div>
                </div>

                {/* Información del conductor con estilo */}
                <div className="mb-4 flex items-center">
                    <img src={ride.driver.photoUrl} alt="Driver" className="w-20 h-20 rounded-full mr-4" />
                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
                            <FaUser className="text-gray-600 mr-2" /> 
                            <strong>Driver:</strong> {ride.driver.name}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
                            <FaStar className="text-yellow-400 mr-2" /> 
                            <strong>Rating:</strong> {ride.driver.rating} ⭐
                        </p>
                    </div>
                </div>

                {/* Disponibilidad de asientos */}
                <div className="mb-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>Available Seats:</strong> {ride.availableSeats}
                    </p>
                </div>

                {/* Botón de confirmación de reserva */}
                <div className="mb-6">
                    <button
                        onClick={handleBooking}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Confirm Booking
                    </button>
                </div>

                {/* Mapa mostrando la ruta */}
                <div className="mt-6">
                    <MapComponent origin={ride.origin} destination={ride.destination} />
                </div>
            </div>
        </div>
    );
}

export default RideDetails;

