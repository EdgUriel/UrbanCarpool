import React, { useEffect } from 'react';

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
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara, México
        zoom: 12,
      });

      // Solo obtener direcciones si ambos valores están presentes
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
