// Allows drivers to publish a new ride, entering details such as start location, destination, date, time, available seats, and price.

import React, { useState } from 'react';

function PublishRide() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState(1);
    const [price, setPrice] = useState('');

    const handlePublish = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para publicar el viaje
        console.log(`Publishing ride from ${origin} to ${destination} on ${date} at ${time}, ${seats} seats, price: ${price}`);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Publish a Ride</h1>
                <form onSubmit={handlePublish}>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Seats Available</label>
                        <input
                            type="number"
                            value={seats}
                            onChange={(e) => setSeats(e.target.value)}
                            min="1"
                            max="6"
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200">Price (per seat)</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            placeholder="Enter price"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Publish Ride
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PublishRide;
