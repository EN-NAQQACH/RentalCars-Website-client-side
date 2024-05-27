
import React, { useState, useEffect,useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L, { latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';


// Define custom marker icon
const blackIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [51, 51],
});

function Map3({setpositionlat,setpositionlng,positionlat,positionlang}) {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [position, setPosition] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const mapRef = useRef(null);
    console.log(positionlat,positionlang)

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
      // Enable scroll wheel zoom when map is loaded
      useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.scrollWheelZoom.enable();
        }
    }, [mapLoaded]);

    // Set map loaded state after a timeout
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMapLoaded(true);
            setPosition({
                lat:positionlat,
                lng:positionlang
            })
        }, 200);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    // Event handler for clicking on map to set position
    const LocationMarker = ({ setPosition }) => {
        const map = useMapEvents({
            click(e) {
                setPosition(e.latlng);
                setpositionlat(e.latlng.lat)
                setpositionlng(e.latlng.lng)
                map.flyTo(e.latlng, map.getZoom());
            },
        });

        return null;
    };

    // Search control component to add to the map
    const AddSearchControl = () => {
        const map = useMap();

        useEffect(() => {
            const provider = new OpenStreetMapProvider();
            const searchControl = new GeoSearchControl({
                provider: provider,
                style: 'bar',
                autoClose: true,
                autoComplete: true,
                searchLabel: 'Enter address', // Label for search input
                retainZoomLevel: false,
                animateZoom: true,
                keepResult: false,
                position: 'topleft',
            });
            map.addControl(searchControl);

            return () => map.removeControl(searchControl);
        }, [map]);

        return null;
    }; 
    //https://tile.openstreetmap.org/{z}/{x}/{y}.png
    //https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png
     return (
        <>
            <div className="map-container h-[85vh] w-full">
                {mapLoaded && (
                    <MapContainer 
                    center={userLocation}
                    zoom={13}
                    zoomControl={true}
                    scrollWheelZoom={true} // Enable scroll wheel zoom
                    className="w-full h-full"
                    
                    >
                        <TileLayer
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png?access-token=bbLAcs458SDruNl1yReWc537yPluJsmyt3z3PONUBmEm2shN7xBErBlBuJxeYBkF"
                            attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            minZoom={0}
                            maxZoom={22}
                        />
                        <LocationMarker setPosition={setPosition} />
                        {position && (
                            <Marker position={position} icon={blackIcon}>
                                <Popup>
                                    Latitude: {position.lat}, Longitude: {position.lng}
                                </Popup>
                            </Marker>
                        )}
                        <AddSearchControl />
                    </MapContainer>
                )}
                {!mapLoaded && <div className="loading-message">Loading map...</div>}
            </div>
        </>
    );
}

export default Map3;

