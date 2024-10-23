import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.4326,
  lng: -99.1332 // Centro de la Ciudad de México como ejemplo
};

const MapPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Selecciona el lugar de origen y destino</h2>
      <LoadScript googleMapsApiKey="REACT_APP_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Otros componentes o funcionalidades del mapa */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
