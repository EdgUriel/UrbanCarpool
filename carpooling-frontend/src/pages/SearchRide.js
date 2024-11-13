import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  DollarSign,
  PawPrint,
  Music,
  User,
  Route,
  Star,
  Car,
} from "lucide-react";
import RideCard from "../components/RideCard"; // Asegúrate de importar el RideCard correcto
import Notification from "../components/Notification"; // Importa el componente de notificación

function SearchRide() {
  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    origin: "",
    destination: "",
    date: "",
    time: "",
    driverGender: "",
    requirePets: "",
    requireMusic: "",
  });
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null); // Estado para la notificación

  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/rides");
      console.log("Fetched Rides:", response.data); // Inspecciona los datos aquí
      setRides(response.data);
      setFilteredRides(response.data);
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/rides/search",
        {
          params: {
            origin: searchCriteria.origin,
            destination: searchCriteria.destination,
            date: searchCriteria.date,
          },
        }
      );
      setFilteredRides(response.data);
    } catch (error) {
      setError("Error fetching available rides.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookRide = (ride) => {
    setSelectedTrip(ride);
  };

  const handleConfirmBooking = async () => {
    try {
      const passengerId = localStorage.getItem("userId"); // Asegúrate de que este ID es válido
      await axios.post(
        `http://localhost:8080/api/rides/${selectedTrip.id}/join`,
        null,
        {
          params: { passengerId: 1 },
        }
      );
      setNotification("Successfully joined the ride!"); // Mostrar notificación
      setFilteredRides((prevRides) =>
        prevRides.filter((ride) => ride.id !== selectedTrip.id)
      );
      setSelectedTrip(null);
    } catch (error) {
      alert("Failed to join the ride.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Discover Your Perfect Ride
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Find and book your next carpool adventure
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-blue-600 py-6 px-8">
            <h2 className="text-2xl font-bold text-white">Find a Ride</h2>
            <p className="text-blue-100 mt-2">
              Search for available rides that match your preferences
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="origin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <MapPin className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Origin
                </label>
                <input
                  type="text"
                  id="origin"
                  name="origin"
                  value={searchCriteria.origin}
                  onChange={handleSearchChange}
                  placeholder="Enter origin city"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <MapPin className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={searchCriteria.destination}
                  onChange={handleSearchChange}
                  placeholder="Enter destination city"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Calendar className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={searchCriteria.date}
                  onChange={handleSearchChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Clock className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={searchCriteria.time}
                  onChange={handleSearchChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="driverGender"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <User className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Driver Gender
                </label>
                <select
                  id="driverGender"
                  name="driverGender"
                  value={searchCriteria.driverGender}
                  onChange={handleSearchChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Any Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="requirePets"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <PawPrint className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Pets Allowed
                </label>
                <select
                  id="requirePets"
                  name="requirePets"
                  value={searchCriteria.requirePets}
                  onChange={handleSearchChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Any</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="requireMusic"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Music className="inline-block w-5 h-5 mr-1 text-blue-500" />
                  Music Preference
                </label>
                <select
                  id="requireMusic"
                  name="requireMusic"
                  value={searchCriteria.requireMusic}
                  onChange={handleSearchChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Any</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Search Rides
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {loading && <p>Loading available rides...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && filteredRides.length === 0 && (
            <p className="text-gray-700 col-span-full text-center text-lg">
              No rides found with the specified criteria.
            </p>
          )}
          {filteredRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} onBookRide={handleBookRide} />
          ))}
        </div>
        {selectedTrip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Confirm Your Booking
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Trip</span>
                  <span>
                    {selectedTrip.origin} to {selectedTrip.destination}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Date & Time</span>
                  <span>
                    {new Date(selectedTrip.departureDatetime).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Driver</span>
                  <span>{selectedTrip.driverName}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold">Price per seat</span>
                  <span>{selectedTrip.seatPrice} MXN</span>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmBooking}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
        {notification && (
          <Notification
            message={notification}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
}

export default SearchRide;
