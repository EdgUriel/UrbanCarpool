// Allows passengers to search for available carpool rides by entering the origin, destination, and date.

import React, { useState, useEffect } from "react";
import { FaStar, FaClock, FaCar, FaRoute, FaDog, FaMusic, FaUser } from 'react-icons/fa';
import axios from "axios";
import MapComponent from '../components/MapComponent';

function SearchRides() {
    const [rides, setRides] = useState([]);
    const [filteredRides, setFilteredRides] = useState([]);
    const [filters, setFilters] = useState({
        origin: "",
        destination: "",
        date: "",
        time: "",
        driverGender: "",
        requirePets: "",
        requireMusic: ""
    });
    const [mapFilters, setMapFilters] = useState({});

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/rides");
                setRides(response.data);
                setFilteredRides(response.data);
            } catch (error) {
                console.error("Error fetching rides:", error);
            }
        };
        fetchRides();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        const filtered = rides.filter((ride) => {
            const matchesOrigin = filters.origin ? ride.origin.toLowerCase().includes(filters.origin.toLowerCase()) : true;
            const matchesDestination = filters.destination ? ride.destination.toLowerCase().includes(filters.destination.toLowerCase()) : true;
            const formattedDateTime = `${filters.date}T${filters.time}`;
            const matchesDateTime = filters.date && filters.time
                ? ride.departureDatetime.startsWith(formattedDateTime)
                : true;
            const matchesGender = filters.driverGender ? ride.driverGender === filters.driverGender : true;
            const matchesPets = filters.requirePets ? ride.petsAllowed === parseInt(filters.requirePets) : true;
            const matchesMusic = filters.requireMusic ? ride.musicPreference === parseInt(filters.requireMusic) : true;

            return matchesOrigin && matchesDestination && matchesDateTime && matchesGender && matchesPets && matchesMusic;
        });
        setFilteredRides(filtered);
        setMapFilters(filters);
    };

    const RideCard = ({ ride, onBookRide }) => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{ride.origin} to {ride.destination}</h2>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">{ride.seatPrice} MXN</span>
                </div>
                <div className="flex items-center mb-4">
                    <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">{ride.driverName}</p>
                        <div className="flex items-center mt-1"> {/* Margen superior entre el nombre y el ranking */}
                            <FaStar className="text-yellow-400 mr-1" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{ride.driverRating}</span>
                        </div>
                        <p className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2"> {/* Margen superior para separar más del ranking */}
                            <FaUser className="mr-2" /> {ride.driverGender}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="flex items-center"><FaClock className="mr-2" /> {new Date(ride.departureDatetime).toLocaleString()}</p>
                    <p className="flex items-center"><FaCar className="mr-2" /> {ride.car} ({ride.plate})</p>
                    <p className="flex items-center"><FaRoute className="mr-2" /> {ride.travelPreference}</p>
                    <div className="flex items-center space-x-4 mt-2">
                        <p className="flex items-center">
                            <FaDog className="mr-2" /> Pets: {ride.allowPets ? 'Yes' : 'No'}
                        </p>
                        <p className="flex items-center">
                            <FaMusic className="mr-2" /> Music: {ride.allowMusic ? 'Yes' : 'No'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pb-4"> {/* Agregar padding a los lados del mapa */}
                <MapComponent origin={ride.origin} destination={ride.destination} mapId={ride.rideId} />
            </div>
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

    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-blue-500 to-teal-400">
                        Discover Your Perfect Ride
                    </span>
                </h1>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Find a Ride</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="origin"
                        value={filters.origin}
                        onChange={handleFilterChange}
                        placeholder="Origin"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="destination"
                        value={filters.destination}
                        onChange={handleFilterChange}
                        placeholder="Destination"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleFilterChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="time"
                        name="time"
                        value={filters.time}
                        onChange={handleFilterChange}
                        className="w-full p-2 border rounded"
                    />
                    <select name="driverGender" value={filters.driverGender} onChange={handleFilterChange} className="w-full p-2 border rounded">
                        <option value="">Any Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select name="requirePets" value={filters.requirePets} onChange={handleFilterChange} className="w-full p-2 border rounded">
                        <option value="">Pets Allowed?</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                    <select name="requireMusic" value={filters.requireMusic} onChange={handleFilterChange} className="w-full p-2 border rounded">
                        <option value="">Music Preference</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <button
                    onClick={handleSearch}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRides.length > 0 ? (
                    filteredRides.map((ride) => (
                        <RideCard key={ride.rideId} ride={ride} onBookRide={() => console.log("Booking ride", ride)} />
                    ))
                ) : (
                    <p className="text-gray-700 dark:text-gray-400">No rides found with the specified criteria.</p>
                )}
            </div>
        </div>
    );
}

export default SearchRides;
