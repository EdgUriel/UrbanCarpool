import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            const response = await axios.post('http://localhost:8080/api/users/login', formData);
            setSuccess(true);
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            console.error(error);
            setError('Incorrect credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-105">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-600 mt-2">Log in to your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                            Email address
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div className="relative">
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
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Log in'}
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
                        Login successful! Redirecting...
                    </div>
                )}
                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? 
                        <a href="/signup" className="text-blue-600 hover:underline ml-1 font-medium">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;