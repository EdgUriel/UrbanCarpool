import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RideCard from "../components/RideCard";
import SeatAlert from "../components/seat-alert";

function MyTrips() {
  const [myRides, setMyRides] = useState([]);
  const [showSeatAlert, setShowSeatAlert] = useState(false);
  const userId = 1; //localStorage.getItem("userId");
  const navigate = useNavigate(); // Definir navigate

  useEffect(() => {
    fetchMyRides();
  }, []);

  const fetchMyRides = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/${userId}/rides`
      );
      setMyRides(response.data);
    } catch (error) {
      console.error("Error fetching user rides:", error);
    }
  };

  const handleAddSeats = async (ride) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/rides/${ride.id}/addSeats`,
        null,
        {
          params: { passengerId: 1 },
        }
      );
      setShowSeatAlert(true); // Mostrar la alerta
      fetchMyRides(); // Actualizar la lista de viajes
    } catch (error) {
      console.error("Error adding seats:", error);
      // Puedes manejar el error mostrando otra alerta personalizada si lo deseas
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Trips</h1>
      {myRides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} onAddSeats={handleAddSeats} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-700 mb-4">
            You haven't joined any trips yet. Start exploring and join a ride
            today!
          </p>
          <button
            onClick={() => navigate("/search-ride")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Search for Rides
          </button>
        </div>
      )}
      {showSeatAlert && <SeatAlert onClose={() => setShowSeatAlert(false)} />}
    </div>
  );
}

export default MyTrips;
