// Displays reviews and ratings the user has received, along with options to rate others after completing a ride.

import React from 'react';

function RatingsReviews() {
    const ratings = [
        { id: 1, role: 'Passenger', rating: '4.5/5', review: 'Great ride!' },
        { id: 2, role: 'Driver', rating: '5/5', review: 'Excellent passenger, very punctual.' },
        // Más calificaciones...
    ];

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ratings and Reviews</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Rating</th>
                            <th className="px-6 py-3">Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratings.map((rating) => (
                            <tr key={rating.id} className="bg-white dark:bg-gray-800">
                                <td className="px-6 py-4">{rating.role}</td>
                                <td className="px-6 py-4">{rating.rating}</td>
                                <td className="px-6 py-4">{rating.review}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RatingsReviews;
