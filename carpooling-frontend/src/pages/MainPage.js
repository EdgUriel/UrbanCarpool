import React, { useState } from 'react';
import MapComponent from '../components/MapComponent'; // Importación corregida

function MainPage() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [calculateRoute, setCalculateRoute] = useState(false); // Estado para controlar si calcular la ruta

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        setCalculateRoute(true); // Permitir que se calcule la ruta al hacer clic en el botón
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg mx-auto my-2" style={{ padding: '10px 20px', maxWidth: '95%', margin: '20px auto' }}>
            {/* Main container */}
            <div className="flex p-6">
                {/* Sidebar */}
                <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 h-full" aria-label="Sidebar">
                    <div className="px-4 py-6 bg-gray-50 dark:bg-gray-800 h-full">
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

                            {/* Botón */}
                            <div>
                                <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Plan your trip</button>
                            </div>
                        </form>
                    </div>
                </aside>

                {/* Main content (Map Area) */}
                <main className="flex-1 p-6">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 h-full">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Map</h2>
                        {/* Componente del mapa con la lógica para calcular la ruta */}
                        <MapComponent origin={calculateRoute ? origin : ''} destination={calculateRoute ? destination : ''} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainPage;
