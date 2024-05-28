import React, { useEffect, useState } from 'react';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { message } from 'antd';

function Carcomponents({ days, location, sort, type, minprice, maxprice, transmission, make, features, seats, fueltype, startDate, endDate }) {
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const [index, setindex] = useState([])

    const getAllCars = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('T_ID_Auth');
            const queryParams = new URLSearchParams({
                days: days || '',
                location: location || '',
                sort: sort || '',
                type: type || '',
                minprice: minprice || '',
                maxprice: maxprice || '',
                transmission: transmission || '',
                make: make || '',
                features: features || '',
                seats: seats || '',
                fueltype: fueltype || '',
                startDate: startDate || '',
                endDate: endDate || '',
            });
            const response = await fetch(token ? `https://easlycars-server.vercel.app/api/getallcars?${queryParams}` : `https://easlycars-server.vercel.app/api/getallcarsunauth?${queryParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            });
            const result = await response.json();
            setCars(result);
            setindex(Array.from({ length: result.length }, (_, i) => i + 1));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    const favoriteCar = async (id) => {
        try {
            const token = localStorage.getItem('T_ID_Auth');
            const response = await fetch(`https://easlycars-server.vercel.app/api/save/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            });

            if (response.ok) {
                const result = await response.json();
                // Update cars state to reflect the saved status
                const updatedCars = cars.map(car => {
                    if (car.id === id) {
                        return {
                            ...car,
                            isSaved: !car.isSaved, // Toggle saved status
                        };
                    }
                    return car;
                });
                setCars(updatedCars);
                message.success(result.message);
            } else {
                const errorMessage = await response.json();
                message.error(errorMessage.error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCars();
        setLoading(true)
    }, [days, location, sort, type, minprice, maxprice, transmission, make, features, seats, fueltype, startDate, endDate]);

    return (
        <>
            {loading ? ( // Display loading indicator if loading is true
                <>

                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div className="car-card ">
                            <div className='car-card-components  cursor-pointer relative w-[100%] h-fit rounded-lg skeleton' key={index}>
                                <div className="skeleton-image h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg bg-gray-200 animate-pulse" />
                                <div className="skeleton-details p-2">
                                    <div className="skeleton-line w-[70%] h-[14px] mb-1 bg-gray-300 animate-pulse rounded-md" />
                                    <div className="skeleton-line w-[40%] h-[12px] mb-1 bg-gray-300 animate-pulse rounded-md" />
                                    <div className="skeleton-line w-[90%] h-[12px] mb-1 bg-gray-300 animate-pulse rounded-md" />
                                    <div className="skeleton-line w-[80%] h-[12px] mb-1 bg-gray-300 animate-pulse rounded-md" />
                                    <div className="skeleton-line w-[60%] h-[12px] mb-1 bg-gray-300 animate-pulse rounded-md" />

                                </div>
                            </div>
                        </div>

                    ))}
                </>

            ) :
                (
                    <>
                        {cars.length > 0 ? (
                            cars.map((car) => (
                                <div className='scroll-smooth car-card cursor-pointer relative w-[100%] h-fit rounded-lg  ' key={car.id}>
                                    <a href={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`}>
                                        <div className="car-card-components w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                            <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%]  rounded-tr-lg rounded-tl-lg object-cover transition-all duration-300 hover:transition-all hover:duration-300 hover:brightness-[90%]' />
                                            <div className='mt-2 p-2'>
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>{car.Type}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[15px] text-[#937eff]'>{car.price}{' '}DH  </span>/ Day</p>
                                                    </div>
                                                </div>
                                                <div className='overflow-hidden max-w-[90%]'>
                                                    <p className='text-[14px] font-bold text-gray-500 truncate '>{car.make}{' '}{car.model}{' '}{car.year}</p>
                                                </div>                                
                                                <div className='flex gap-[5px] mt-[5px]  '>
                                                    <p className='flex gap-2 items-center'>
                                                        <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md truncate'>{car.carSeats} seats
                                                        </span></p>
                                                    <p className='flex gap-2 items-center'>
                                                        <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>{car.transmission}
                                                        </span></p>
                                                    <div className='flex gap-2 items-center'>
                                                        <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fillRule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clipRule="evenodd"></path></svg>
                                                        <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>{car.fuel}</p>
                                                    </div>
                                                </div>
                                                <p className='mt-[2px] flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                                <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold truncate'><p><LocationOnIcon /> {car.location}, Morocco</p></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className={car.isSaved ? 'btnsave3' : 'btnsave2'} key={car.id}>
                                        <button id="btnsave2" onClick={() => favoriteCar(car.id)}>
                                            {car.isSaved ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : <div className='col-start-1 col-end-4 h-[50vh] justify-center flex items-center flex-col m-auto'>
                            <img src="/Nocars.png" alt="" />
                            <p className='font-bold text-[20px] text-center '>There is no Cars yet</p>
                        </div>}
                    </>
                )}
        </>
    );
}

export default Carcomponents;
