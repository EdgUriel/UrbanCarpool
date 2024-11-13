import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Star, Calendar, MapPin, Car, CreditCard, Edit, ArrowLeft, Bell, Lock, DollarSign, AlertTriangle } from 'lucide-react';
import { FaHistory, FaMapMarkerAlt, FaRegStar, FaStar, FaCarSide, FaWalking } from 'react-icons/fa';

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [recentTrips, setRecentTrips] = useState([]);
    const [activeTab, setActiveTab] = useState('profile');
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
    });
    const [paymentMethods, setPaymentMethods] = useState([
        { id: 1, type: 'Credit Card', lastFour: '1234' },
    ]);
    const [filter, setFilter] = useState('all');
    const [filteredTrips, setFilteredTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filtered = recentTrips.filter(trip => {
            if (filter === 'all') return true;
            return trip.role === filter;
        });
        setFilteredTrips(filtered);
    }, [filter, recentTrips]);

    const renderRating = (rating) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < rating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300" />}
                    </span>
                ))}
            </div>
        );
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = "juan.perez@example.com";
                const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
                setUser(response.data);
                
                const tripsResponse = await axios.get(`http://localhost:8080/api/users/${userId}/trips`);
                const tripsWithDetails = tripsResponse.data.map(trip => ({
                    ...trip,
                    rideOrigin: trip.from || 'Unknown',
                    rideDestination: trip.to || 'Unknown',
                    rideStartTime: trip.date || new Date().toISOString(),
                    role: Math.random() > 0.5 ? 'driver' : 'passenger', // Randomly assign roles for demonstration
                    rating: Math.floor(Math.random() * 5) + 1 // Random rating for demonstration
                }));
                setRecentTrips(tripsWithDetails);
                setFilteredTrips(tripsWithDetails);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-50 to-white">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    const handleSaveChanges = () => {
        console.log('Changes saved');
    };

    const handleAddPaymentMethod = () => {
        console.log('Add new payment method');
    };

    const handleDeletePaymentMethod = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    const toggleNotification = (type) => {
        setNotifications({
            ...notifications,
            [type]: !notifications[type],
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-10">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-blue-600 mb-4 sm:mb-0">User Dashboard</h1>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`px-4 py-2 rounded-md transition ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`px-4 py-2 rounded-md transition ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Settings
                                </button>
                                <button
                                    onClick={() => setActiveTab('notifications')}
                                    className={`px-4 py-2 rounded-md transition ${activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Notifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('tripHistory')}
                                    className={`px-4 py-2 rounded-md transition ${activeTab === 'tripHistory' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Trip History
                                </button>
                            </div>
                        </div>

                        {activeTab === 'profile' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h2>
                                    <div className="flex items-center">
                                        <Lock className="text-blue-500 mr-2" size={18} />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Settings</h2>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={notifications.email}
                                                onChange={() => toggleNotification('email')}
                                                className="mr-2"
                                            />
                                            <label className="text-gray-700">Email Notifications</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={notifications.sms}
                                                onChange={() => toggleNotification('sms')}
                                                className="mr-2"
                                            />
                                            <label className="text-gray-700">SMS Notifications</label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Methods</h2>
                                    <div className="space-y-4">
                                        {paymentMethods.map((method) => (
                                            <div key={method.id} className="flex justify-between items-center">
                                                <span className="text-gray-700">
                                                    <CreditCard className="text-blue-500 mr-2 inline" size={18} />
                                                    {method.type} ending in {method.lastFour}
                                                </span>
                                                <button
                                                    onClick={() => handleDeletePaymentMethod(method.id)}
                                                    className="text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={handleAddPaymentMethod}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                        >
                                            Add New Payment Method
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleSaveChanges}
                                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-8">
                                <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                                    <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                                        <Bell className="mr-2" size={24} />
                                        Your Notifications
                                    </h2>
                                    <p className="text-blue-600">
                                        Stay updated with real-time notifications on trips, promotions, and important account alerts.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                            <Car className="mr-2 text-blue-500" size={20} />
                                            Trip Updates
                                        </h3>
                                        <p className="text-gray-600">
                                            Receive updates on your trips, including changes, delays, and cancellations in real time.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                            <DollarSign className="mr-2 text-green-500" size={20} />
                                            Promotions
                                        </h3>
                                        <p className="text-gray-600">
                                            Discover the latest deals and exclusive offers available to Urban Carpool users.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                            <AlertTriangle className="mr-2 text-yellow-500" size={20} />
                                            Security Alerts
                                        </h3>
                                        <p className="text-gray-600">
                                            Stay safe with alerts about suspicious account activity or potential security risks.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                            <CreditCard className="mr-2 text-purple-500" size={20} />
                                            Payment Updates
                                        </h3>
                                        <p className="text-gray-600">
                                            Get updates on payment methods, receipts, and fare adjustments for your trips.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'tripHistory' && (
                            <div className="space-y-8">
                                <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-3xl font-semibold text-gray-900">Your Past Rides</h2>
                                        <div className="flex space-x-2">
                                            <button 
                                                onClick={() => setFilter('all')} 
                                                className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                All
                                            </button>
                                            <button 
                                                onClick={() => setFilter('driver')} 
                                                className={`px-4 py-2 rounded-full ${filter === 'driver' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                As Driver
                                            </button>
                                            <button 
                                                onClick={() => setFilter('passenger')} 
                                                className={`px-4 py-2 rounded-full ${filter === 'passenger' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                As Passenger
                                            </button>
                                        </div>
                                    </div>

                                    {filteredTrips.length === 0 ? (
                                        <p className="text-center text-gray-500 my-10">No trips found for the selected filter.</p>
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-lg text-left text-gray-500">
                                                <thead className="text-base text-gray-700 uppercase bg-gray-100">
                                                    <tr>
                                                        <th className="px-6 py-4">Trip Date</th>
                                                        <th className="px-6 py-4">Route</th>
                                                        <th className="px-6 py-4">Role</th>
                                                        <th className="px-6 py-4">Rating</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredTrips.map((trip) => (
                                                        <tr key={trip.id} className="bg-white border-b hover:bg-gray-50">
                                                            <td className="px-6 py-4 font-medium text-gray-900">
                                                                {new Date(trip.rideStartTime).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex items-center">
                                                                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                                                                    <span>{trip.rideOrigin}</span>
                                                                    <span className="mx-2">→</span>
                                                                    <FaMapMarkerAlt className="text-green-500 mr-2" />
                                                                    <span>{trip.rideDestination}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex items-center">
                                                                    {trip.role === 'driver' ? (
                                                                        <FaCarSide className="text-blue-500 mr-2" />
                                                                    ) : (
                                                                        <FaWalking className="text-green-500 mr-2" />
                                                                    )}
                                                                    <span className="capitalize">{trip.role}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {trip.rating ? renderRating(trip.rating) : 'Not rated yet'}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Did You Know?</h3>
                                    <p className="text-blue-700">
                                        By carpooling, you're not just saving money – you're also making a significant impact on the environment. 
                                        A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year. 
                                        By sharing rides, you're directly contributing to reducing these emissions!
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'profile' && (
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold mb-4 text-blue-600">Recent Trips</h4>
                                {recentTrips.length > 0 ? (
                                    <div className="space-y-4">
                                        {recentTrips.map((trip, index) => (
                                            <div key={index} className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-blue-800">{trip.from} to {trip.to}</p>
                                                    <p className="text-sm text-blue-600">{new Date(trip.date).toLocaleDateString()}</p>
                                                </div>
                                                <span className="text-blue-600 font-semibold">${trip.cost.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">No recent trips</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;