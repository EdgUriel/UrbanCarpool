import React from 'react';

function ReservationConfirmation({ driver, time, route, price }) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Reservation Confirmed</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Your ride has been successfully reserved.
                </p>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Trip Details</h2>
                    <p><strong>Driver:</strong> {driver}</p>
                    <p><strong>Departure Time:</strong> {time}</p>
                    <p><strong>Route:</strong> {route}</p>
                    <p><strong>Price:</strong> ${price}</p>
                </div>

                <div className="flex space-x-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        View Trip Details
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                        Cancel Reservation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReservationConfirmation;
