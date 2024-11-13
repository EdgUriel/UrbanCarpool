import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, UserCircle, AlertCircle, CheckCircle } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        role: 'passenger',
        gender: 'Not specified',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', formData);
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error(error);
            setError('There was an error registering the user. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-105">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Create your account</h2>
                    <p className="text-gray-600 mt-2">Join our carpooling community</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 block mb-2">
                                First Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 block mb-2">
                                Last Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                            Email address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 block mb-2">
                            Phone number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="+1 234 567 890"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="role" className="text-sm font-medium text-gray-700 block mb-2">
                            Role
                        </label>
                        <div className="relative">
                            <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 appearance-none"
                            >
                                <option value="passenger">Passenger</option>
                                <option value="driver">Driver</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender" className="text-sm font-medium text-gray-700 block mb-2">
                            Gender
                        </label>
                        <div className="relative">
                            <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 appearance-none"
                            >
                                <option value="Not specified">Not specified</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign up'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center animate-fade-in-down">
                        <AlertCircle className="mr-2" size={20} />
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center animate-fade-in-down">
                        <CheckCircle className="mr-2" size={20} />
                        Registration successful! Redirecting to login...
                    </div>
                )}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account? 
                        <a href="/login" className="text-blue-600 hover:underline ml-1 font-medium">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;