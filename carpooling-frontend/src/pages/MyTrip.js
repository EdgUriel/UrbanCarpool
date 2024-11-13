import React, { useState, useEffect } from "react";
import axios from "axios";
import RideCard from "../components/RideCard";
import SeatAlert from "../components/seat-alert";

function MyTrips() {
  const [myRides, setMyRides] = useState([]);
  const [showSeatAlert, setShowSeatAlert] = useState(false);
  const userId = 1; //localStorage.getItem("userId");

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

  // Define the handleAddSeats function
  const handleAddSeats = async (ride) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/rides/${ride.id}/addSeats`,
        null,
        {
          params: { passengerId: userId },
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
            <RideCard
              key={ride.id}
              ride={ride}
              onAddSeats={handleAddSeats} // Pass the function here
            />
          ))}
        </div>
      ) : (
        <p>You haven't joined any trips.</p>
      )}
    </div>
  );
}

export default MyTrips;
