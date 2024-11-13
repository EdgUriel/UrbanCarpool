import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Star, Calendar, MapPin, Car, CreditCard, Edit, ArrowLeft } from 'lucide-react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [recentTrips, setRecentTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userId = "juan.perez@example.com";
                const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
                setUser(response.data);
                
                // Fetch recent trips
                const tripsResponse = await axios.get(`http://localhost:8080/api/users/${userId}/trips`);
                setRecentTrips(tripsResponse.data.slice(0, 3)); // Get last 3 trips
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserProfile();
    }, []);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">User Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 flex flex-col items-center">
                    <img
                        src={user.avatarUrl || `https://www.gravatar.com/avatar/${user.email}`}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mb-4 border-4 border-blue-200"
                    />
                    <h3 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h3>
                    <p className="text-gray-500 flex items-center mt-2">
                        {user.role === 'driver' ? <Car className="mr-2" size={18} /> : <User className="mr-2" size={18} />}
                        {user.role === 'driver' ? 'Driver' : 'Passenger'}
                    </p>
                    <div className="flex items-center mt-2">
                        <Star className="text-yellow-400 mr-1" size={18} />
                        <span className="font-semibold">{user.rating || 'No rating yet'}</span>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center">
                        <Mail className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Email:</span>
                        <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Phone:</span>
                        <span className="text-gray-700">{user.phone || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center">
                        <User className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Gender:</span>
                        <span className="text-gray-700">{user.gender}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Member since:</span>
                        <span className="text-gray-700">{new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Location:</span>
                        <span className="text-gray-700">{user.location || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center">
                        <CreditCard className="text-blue-500 mr-2" size={18} />
                        <span className="font-semibold mr-2">Payment Method:</span>
                        <span className="text-gray-700">{user.paymentMethod || 'Not added'}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Recent Trips</h4>
                {recentTrips.length > 0 ? (
                    <div className="space-y-4">
                        {recentTrips.map((trip, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{trip.from} to {trip.to}</p>
                                    <p className="text-sm text-gray-500">{new Date(trip.date).toLocaleDateString()}</p>
                                </div>
                                <span className="text-blue-600 font-semibold">${trip.cost.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No recent trips</p>
                )}
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={() => navigate('/edit-profile')}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center"
                >
                    <Edit className="mr-2" size={18} />
                    Edit Profile
                </button>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition flex items-center"
                >
                    <ArrowLeft className="mr-2" size={18} />
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default UserProfile;