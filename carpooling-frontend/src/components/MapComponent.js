import React, { useEffect } from 'react';

const MapComponent = ({ origin, destination, mapId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Accede a la clave de la variable de entorno
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap${mapId}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Inicializa el mapa con un identificador único
    window[`initMap${mapId}`] = () => {
      const map = new window.google.maps.Map(document.getElementById(`map${mapId}`), {
        center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara, México
        zoom: 12,
      });

      if (origin && destination) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request = {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(result);
          } else {
            console.error('Error al obtener las direcciones:', status);
          }
        });
      }
    };

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
      delete window[`initMap${mapId}`]; // Elimina la función de callback después de cada renderizado
    };
  }, [origin, destination, mapId]); // Dependencias para que se vuelva a cargar el mapa al cambiar

  return (
    <div>
      <div id={`map${mapId}`} style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}></div>
    </div>
  );
};

export default MapComponent;
