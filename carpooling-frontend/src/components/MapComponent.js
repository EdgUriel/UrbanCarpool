import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 20.6597,
  lng: -103.3496,
};

const MapComponent = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchDirections = async () => {
      if (origin && destination) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/maps/directions`,
            {
              params: { origin, destination },
            }
          );

          if (response.status === 200) {
            const directionsService =
              new window.google.maps.DirectionsService();

            directionsService.route(
              {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true, // Asegúrate de incluir esto
              },
              (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                  setDirections(result);
                } else {
                  console.error("Error fetching directions:", status);
                }
              }
            );
          } else {
            console.error(
              "Error al obtener las direcciones del backend:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error al obtener las direcciones del backend:", error);
        }
      }
    };

    fetchDirections();
  }, [origin, destination]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        onLoad={(map) => (mapRef.current = map)}
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {directions &&
          directions.routes.map((route, index) => (
            <DirectionsRenderer
              key={index}
              directions={{
                ...directions,
                routes: [route],
              }}
              options={{
                polylineOptions: {
                  strokeColor: index === 0 ? "blue" : "gray", // Diferenciar rutas
                },
              }}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
