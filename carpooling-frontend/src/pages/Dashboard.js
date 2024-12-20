// Main user hub after logging in, with quick links to search for rides, publish rides, or view travel history.

import React, { useState } from 'react';
import MapComponent from '../components/MapComponent'; // Importamos el componente del mapa
import { FaSearch, FaCar, FaHistory } from 'react-icons/fa'; // Iconos para mejorar visualmente los botones

function Dashboard() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [calculateRoute, setCalculateRoute] = useState(false); // Control para activar el cálculo de la ruta

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCalculateRoute(true); // Calcula la ruta al enviar el formulario
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {/* Main container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-8 text-center border-b-4 pb-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">Welcome to Your Dashboard</h1>
                    <p className="mt-4 text-lg text-gray-700">Quick access to all your carpooling needs</p>
                </header>

                {/* Formulario para ingresar origen y destino */}
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg mb-6 space-y-6">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Plan your Trip</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="origen" className="block text-sm font-medium text-gray-700">
                                Origin place
                                <span className="text-gray-500 text-xs"> (e.g., Av. Juárez)</span>
                            </label>
                            <input
                                type="text"
                                id="origen"
                                value={origin}
                                onChange={handleOriginChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="destino" className="block text-sm font-medium text-gray-700">
                                Destiny place
                                <span className="text-gray-500 text-xs"> (e.g., Centro Histórico)</span>
                            </label>
                            <input
                                type="text"
                                id="destino"
                                value={destination}
                                onChange={handleDestinationChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Travel Date</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={handleDateChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                        Calculate Route
                    </button>
                </form>

                {/* Map and buttons section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaSearch className="text-blue-600 mx-auto mb-4 text-4xl" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search for a Ride</h2>
                        <p className="text-gray-600 mb-6">Find available rides by entering your origin, destination, and date.</p>
                        <a href="/search-ride" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Search Ride
                        </a>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaCar className="text-blue-600 mx-auto mb-4 text-4xl" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Publish a Ride</h2>
                        <p className="text-gray-600 mb-6">List your ride and help others commute by carpooling.</p>
                        <a href="/publish-ride" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Publish Ride
                        </a>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaHistory className="text-blue-600 mx-auto mb-4 text-4xl" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">View Travel History</h2>
                        <p className="text-gray-600 mb-6">You can your past trips and rides shared any time.</p>
                        <a href="/travel-history" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Travel History
                        </a>
                    </div>
                </div>

                {/* Mapa mostrando la ruta */}
                <div className="mt-10">
                    {calculateRoute ? (
                        <MapComponent origin={origin} destination={destination} />
                    ) : (
                        <div className="text-center text-gray-700">Enter origin and destination to calculate the route.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

