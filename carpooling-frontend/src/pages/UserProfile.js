// Displays user information (name, contact, etc.) with the ability to edit and view travel history.

import React, { useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '555-123-4567',
        profilePic: 'https://via.placeholder.com/150', // Foto de ejemplo
    });
  
    const [rideHistory, setRideHistory] = useState([
        { id: 1, origin: 'CUCEI', destination: 'CUCEA', date: '2024-10-10', status: 'Completed' },
        { id: 2, origin: 'Centro', destination: 'Zapopan', date: '2024-10-12', status: 'Canceled' },
        // Más viajes
    ]);

    const [upcomingRides, setUpcomingRides] = useState([
        { id: 3, origin: 'Tlaquepaque', destination: 'Andares', date: '2024-10-21', time: '3:00 PM' },
    ]);

    const [settings, setSettings] = useState({
        notifications: true,
        passwordChange: false,
    });

    const handleToggleNotifications = () => {
        setSettings({ ...settings, notifications: !settings.notifications });
    };

    const handleChangePhoto = () => {
        // Lógica para cambiar la foto
        console.log('Change photo clicked');
    };

    const handleEditProfile = () => {
        // Lógica para editar perfil
        console.log('Edit profile clicked');
    };

    const handlePasswordChange = () => {
        // Lógica para cambiar contraseña
        console.log('Change password clicked');
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">User Profile</h1>

                {/* Información del usuario */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img 
                                src="/images/people/profile-picture-3.jpg"
                                alt="Profile" 
                                className="rounded-full w-32 h-32 mr-4 border-4 border-gray-300 shadow-lg hover:shadow-xl transition duration-300"
                            />
                            <div>
                                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Name:</strong> {user.name}</p>
                                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
                                <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleChangePhoto} 
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Change Photo
                        </button>
                    </div>
                </section>

                {/* Editar perfil */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Edit Profile</h2>
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleEditProfile}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Edit Personal Info
                        </button>
                        <button
                            onClick={handlePasswordChange}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                            Change Password
                        </button>
                    </div>
                </section>

                {/* Configuración de cuenta */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Settings</h2>
                    <div className="mb-4">
                        <label className="text-lg text-gray-700 dark:text-gray-300 flex items-center">
                            <input
                                type="checkbox"
                                checked={settings.notifications}
                                onChange={handleToggleNotifications}
                                className="mr-2"
                            />
                            Receive Notifications
                        </label>
                    </div>
                </section>

                {/* Viajes próximos como recordatorio */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Upcoming Rides</h2>
                    {upcomingRides.length > 0 ? (
                        <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Origin</th>
                                    <th className="py-2 px-4 border-b">Destination</th>
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upcomingRides.map((ride) => (
                                    <tr key={ride.id}>
                                        <td className="py-2 px-4 border-b">{ride.origin}</td>
                                        <td className="py-2 px-4 border-b">{ride.destination}</td>
                                        <td className="py-2 px-4 border-b">{ride.date}</td>
                                        <td className="py-2 px-4 border-b">{ride.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-lg text-gray-700 dark:text-gray-300">No upcoming rides.</p>
                    )}
                </section>

                {/* Historial de viajes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ride History</h2>
                    {rideHistory.length > 0 ? (
                        <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Origin</th>
                                    <th className="py-2 px-4 border-b">Destination</th>
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rideHistory.map((ride) => (
                                    <tr key={ride.id}>
                                        <td className="py-2 px-4 border-b">{ride.origin}</td>
                                        <td className="py-2 px-4 border-b">{ride.destination}</td>
                                        <td className="py-2 px-4 border-b">{ride.date}</td>
                                        <td className="py-2 px-4 border-b">{ride.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-lg text-gray-700 dark:text-gray-300">No rides completed yet.</p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default UserProfile;

