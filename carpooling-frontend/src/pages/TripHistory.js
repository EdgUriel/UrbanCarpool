import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHistory, FaMapMarkerAlt, FaRegStar, FaStar, FaCarSide, FaWalking } from 'react-icons/fa';

function TripHistory() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');

    const userId = 2; // This should ideally come from a user context or props

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/ride-history/user/${userId}`);
                setTrips(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching the trip history. Please try again later.');
                setLoading(false);
            }
        };

        fetchTrips();
    }, [userId]);

    const filteredTrips = trips.filter(trip => {
        if (filter === 'all') return true;
        return trip.role === filter;
    });

    const renderRating = (rating) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < rating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300" />}
                    </span>
                ))}
            </div>
        );
    };

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-8 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 flex items-center justify-center">
                        <FaHistory className="mr-4 text-blue-500" />
                        Trip History
                    </h1>
                    <p className="mt-4 text-xl text-gray-700">Relive your journey and see how you've contributed to a greener future.</p>
                </header>

                <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold text-gray-900">Your Past Rides</h2>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => setFilter('all')} 
                                className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                All
                            </button>
                            <button 
                                onClick={() => setFilter('driver')} 
                                className={`px-4 py-2 rounded-full ${filter === 'driver' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                As Driver
                            </button>
                            <button 
                                onClick={() => setFilter('passenger')} 
                                className={`px-4 py-2 rounded-full ${filter === 'passenger' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                As Passenger
                            </button>
                        </div>
                    </div>

                    {filteredTrips.length === 0 ? (
                        <p className="text-center text-gray-500 my-10">No trips found for the selected filter.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-lg text-left text-gray-500">
                                <thead className="text-base text-gray-700 uppercase bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4">Trip Date</th>
                                        <th className="px-6 py-4">Route</th>
                                        <th className="px-6 py-4">Role</th>
                                        <th className="px-6 py-4">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTrips.map((trip) => (
                                        <tr key={trip.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">
                                                {new Date(trip.rideStartTime).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                                                    <span>{trip.rideOrigin}</span>
                                                    <span className="mx-2">→</span>
                                                    <FaMapMarkerAlt className="text-green-500 mr-2" />
                                                    <span>{trip.rideDestination}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    {trip.role === 'driver' ? (
                                                        <FaCarSide className="text-blue-500 mr-2" />
                                                    ) : (
                                                        <FaWalking className="text-green-500 mr-2" />
                                                    )}
                                                    <span className="capitalize">{trip.role}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {trip.rating ? renderRating(trip.rating) : 'Not rated yet'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Did You Know?</h3>
                    <p className="text-blue-700">
                        By carpooling, you're not just saving money – you're also making a significant impact on the environment. 
                        A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year. 
                        By sharing rides, you're directly contributing to reducing these emissions!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TripHistory;