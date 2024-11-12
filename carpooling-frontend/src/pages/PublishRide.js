import React, { useState } from "react";
import axios from "axios";
import MapComponent from "../components/MapComponent";

function PublishRide() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDatetime: "",
    availableSeats: 1,
    seatPrice: 0,
    petsAllowed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener el ID del conductor autenticado
    const driverId = localStorage.getItem("driverId"); // Actualiza esto según tu método de autenticación

    // Obtener el ID del vehículo del conductor
    const vehicleId = localStorage.getItem("vehicleId"); // Actualiza esto según tu método de gestión de vehículos

    try {
      const dataToSend = {
        origin: formData.origin,
        destination: formData.destination,
        departureDatetime: formData.departureDatetime,
        availableSeats: parseInt(formData.availableSeats),
        seatPrice: parseFloat(formData.seatPrice),
        petsAllowed: formData.petsAllowed,
        driverId: parseInt(driverId),
        vehicleId: parseInt(vehicleId),
      };

      const response = await axios.post(
        "http://localhost:8080/api/rides",
        dataToSend
      );
      alert("Ride published successfully");
      console.log(response.data);

      // Resetear el formulario
      setFormData({
        origin: "",
        destination: "",
        departureDatetime: "",
        availableSeats: 1,
        seatPrice: 0,
        petsAllowed: false,
      });
    } catch (error) {
      console.error("Error publishing ride:", error);
      alert("There was an error publishing the ride");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg mx-auto my-2 max-w-screen-xl p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Publish a New Ride
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Origin
            </label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Enter origin city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="departureDatetime"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Departure Date and Time
            </label>
            <input
              type="datetime-local"
              name="departureDatetime"
              value={formData.departureDatetime}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Available Seats
            </label>
            <input
              type="number"
              name="availableSeats"
              value={formData.availableSeats}
              onChange={handleChange}
              min="1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="seatPrice"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Price per Seat (MXN)
            </label>
            <input
              type="number"
              name="seatPrice"
              value={formData.seatPrice}
              onChange={handleChange}
              min="0"
              step="0.5"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="petsAllowed"
              checked={formData.petsAllowed}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="petsAllowed"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-200"
            >
              Pets Allowed
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Publish Ride
        </button>
      </form>

      {/* Mostrar el mapa solo si se han ingresado el origen y destino */}
      {formData.origin && formData.destination && (
        <div className="mt-8">
          <MapComponent
            origin={formData.origin}
            destination={formData.destination}
          />
        </div>
      )}
    </div>
  );
}

export default PublishRide;
