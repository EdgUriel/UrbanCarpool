// Shows past trips as both a passenger and driver, with the ability to leave or view ratings and reviews.

import React from 'react';

function TripHistory() {
    const trips = [
        { id: 1, role: 'Passenger', date: '2024-09-20', route: 'New York - Boston', rating: '4.5/5' },
        { id: 2, role: 'Driver', date: '2024-09-18', route: 'Philadelphia - New York', rating: '5/5' },
        // Más viajes...
    ];

    const handleRateTrip = (id) => {
        // Lógica para calificar el viaje
        console.log(`Rate trip with ID ${id}`);
    };

    const handleViewDetails = (id) => {
        // Lógica para ver detalles del viaje
        console.log(`View details for trip ID ${id}`);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Trip History</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Route</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Rating</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trips.map((trip) => (
                            <tr key={trip.id} className="bg-white dark:bg-gray-800">
                                <td className="px-6 py-4">{trip.date}</td>
                                <td className="px-6 py-4">{trip.route}</td>
                                <td className="px-6 py-4">{trip.role}</td>
                                <td className="px-6 py-4">{trip.rating}</td>
                                <td className="px-6 py-4 space-x-3">
                                    <button onClick={() => handleViewDetails(trip.id)} className="text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
                                    <button onClick={() => handleRateTrip(trip.id)} className="text-yellow-600 dark:text-yellow-400 hover:underline">Rate</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TripHistory;
