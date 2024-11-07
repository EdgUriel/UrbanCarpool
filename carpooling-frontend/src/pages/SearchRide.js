// Allows passengers to search for available carpool rides by entering the origin, destination, and date.

import React, { useState } from 'react';

function SearchRide() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para realizar la búsqueda
        console.log(`Searching for rides from ${origin} to ${destination} on ${date}`);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search for a Ride</h1>
                <form onSubmit={handleSearch}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Origin</label>
                        <input
                            type="text"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            placeholder="Enter origin"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Destination</label>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            placeholder="Enter destination"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Search Rides
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchRide;
