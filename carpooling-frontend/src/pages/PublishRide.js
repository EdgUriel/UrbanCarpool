// Allows drivers to publish a new ride, entering details such as start location, destination, date, time, available seats, and price.

import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import axios from 'axios';

function PublishRide() {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        availableSeats: 1,
        car: '',
        plate: '',
        departureDatetime: '',
        seatPrice: 0,
        driverName: '',
        driverPhone: '',
        driverRating: 0,
        petsAllowed: 0,
        musicPreference: 0,
        driverGender: '',
        travelPreference: '',
        maxPassengerPrice: 0,
        passengerSeatsNeeded: 1,
        requirePets: 0,
        requireMusic: 0,
        requireGender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                seatPrice: parseFloat(formData.seatPrice),
                maxPassengerPrice: parseFloat(formData.maxPassengerPrice),
                driverRating: parseFloat(formData.driverRating),
                availableSeats: parseInt(formData.availableSeats),
                passengerSeatsNeeded: parseInt(formData.passengerSeatsNeeded),
                petsAllowed: parseInt(formData.petsAllowed),
                musicPreference: parseInt(formData.musicPreference),
                requirePets: parseInt(formData.requirePets),
                requireMusic: parseInt(formData.requireMusic)
            };
            const response = await axios.post('http://localhost:8080/api/rides', dataToSend);
            alert('Ride created successfully');
            console.log(response.data);
        } catch (error) {
            console.error('Error creating ride:', error);
            alert('There was an error creating the ride');
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg mx-auto my-2 max-w-screen-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Publish a New Ride</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Origin</label>
                        <input type="text" name="origin" value={formData.origin} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Destination</label>
                        <input type="text" name="destination" value={formData.destination} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Available Seats</label>
                        <input type="number" id="availableSeats" name="availableSeats" value={formData.availableSeats} onChange={handleChange} min="1" max="6"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Car</label>
                        <input type="text" name="car" value={formData.car} onChange={handleChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Plate</label>
                        <input type="text" name="plate" value={formData.plate} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="seatPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Price per Seat</label>
                        <input type="number" name="seatPrice" value={formData.seatPrice} onChange={handleChange} min="10" step="0.5"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="departureDatetime" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Departure Date and Time</label>
                        <input type="datetime-local" name="departureDatetime" value={formData.departureDatetime} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Driver Name</label>
                        <input type="text" name="driverName" value={formData.driverName} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Driver Phone</label>
                        <input type="text" name="driverPhone" value={formData.driverPhone} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Driver Rating</label>
                        <input type="number" name="driverRating" value={formData.driverRating} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="petsAllowed" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Pets Allowed</label>
                        <button 
                            type="button" 
                            onClick={() => setFormData({ ...formData, petsAllowed: formData.petsAllowed === 1 ? 0 : 1 })}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md ${formData.petsAllowed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                        >
                            {formData.petsAllowed === 1 ? 'Pets Allowed' : 'Pets Not Allowed'}
                        </button>
                    </div>

                    <div>
                        <label htmlFor="musicPreference" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Music Preference</label>
                        <button 
                            type="button" 
                            onClick={() => setFormData({ ...formData, musicPreference: formData.musicPreference === 1 ? 0 : 1 })}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md ${formData.musicPreference ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
                        >
                            {formData.musicPreference === 1 ? 'Music Allowed' : 'No Music'}
                        </button>
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Driver Gender</label>
                        <input type="text" name="driverGender" value={formData.driverGender} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Tarvel Preference</label>
                        <input type="text" name="travelPreference" value={formData.travelPreference} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Max Passenger Price</label>
                        <input type="number" name="maxPassengerPrice" value={formData.maxPassengerPrice} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Passenger Seats Needed</label>
                        <input type="number" name="passengerSeatsNeeded" value={formData.passengerSeatsNeeded} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="requirePets" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Require Pets</label>
                        <button 
                            type="button" 
                            onClick={() => setFormData({ ...formData, requirePets: formData.requirePets === 1 ? 0 : 1 })}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md ${formData.requirePets ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                        >
                            {formData.requirePets === 1 ? 'Pets Required' : 'No Pets Required'}
                        </button>
                    </div>

                    <div>
                        <label htmlFor="requireMusic" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Require Music</label>
                        <button 
                            type="button" 
                            onClick={() => setFormData({ ...formData, requireMusic: formData.requireMusic === 1 ? 0 : 1 })}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md ${formData.requireMusic ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
                        >
                            {formData.requireMusic === 1 ? 'Music Required' : 'No Music Required'}
                        </button>
                    </div>

                    <div>
                        <label htmlFor="driverPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Require Gender</label>
                        <input type="text" name="requireGender" value={formData.requireGender} onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>

                <button type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >Publish Ride</button>
            </form>

            <div className="mt-8">
                <MapComponent />
            </div>
        </div>
    );
}

export default PublishRide;
