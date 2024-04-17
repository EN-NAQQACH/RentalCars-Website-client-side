import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import { style, textAlign } from '@mui/system';
import { GiCarSeat } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
function Profile() {
    const navigate = useNavigate()
    const [loading, setloading] = useState(true);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        if(!token){
          navigate('/')
        }
        return;
      },[token])
    return (
        <>
        {!token ? <Authorisation /> : (
            <div className='h-[100%] bg-[rgba(249,248,248,255)] text-black p-6 flex justify-center '>
                    <div className='profile-section'>
                        <div className='profile-content flex gap-[50px]'>
                            <div className='side-content'>
                                <div className='container border p-5 w-[250px] flex flex-col justify-center items-center gap-2 bg-white rounded-md'>
                                    <div className='w-[80px] h-[75px] '>
                                        <img src=".././src/assets/carmainn.jpg" alt="" className='w-full h-full rounded-[50%]' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-1'>
                                        <p className='text-[18px]'>name of user</p>
                                        <p className='text-[12px]'>About</p>
                                        <div className='border border-[rgba(249,248,248,255)] w-fit  text-gray-500 text-left text-[13px] h-[fit] p-2 mt-0 mb-2' >
                                            <p>                'hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience.'
                                            </p>
                                        </div>
                                        <Link to="/profile" className='border p-2 bg-[rgba(249,248,248,255)] rounded-[5px] text-[14px]'>Profile</Link>
                                        <p>rates</p>
                                        <div>
                                            <StarIcon className='text-yellow-500' />
                                            <StarIcon className='text-yellow-500' />
                                            <StarIcon className='text-yellow-500' />
                                            <StarIcon className='text-gray-200' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='center-content'>
                                <div className='container-center '>
                                    <div className=' w-fit '>
                                        <div className='content-profile bg-white p-5  h-[fit-content] w-[550px] rounded-[5px]  grid grid-cols-2 gap-5'>
                                            <div className='cars-list  h-[320px]   rounded-[10px]'>
                                                <div className='car-img  h-[180px] w-full bg-white'>
                                                    <img src="./src/assets/carmain9.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-[10px]' />
                                                </div>
                                                <div className='car-contents mt-3 flex flex-col pl-2'>
                                                    <div>
                                                        <div>
                                                            <h1 className='text-black'>Bmw SUV</h1>
                                                            <p>car bmwx360 all</p>
                                                        </div>
                                                    </div>
                                                    <div className=' text-gray-900 border-b-[3px] border-b-slate-100 flex gap-5 pb-2 pt-2'>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <GiCarSeat />
                                                            <p className='font-bold'>5</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <BsFuelPumpFill />
                                                            <p className='font-bold'>Diesel</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <PiSteeringWheelFill />
                                                            <p className='font-bold'>Automatic</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between items-center'>
                                                        <div>
                                                            <div className='price font-bold mt-2'>
                                                                <p>50$ /Day</p>
                                                            </div>
                                                            <div className='font-bold text-gray-400'>
                                                                <p>Agadir</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button >
                                                                <ModeEditOutlineOutlinedIcon className='hover:text-green-600 cursor-pointer' />
                                                            </button>
                                                            <button>
                                                                <DeleteOutlineOutlinedIcon className='hover:text-red-600 cursor-pointer' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='cars-list  h-[320px]   rounded-[10px] '>
                                                <div className='car-img  h-[180px] w-full bg-white'>
                                                    <img src="./src/assets/carmain10.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-[10px]' />
                                                </div>
                                                <div className='car-contents mt-3 flex flex-col pl-2'>
                                                    <div>
                                                        <div>
                                                            <h1 className='text-black'>Bmw SUV</h1>
                                                            <p>car bmwx360 all</p>
                                                        </div>
                                                    </div>
                                                    <div className=' text-gray-900 border-b-[3px] border-b-slate-100 flex gap-5 pb-2 pt-2'>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <GiCarSeat />
                                                            <p className='font-bold'>5</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <BsFuelPumpFill />
                                                            <p className='font-bold'>Diesel</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <PiSteeringWheelFill />
                                                            <p className='font-bold'>Automatic</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between items-center'>
                                                        <div>
                                                            <div className='price font-bold mt-2'>
                                                                <p>50$ /Day</p>
                                                            </div>
                                                            <div className='font-bold text-gray-400'>
                                                                <p>Agadir</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button >
                                                                <ModeEditOutlineOutlinedIcon className='hover:text-green-600 cursor-pointer' />
                                                            </button>
                                                            <button>
                                                                <DeleteOutlineOutlinedIcon className='hover:text-red-600 cursor-pointer' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='cars-list  h-[320px]   rounded-[10px] '>
                                                <div className='car-img  h-[180px] w-full bg-white'>
                                                    <img src="./src/assets/carmain10.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-[10px]' />
                                                </div>
                                                <div className='car-contents mt-3 flex flex-col pl-2'>
                                                    <div>
                                                        <div>
                                                            <h1 className='text-black'>Bmw SUV</h1>
                                                            <p>car bmwx360 all</p>
                                                        </div>
                                                    </div>
                                                    <div className=' text-gray-900 border-b-[3px] border-b-slate-100 flex gap-5 pb-2 pt-2'>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <GiCarSeat />
                                                            <p className='font-bold'>5</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <BsFuelPumpFill />
                                                            <p className='font-bold'>Diesel</p>
                                                        </div>
                                                        <div className='icon flex gap-3 items-center'>
                                                            <PiSteeringWheelFill />
                                                            <p className='font-bold'>Automatic</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between items-center'>
                                                        <div>
                                                            <div className='price font-bold mt-2'>
                                                                <p>50$ /Day</p>
                                                            </div>
                                                            <div className='font-bold text-gray-400'>
                                                                <p>Agadir</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button >
                                                                <ModeEditOutlineOutlinedIcon className='hover:text-green-600 cursor-pointer' />
                                                            </button>
                                                            <button>
                                                                <DeleteOutlineOutlinedIcon className='hover:text-red-600 cursor-pointer' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )}
                
        </>

    )
}

export default Profile;