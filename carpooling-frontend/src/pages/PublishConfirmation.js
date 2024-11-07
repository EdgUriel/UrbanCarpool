import React from 'react';

function PublishConfirmation({ origin, destination, time, pricePerPassenger }) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Trip Published Successfully</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Your trip has been published.
                </p>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Trip Details</h2>
                    <p><strong>From:</strong> {origin}</p>
                    <p><strong>To:</strong> {destination}</p>
                    <p><strong>Departure Time:</strong> {time}</p>
                    <p><strong>Price per Passenger:</strong> ${pricePerPassenger}</p>
                </div>

                <div className="flex space-x-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        View Trip
                    </button>
                    <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700">
                        Edit Trip
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PublishConfirmation;
