import React, { useState } from "react";
import axios from "axios";
import { MapPin, Calendar, Users, DollarSign, PawPrint } from "lucide-react";

const MapComponent = ({ origin, destination }) => (
  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
    <p className="text-gray-600">
      Map showing route from {origin} to {destination}
    </p>
  </div>
);

export default function PublishRide() {
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driverId = localStorage.getItem("driverId");
    const vehicleId = localStorage.getItem("vehicleId");
    try {
      const dataToSend = {
        ...formData,
        driverId: parseInt(driverId),
        vehicleId: parseInt(vehicleId),
        availableSeats: parseInt(formData.availableSeats),
        seatPrice: parseFloat(formData.seatPrice),
        departureDatetime: new Date(formData.departureDatetime).toISOString(),
        petsAllowed: formData.petsAllowed, // Enviar como booleano
      };
      console.log("Data to send:", dataToSend);
      const response = await axios.post(
        "http://localhost:8080/api/rides",
        dataToSend
      );
      alert("Ride published successfully");
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
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Publish a New Ride</h1>
          <p className="text-blue-100 mt-2">
            Share your journey and help build a greener community
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                value={formData.origin}
                onChange={handleChange}
                placeholder="Enter origin city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
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
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter destination city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="departureDatetime"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <Calendar className="inline-block w-5 h-5 mr-1 text-blue-500" />
                Departure Date and Time
              </label>
              <input
                type="datetime-local"
                id="departureDatetime"
                name="departureDatetime"
                value={formData.departureDatetime}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="availableSeats"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <Users className="inline-block w-5 h-5 mr-1 text-blue-500" />
                Available Seats
              </label>
              <input
                type="number"
                id="availableSeats"
                name="availableSeats"
                value={formData.availableSeats}
                onChange={handleChange}
                min="1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="seatPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <DollarSign className="inline-block w-5 h-5 mr-1 text-blue-500" />
                Price per Seat (MXN)
              </label>
              <input
                type="number"
                id="seatPrice"
                name="seatPrice"
                value={formData.seatPrice}
                onChange={handleChange}
                min="0"
                step="0.5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="petsAllowed"
                name="petsAllowed"
                checked={formData.petsAllowed}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="petsAllowed"
                className="ml-2 block text-sm text-gray-700"
              >
                <PawPrint className="inline-block w-5 h-5 mr-1 text-blue-500" />
                Pets Allowed
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Publish Ride
          </button>
        </form>
        {formData.origin && formData.destination && (
          <div className="px-8 pb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Route Preview
            </h2>
            <MapComponent
              origin={formData.origin}
              destination={formData.destination}
            />
          </div>
        )}
      </div>
    </div>
  );
}
