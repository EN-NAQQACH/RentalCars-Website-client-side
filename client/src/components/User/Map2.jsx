import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { message } from 'antd';
const blackIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [51, 51],
});
function Map2({ lat, lng, cars }) {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [position, setPosition] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    console.log(lat, lng)
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
                lat: lat,
                lng: lng
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
                                <Popup >
                                    <div className='favorites-componentss w-[100%] h-fit felx items-center '>
                                        {cars.map((car) => (

                                            <div className='favorites-cards  w-[100%] h-[100%] ' key={car.id}>
                                                <a href={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`}>
                                                    <div className="favorites-card-componentss w-[100%]  h-fit  rounded-lg shadow-sm">
                                                        <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                                        <div className=''>
                                                            <div className='text-[12px] text-[#937eff] border-t-[1px] pt-1 pb-1 font-semibold'><p><LocationOnIcon /> {car.location}, Morocco</p></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            
                                            </div>


                                        ))}
                                    </div>
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