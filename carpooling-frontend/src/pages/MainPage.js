// Displays the route of a trip on a Google Map, showing estimated time and route details.

import React, { useState } from 'react';
import MapComponent from '../components/MapComponent'; // Importación corregida

function MainPage() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [seats, setSeats] = useState(1); // Estado para la cantidad de asientos
    const [departureTime, setDepartureTime] = useState(''); // Estado para la hora de salida
    const [calculateRoute, setCalculateRoute] = useState(false); // Estado para controlar si calcular la ruta

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleSeatsChange = (e) => {
        setSeats(e.target.value); // Manejar el cambio en el número de asientos
    };

    const handleDepartureTimeChange = (e) => {
        setDepartureTime(e.target.value); // Manejar el cambio en la hora de salida
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        setCalculateRoute(true); // Permitir que se calcule la ruta al hacer clic en el botón
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg mx-auto my-2 max-w-screen-xl" style={{ padding: '10px 20px', margin: '20px auto' }}>
            {/* Main container */}
            <div className="flex flex-wrap md:flex-nowrap p-6 gap-4">
                {/* Sidebar */}
                <aside className="w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Where you're going today?</h2>
                    <form onSubmit={handleSubmit}> {/* Manejar el envío del formulario */}
                        {/* Lugar de origen */}
                        <div className="mb-4">
                            <label htmlFor="origen" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Origin place</label>
                            <input
                                type="text"
                                id="origen"
                                name="origen"
                                value={origin}
                                onChange={handleOriginChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Lugar de destino */}
                        <div className="mb-4">
                            <label htmlFor="destino" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Destiny place</label>
                            <input
                                type="text"
                                id="destino"
                                name="destino"
                                value={destination}
                                onChange={handleDestinationChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Cantidad de asientos */}
                        <div className="mb-4">
                            <label htmlFor="seats" className="block text-sm font-medium text-gray-700 dark:text-gray-200">How many seats?</label>
                            <input
                                type="number"
                                id="seats"
                                name="seats"
                                value={seats}
                                onChange={handleSeatsChange}
                                min="1"
                                max="6"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Hora de salida */}
                        <div className="mb-4">
                            <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Departure time</label>
                            <input
                                type="time"
                                id="departureTime"
                                name="departureTime"
                                value={departureTime}
                                onChange={handleDepartureTimeChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Botón */}
                        <div>
                            <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Plan your trip</button>
                        </div>
                    </form>
                </aside>

                {/* Main content (Map Area) */}
                <main className="w-full md:w-2/3 p-6">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Map</h2>
                        {/* Componente del mapa con la lógica para calcular la ruta */}
                        <MapComponent origin={calculateRoute ? origin : ''} destination={calculateRoute ? destination : ''} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainPage;
