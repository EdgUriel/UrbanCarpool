import React, { useState } from 'react';
import axios from 'axios';

function CreateRide() {
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
        <div style={styles.container}>
            <h2 style={styles.heading}>Create a New Ride</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Origin:</label>
                    <input type="text" name="origin" value={formData.origin} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Destination:</label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Available Seats:</label>
                    <input type="number" name="availableSeats" value={formData.availableSeats} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Car:</label>
                    <input type="text" name="car" value={formData.car} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Plate:</label>
                    <input type="text" name="plate" value={formData.plate} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Departure Date and Time:</label>
                    <input type="datetime-local" name="departureDatetime" value={formData.departureDatetime} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Seat Price:</label>
                    <input type="number" name="seatPrice" value={formData.seatPrice} onChange={handleChange} required style={styles.input} step="0.01" />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Driver Name:</label>
                    <input type="text" name="driverName" value={formData.driverName} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Driver Phone:</label>
                    <input type="text" name="driverPhone" value={formData.driverPhone} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Driver Rating:</label>
                    <input type="number" name="driverRating" value={formData.driverRating} onChange={handleChange} required style={styles.input} step="0.1" min="0" max="5" />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="petsAllowed" style={styles.label}>Pets Allowed</label>
                    <button 
                        type="button" 
                        onClick={() => setFormData({ ...formData, petsAllowed: formData.petsAllowed === 1 ? 0 : 1 })}
                        style={{
                            ...styles.input,
                            backgroundColor: formData.petsAllowed === 1 ? '#10B981' : '#EF4444',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        {formData.petsAllowed === 1 ? 'Pets Allowed' : 'Pets Not Allowed'}
                    </button>
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Music Preference:</label>
                    <select name="musicPreference" value={formData.musicPreference} onChange={handleChange} required style={styles.input}>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Driver Gender:</label>
                    <input type="text" name="driverGender" value={formData.driverGender} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Travel Preference:</label>
                    <input type="text" name="travelPreference" value={formData.travelPreference} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Max Passenger Price:</label>
                    <input type="number" name="maxPassengerPrice" value={formData.maxPassengerPrice} onChange={handleChange} required style={styles.input} step="0.01" />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Passenger Seats Needed:</label>
                    <input type="number" name="passengerSeatsNeeded" value={formData.passengerSeatsNeeded} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Require Pets:</label>
                    <select name="requirePets" value={formData.requirePets} onChange={handleChange} required style={styles.input}>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Require Music:</label>
                    <select name="requireMusic" value={formData.requireMusic} onChange={handleChange} required style={styles.input}>
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                    </select>
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Require Gender:</label>
                    <input type="text" name="requireGender" value={formData.requireGender} onChange={handleChange} required style={styles.input} />
                </div>
                <button type="submit" style={styles.submitButton}>Create Ride</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        width: '60%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '5px',
        display: 'block',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '100%',
    },
    submitButton: {
        padding: '12px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default CreateRide;