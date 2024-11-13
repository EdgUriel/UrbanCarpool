import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHistory } from 'react-icons/fa'; // Icon for better visual appeal

function TripHistory() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = 2;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/ride-history/user/${userId}`)
            .then((response) => {
                setTrips(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error fetching the history');
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {/* Main container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-8 text-center border-b-4 pb-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">Trip History</h1>
                    <p className="mt-4 text-xl text-gray-700">View your past trips and carpool experiences.</p>
                </header>

                {/* Trip History Table */}
                <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Your Past Rides</h2>
                    <table className="w-full text-lg text-left text-gray-500">
                        <thead className="text-base text-gray-700 uppercase bg-blue-400 text-white">
                            <tr>
                                <th className="px-6 py-4">Trip Date</th>
                                <th className="px-6 py-4">Origin</th>
                                <th className="px-6 py-4">Destination</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trips.map((trip) => (
                                <tr key={trip.id} className="bg-white hover:bg-gray-100">
                                    <td className="px-6 py-4 text-lg">{new Date(trip.rideStartTime).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-lg">{trip.rideOrigin}</td>
                                    <td className="px-6 py-4 text-lg">{trip.rideDestination}</td>
                                    <td className="px-6 py-4 text-lg capitalize">{trip.role}</td>
                                    <td className="px-6 py-4 text-lg">{trip.rating || 'Not rated yet'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default TripHistory;
