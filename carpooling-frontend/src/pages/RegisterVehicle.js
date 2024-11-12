import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCarSide, FaTag, FaCheckCircle } from "react-icons/fa";

const VehicleForm = () => {
    const [modelId, setModelId] = useState('');
    const [typeId, setTypeId] = useState('');
    const [plate, setPlate] = useState('');
    const [models, setModels] = useState([]);
    const [types, setTypes] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Cargar modelos de vehículos
        axios.get('http://localhost:8080/api/vehicle-models')
        .then(response => setModels(response.data))
        .catch(error => console.log(error));

        // Cargar tipos de vehículos
        axios.get('http://localhost:8080/api/vehicle-types')
        .then(response => setTypes(response.data))
        .catch(error => console.log(error));
    }, []);

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const newVehicle = {
        userId: 1, // Asigna temporalmente el ID del usuario como 1
        modelId,
        typeId,
        plate
        };

        axios.post('http://localhost:8080/api/vehicles', newVehicle)
        .then(response => {
            setMessage('Vehicle created successfully!');
            setModelId('');
            setTypeId('');
            setPlate('');
        })
        .catch(error => {
            setMessage('Error creating vehicle.');
            console.log(error);
        });
    };

    return (
        <div className="container mx-auto p-6">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="bg-clip-text text-transparent bg-blue-500">
                Register Your Vehicle
            </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-400">Add details about your vehicle to start sharing rides</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            
            <div className="relative z-0 w-full mb-5 group">
            <FaCarSide className="text-gray-500 absolute top-3 left-3" />
            <select value={modelId} onChange={(e) => setModelId(e.target.value)}
                className="block py-2.5 pl-10 pr-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
            >
                <option value="">Select Model</option>
                {models.map(model => (
                <option key={model.id} value={model.id}>
                    {model.name}
                </option>
                ))}
            </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
            <FaTag className="text-gray-500 absolute top-3 left-3" />
            <select value={typeId} onChange={(e) => setTypeId(e.target.value)}
                className="block py-2.5 pl-10 pr-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
            >
                <option value="">Select Type</option>
                {types.map(type => (
                <option key={type.id} value={type.id}>
                    {type.name}
                </option>
                ))}
            </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <FaCheckCircle className="text-gray-500 absolute top-3 left-3" />
                <input
                    type="text" value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="Plate"
                    className="block py-2.5 pl-10 pr-4 w-full text-sm text-gray-900 bg-white border-2 border-gray-300 rounded-lg appearance-none dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                />
            </div>


            <button type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
            Register Vehicle
            </button>

            {message && (
            <p className={`mt-4 text-center font-semibold ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
            </p>
            )}
        </form>
        </div>
    );
};

export default VehicleForm;
