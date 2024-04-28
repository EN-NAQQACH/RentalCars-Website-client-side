import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
import { useNavigate } from 'react-router-dom';
import { StyleContext } from '../../Stylecontext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Select } from 'antd';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import '../cardeffect.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountuserListing from './AccountuserListing';

function AccounttoUser() {
    return (
        <>
            <div className=' text-black mb-[20px]' >
                <div className='profile-section ml-[80px] mt-[20px]  mr-[80px]'>
                    <div className="asideprofile h-[100%] border rounded-xl">
                        <div className='aside-content p-4 pt-2'>
                            <div className='image h-[150px] flex justify-center m-auto flex-col items-center '>
                                <img src='/carmain9.jpg' alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%]' />
                                <div className='mt-2'>
                                    <StarIcon className='text-[#9e8df1]' />
                                    <StarIcon className='text-[#9e8df1]' />
                                    <StarIcon className='text-[#9e8df1]' />
                                    <StarIcon className='text-[#9e8df1]' />
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-2 justify-between items-center mb-4'>
                                    <p className='font-semibold text-[17px] text-gray-800'>Mohssine En-naqqach</p>
                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='text-[14px] text-gray-500 font-bold'>Email</label>
                                        <input type="text" value="mohssine@gmail.com" className='text-[14px] text-gray-700 font-semibold' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='text-[14px] text-gray-500 font-bold'>City</label>
                                        <input type="text" value="Agadir" className='text-[14px] text-gray-700 font-semibold' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='text-[14px] text-gray-500 font-bold'>Number of listing</label>
                                        <input type="text" value="(54)" className='text-[14px] text-gray-700 font-semibold' />
                                    </div>
                                    <div>
                                        <button className='text-white bg-green-500 text-center flex justify-center p-2 rounded-[50%]'><WhatsAppIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main h-[100%] ">
                        <div className='main-content h-[100%]' id>
                            <div className='myfavoritiesinfo border rounded-xl p-3 h-[100%]'>
                                <div className='flex justify-between items-center mb-3'>
                                    <p className='text-[18px] font-semibold text-gray-700'>Mohssine’s VEHICLES</p>
                                </div>
                                <AccountuserListing />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AccounttoUser