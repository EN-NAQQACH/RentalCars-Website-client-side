import React, { useEffect, useState, useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link, Outlet, useParams } from 'react-router-dom';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
import { useNavigate } from 'react-router-dom';
import { StyleContext } from '../../Stylecontext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Select, message } from 'antd';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import '../cardeffect.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const { Option } = Select;

function MyListing() {
    const [Mycars, setMyCars] = useState([]);
    const [loading, setloading] = useState(true);
    const Mycarslisting = async () => {
        try {
            setloading(true);
            const reponse = await fetch('http://localhost:5600/api/getcar', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                }
            });
            const result = await reponse.json();
            setMyCars(result);
            setloading(false);
        } catch (e) {
            console.log(e);
            setloading(false);
        }
    }
    const deleteCar = async (carId) => {
        try {
            const token = localStorage.getItem('T_ID_Auth');
            const response = await fetch(`http://localhost:5600/api/delete/car/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (result) {
                message.success(result.message)
            } else {
                message.error(result.error);
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        Mycarslisting();
    }, [])
    return (
        <div className='mylistinginfo border rounded-xl p-3 h-[100%]'>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-[18px] font-semibold text-gray-700'>My Cars</p>
                <div className='sort-component  w-[220px]'>
                    <Select className='w-[100%]' placeholder="Sort by">
                        <Option>Newest</Option>
                        <Option>Oldest</Option>
                        <Option>Highest Price</Option>
                        <Option>Lowest Price</Option>
                    </Select>
                </div>
            </div>
            <div className='cars-componentss mt-5 max-w-[100%] h-fit felx items-center '>
                {loading ?
                    (
                        <>
                            {[1, 2, 3].map((i) => (

                                <div className="car-card " key={i}>
                                    <div className='car-card-components  cursor-pointer relative w-[100%] h-fit rounded-lg skeleton' key={i}>
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
                    )

                    :
                    (
                        <>
                            {Mycars.map((car) => (
                                <div className='car-cards relative w-[100%] h-[47vh] ' key={car.id}>
                                    <div className="car-card-componentss w-[100%]  h-[100%] border rounded-lg shadow-sm">
                                        <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                        <div className='mt-2 p-2'>
                                            <div className='flex justify-between'>
                                                <div >
                                                    <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>{car.Type}</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>{car.price}{' '}DH </span>/ Day</p>
                                                </div>
                                            </div>
                                            <div className='overflow-hidden max-w-[90%]'>
                                                <p className='text-[14px] font-bold text-gray-500 truncate '>{car.make}{' '}{car.model}{' '}{car.year}</p>
                                            </div>
                                            <div className='flex gap-3 mt-2  '>
                                                <p className='flex gap-3 items-center'>
                                                    <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold truncate'>{car.carSeats} seats
                                                    </span></p>
                                                <p className='flex gap-3 items-center'>
                                                    <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>{car.transmission}
                                                    </span></p>
                                                <div className='flex gap-3 items-center'>
                                                    <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                    <p className='text-[12px] text-gray-600 font-bold'>{car.fuel}</p>
                                                </div>
                                            </div>
                                            <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                            <div>
                                            </div>
                                            <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> {car.location}, Morocco</p></div>
                                        </div>
                                    </div>
                                    <div className='contentdiv'>
                                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[red]' onClick={() => deleteCar(car.id)}><HighlightOffIcon /> Delete</button>
                                        <Link to={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`} className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[#4c4cc5]'><RemoveRedEyeIcon /> View</Link>
                                        <Link to={`edit-your-car/${car.id}`} className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[green]'><BorderColorIcon /> Edit</Link>
                                    </div>
                                </div>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default MyListing