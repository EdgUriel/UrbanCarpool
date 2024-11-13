import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterUser() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        role: 'passenger',
        gender: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
        const response = await axios.post('http://localhost:8080/api/users/register', formData);
        setMessage('Usuario registrado exitosamente');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            role: 'passenger',
            gender: '',
        });
        } catch (error) {
        setMessage(error.response?.data || 'Error al registrar usuario');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rol</label>
            <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value="passenger">Pasajero</option>
                <option value="driver">Conductor</option>
                <option value="both">Ambos</option>
            </select>
            </div>
            <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Género</label>
            <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            </div>
            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Registrar
            </button>
            </div>
        </form>
        {message && (
            <div className={`mt-4 p-2 ${message.includes('exitosamente') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-md`}>
            {message}
            </div>
        )}
        </div>
    );
}