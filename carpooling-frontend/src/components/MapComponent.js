import React, { useEffect } from 'react';
import axios from 'axios'; // Utilizaremos axios para las peticiones HTTP

const MapComponent = ({ origin, destination }) => {
  useEffect(() => {
    // Cargar el script de Google Maps API cuando el componente se monta
    const script = document.createElement('script');
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Accede a la clave de la variable de entorno
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Definir la función de inicialización del mapa
    window.initMap = async () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara, México
        zoom: 12,
      });

      // Solo obtener direcciones si ambos valores están presentes
      if (origin && destination) {
        try {
          // Hacemos una petición al backend para obtener las direcciones
          const response = await axios.get(`http://localhost:8080/api/maps/directions`, {
            params: { origin, destination },
          });

          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map);

          const result = response.data;

          const routeRequest = {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          };

          // Renderizar las direcciones en el mapa
          directionsService.route(routeRequest, (res, status) => {
            if (status === 'OK') {
              directionsRenderer.setDirections(res);
            } else {
              console.error('Error al renderizar las direcciones:', status);
            }
          });
        } catch (error) {
          console.error('Error al obtener las direcciones del backend:', error);
        }
      }
    };

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, [origin, destination]); // Dependencias para que se vuelva a cargar el mapa al cambiar

  return (
    <div>
      {/* Div donde se renderiza el mapa */}
      <div id="map" style={{ height: '800px', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;
