import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
const blackIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [51, 51],
  });
function Map2({lat,lng}) {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [position, setPosition] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    console.log(lat,lng)
    useEffect(() => {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    }, []);


    // Set map loaded state after a timeout
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMapLoaded(true);
            setPosition({
                lat:lat,
                lng:lng
            })
        }, 200);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    //https://tile.openstreetmap.org/{z}/{x}/{y}.png
    //https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
     return (
        <>
            <div className="map-container h-[85vh] w-full">
                {mapLoaded && (
                    <MapContainer 
                    center={position}
                    zoom={15}
                    zoomControl={true}
                    scrollWheelZoom={false} // Enable scroll wheel zoom
                    className="w-full h-full"
                    
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png?access-token=bbLAcs458SDruNl1yReWc537yPluJsmyt3z3PONUBmEm2shN7xBErBlBuJxeYBkF"
                            attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            minZoom={0}
                            maxZoom={22}
                        />
                        {position && (
                            <Marker position={position} icon={blackIcon}>
                                <Popup>
                                    Latitude: {position.lat}, Longitude: {position.lng}
                                </Popup>
                            </Marker>
                        )}
                        
                    </MapContainer>
                )}
                {!mapLoaded && <div className="loading-message">Loading map...</div>}
            </div>
        </>
    );
}

export default Map2