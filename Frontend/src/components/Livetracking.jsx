import React, { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);
    const [location, setLocation] = useState({ latitude: 37.7749, longitude: -122.4194 }); // San Francisco, CA
    const [error, setError] = useState('')


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        navigator.geolocation.watchPosition(
            (position) => {
              console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              setError(null);
            },
            (err) => setError(err.message),
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
          );
          
        

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (
        <LoadScript googleMapsApiKey='AIzaSyCut0E1UfUraCTaQ_Hje9uSRAs9GZOxFyw'>
            {location.latitude && location.longitude ? (
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={location.latitude && location.longitude ? {
              lat: location.latitude,
              lng: location.longitude,
            } : { lat: 0, lng: 0 }} // Default to (0,0) if location is unavailable
            zoom={15}
          >
            {location.latitude && location.longitude && (
              <Marker position={{ lat: location.latitude, lng: location.longitude }} />
            )}
          </GoogleMap>
          
            ) : (
            <p>Loading your location...</p>
            )
        }

        </LoadScript>
    )
}

export default LiveTracking