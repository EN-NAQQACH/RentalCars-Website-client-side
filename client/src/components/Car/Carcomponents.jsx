import React, { useEffect, useState } from 'react'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Carcomponents() {
    const [Cars, setCars] = useState([])
    const getAllCars = async () => {
        try {
            const reponse = await fetch("http://localhost:5600/api/getallcars", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                }
            });
            const result = await reponse.json();
            setCars(result);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getAllCars();
    }, []);
    const handlefavoritebtn = (index) => {
        const favbtn = document.querySelector(`.btnsave2-${index} svg`);
        favbtn.style.color = "black";
    };
    return (
        <>
            {Cars.map((car,index) => (
                
                <div className='car-card cursor-pointer relative' key={car.id}>
                    <Link to={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`}>
                    <div className="car-card-components  h-fit border rounded-lg shadow-sm">
                        <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                            <div className='flex justify-between'>
                                <div >
                                    <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>{car.Type}</p>
                                    <p className='text-[14px] font-bold text-gray-500'>{car.make}{' '}{car.model}{' '}{car.year}</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>{car.price}{' '}DH  </span>/ Day</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-2  '>
                                <p className='flex gap-2 items-center'>
                                    <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>{car.carSeats} seats
                                    </span></p>
                                <p className='flex gap-2 items-center'>
                                    <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>{car.transmission}
                                    </span></p>
                                <div className='flex gap-2 items-center'>
                                    <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                    <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>{car.fuel}</p>
                                </div>
                            </div>
                            <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                            <div>
                            </div>
                            <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> {car.location}, Morocco</p></div>
                        </div>
                    </div>
                    </Link>
                    <div className='btnsave2'>
                    <button id="btnsave2" className={`btnsave2-${index}`} onClick={() => handlefavoritebtn(index)}>
                        <FavoriteOutlinedIcon />
                    </button>
                    </div>
                </div>
                
            ))}
        </>
    )
}

export default Carcomponents