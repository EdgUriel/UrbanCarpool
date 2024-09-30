import React, { useState, useEffect } from 'react';

const MapComponent = () => {
  // Estados para capturar el origen y destino ingresado por el usuario
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    // Cargar el script de Google Maps API cuando el componente se monta
    const script = document.createElement('script');
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Accede a la clave de la variable de entorno
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Definir la función de inicialización del mapa
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara, México
        zoom: 12,
      });
    };

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // La función para obtener las direcciones y mostrarlas en el mapa
  const handleGetDirections = async () => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara, México
    });

    directionsRenderer.setMap(map);

    const request = {
      origin: origin, // Utiliza el valor ingresado en el input de origen
      destination: destination, // Utiliza el valor ingresado en el input de destino
      travelMode: window.google.maps.TravelMode.DRIVING, // Modo de viaje
    };

    // Obtener la ruta y renderizarla en el mapa
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      } else {
        console.error('Error al obtener las direcciones:', status);
      }
    });
  };

  return (
    <div>
      {/* Inputs para que el usuario ingrese origen y destino */}
      <div>
        <label>Origen: </label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Ingresa el lugar de origen"
        />
      </div>

      <div>
        <label>Destino: </label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Ingresa el lugar de destino"
        />
      </div>

      {/* Botón para obtener las direcciones */}
      <button onClick={handleGetDirections}>Obtener direcciones</button>

      {/* Div donde se renderiza el mapa */}
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;