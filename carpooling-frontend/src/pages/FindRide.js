import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FindRide() {
    const [rides, setRides] = useState([]);
    const [filteredRides, setFilteredRides] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        origin: '',
        destination: '',
        date: '',
        time: '',
        driverGender: '',
        requirePets: '',
        requireMusic: ''
    });

    useEffect(() => {
        fetchRides();
    }, []);

    const fetchRides = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/rides');
            setRides(response.data);
            setFilteredRides(response.data);
        } catch (error) {
            console.error('Error fetching rides:', error);
        }
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({
            ...searchCriteria,
            [name]: value
        });
    };

    const handleSearch = () => {
        const results = rides.filter(ride => {
            const matchesOrigin = searchCriteria.origin ? ride.origin.toLowerCase() === searchCriteria.origin.toLowerCase() : true;
            const matchesDestination = searchCriteria.destination ? ride.destination.toLowerCase() === searchCriteria.destination.toLowerCase() : true;
            const formattedDateTime = `${searchCriteria.date}T${searchCriteria.time}`; // Combina fecha y hora
            const matchesDateTime = searchCriteria.date && searchCriteria.time
                ? ride.departureDatetime.startsWith(formattedDateTime)
                : true;
            const matchesGender = searchCriteria.driverGender ? ride.driverGender === searchCriteria.driverGender : true;
            const matchesPets = searchCriteria.requirePets ? ride.petsAllowed === parseInt(searchCriteria.requirePets) : true;
            const matchesMusic = searchCriteria.requireMusic ? ride.musicPreference === parseInt(searchCriteria.requireMusic) : true;

            return matchesOrigin && matchesDestination && matchesDateTime && matchesGender && matchesPets && matchesMusic;
        });
        setFilteredRides(results);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Search for Rides</h2>
            <div style={styles.searchForm}>
                <input type="text" name="origin" placeholder="Origin" value={searchCriteria.origin} onChange={handleSearchChange} style={styles.input} />
                <input type="text" name="destination" placeholder="Destination" value={searchCriteria.destination} onChange={handleSearchChange} style={styles.input} />
                <input type="date" name="date" value={searchCriteria.date} onChange={handleSearchChange} style={styles.input} />
                <input type="time" name="time" value={searchCriteria.time} onChange={handleSearchChange} style={styles.input} />
                <select name="driverGender" value={searchCriteria.driverGender} onChange={handleSearchChange} style={styles.input}>
                    <option value="">Any Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select name="requirePets" value={searchCriteria.requirePets} onChange={handleSearchChange} style={styles.input}>
                    <option value="">Pets Allowed?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <select name="requireMusic" value={searchCriteria.requireMusic} onChange={handleSearchChange} style={styles.input}>
                    <option value="">Music Preference</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <button onClick={handleSearch} style={styles.searchButton}>Search</button>
            </div>
            <div style={styles.results}>
                {filteredRides.length ? (
                    filteredRides.map((ride, index) => (
                        <div key={index} style={styles.rideCard}>
                            <p><strong>Origin:</strong> {ride.origin}</p>
                            <p><strong>Destination:</strong> {ride.destination}</p>
                            <p><strong>Date & Time:</strong> {ride.departureDatetime}</p>
                            <p><strong>Driver Gender:</strong> {ride.driverGender}</p>
                            <p><strong>Pets Allowed:</strong> {ride.petsAllowed ? 'Yes' : 'No'}</p>
                            <p><strong>Music Preference:</strong> {ride.musicPreference ? 'Yes' : 'No'}</p>
                        </div>
                    ))
                ) : (
                    <p>No rides found matching the criteria.</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '70%',
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
    searchForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '100%',
        marginBottom: '10px',
    },
    searchButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
    },
    results: {
        marginTop: '20px',
    },
    rideCard: {
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
    },
};

export default FindRide;
