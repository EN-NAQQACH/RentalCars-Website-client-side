import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import { BsWhatsapp } from "react-icons/bs";
import { BiCurrentLocation, BiLocationPlus, BiMessageDetail } from "react-icons/bi";
import { Progress } from 'antd';
import StarIcon from '@mui/icons-material/Star';
import { DatePicker, Flex, Select } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const { Option } = Select;
import '../cardeffect.css'
function CarPage() {
    const dateFormat = 'YYYY/MM/DD';
    const [value, setValue] = useState('');
    const onChange = (date, dateString) => {
        const datee = new Date();
        console.log(dateString + datee);
    };

    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };
    return (
        <div className='carpage p-0 m-0 ' >
            <div className='ml-5 rounded-[15px] bg-transparent  border-black w-fit text-black p-1 hover:bg-gray-100 hover:text-black transition-all duration-[0.3s] cursor-pointer'>
                <ArrowBackIcon />
            </div>
            <div className='carpagecontents'>
                <div className='carpagecontents1 text-white w-[70%] m-auto'>
                    <div className='save-morephotos text-black border-b-[1px] border-gray-100 pb-2'>
                        <div>
                            <p className='text-[25px] font-bold'>BMW M4 2019</p>
                        </div>
                        <div>
                            <div>
                                <FavoriteBorderIcon className='transition-all duration-100 hover:text-red-600 cursor-pointer' />
                                <p>Save</p>
                            </div>
                            <div>
                                <button className='border p-1 border-gray-500 rounded-[5px]'><CollectionsOutlinedIcon /> more photos</button>
                            </div>
                        </div>
                    </div>
                    <div className='containerr mt-4'>
                        <div className='img  h-full w-full bg-transparent' >
                            <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='img2  h-full w-full bg-transparent' >
                            <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='img3  h-full w-full bg-transparent' >
                            <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full object-cover' />
                        </div>
                    </div>
                    <div className='seo-carinfo text-black'>
                        <div className='seo-carinfo-content '>
                            <div className='seo-aside-left mt-7'>
                                <div className='text-black'>
                                    <div className='titlecar mb-5'>
                                        <p className='text-[14px]'><LocationOnIcon /> Agadir, Bensergao</p>
                                    </div>
                                    <div className='flex items-center gap-28 mt-3 rounded-lg border p-2'>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex items-center gap-3'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" class="seo-pages-0" role="img" version="1.1"><path fill="#121214" d="M19.67 21.45H7.27c-1.33 0-2.5-.85-2.91-2.1l-2.2-6.68c-.38-1.14-.05-2.4.83-3.21l6.08-5.63c.8-.75 2.28-1.33 3.38-1.33h8.92c.35 0 .62.28.62.62 0 .34-.28.62-.62.62h-8.92c-.78 0-1.96.46-2.53.99l-6.09 5.64c-.52.48-.71 1.23-.49 1.9l2.2 6.68c.25.75.94 1.25 1.72 1.25h12.4c.59 0 1.07-.48 1.07-1.07V5.51c0-.34.28-.62.62-.62.34 0 .62.28.62.62v13.61a2.3 2.3 0 0 1-2.3 2.33Z"></path><path fill="#121214" fill-rule="evenodd" d="M18.15 11.33H6.92c-.7 0-.93-.39-1-.56-.06-.17-.16-.62.35-1.1l4.27-4.03c.46-.43 1.27-.76 1.9-.76h5.71c.81 0 1.47.66 1.47 1.47v3.51c0 .81-.66 1.47-1.47 1.47Zm-10.5-1.25h10.5c.13 0 .22-.1.22-.22v-3.5c0-.12-.1-.22-.22-.22h-5.71c-.31 0-.82.2-1.04.42l-3.75 3.52Z" clip-rule="evenodd"></path><path fill="#121214" d="M17.04 13.72h1.95c.35 0 .62-.28.62-.62 0-.34-.27-.62-.62-.62h-1.95c-.34 0-.62.28-.62.62 0 .34.27.62.62.62Z"></path></svg>
                                                <p className='text-[13px] text-gray-400'>5 doors</p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                <p className='text-[13px] text-gray-400'>Automatic</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex items-center gap-2'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" class="seo-pages-0" role="img" version="1.1"><path fill="#121214" fill-rule="evenodd" d="M9.58 15.24c0 1.6 1.3 2.9 2.9 2.9a2.9 2.9 0 0 0 2.89-2.9c0-1.02-1.11-3.29-2.04-5.02-.34-.63-1.37-.63-1.71 0-.93 1.73-2.04 4-2.04 5.02Zm1.25 0c0-.52.64-2.05 1.65-3.97 1.01 1.92 1.64 3.46 1.65 3.97 0 .91-.74 1.65-1.65 1.65-.91 0-1.65-.74-1.65-1.65Z" clip-rule="evenodd"></path><path fill="#121214" fill-rule="evenodd" d="M20.95 22.35V1.62c0-.34-.27-.62-.62-.62h-4.87c-1.04 0-2.04.39-2.8 1.1a.61.61 0 0 0-.04.88c.24.25.63.27.89.03.53-.49 1.22-.76 1.95-.76h4.25V4.5H9.84c-.16 0-.32.07-.44.18L4.19 9.89c-.11.11-.18.27-.18.44v12.03c0 .34.27.62.62.62h15.7c.35 0 .63-.28.62-.63Zm-1.24-.62H5.26V10.59l4.84-4.84h9.61v15.98Z" clip-rule="evenodd"></path><path fill="#121214" d="M4.18 7.43a.63.63 0 0 0 .89-.01l1.85-1.85c.24-.24.24-.64 0-.88a.628.628 0 0 0-.88 0L4.18 6.55c-.24.24-.24.64 0 .88Z"></path></svg>                                            <p></p>
                                                <p className='text-[13px] text-gray-400'>Fuel</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" class="seo-pages-0" role="img" version="1.1"><path fill="#121214" fill-rule="evenodd" d="M14.32 5.75h1.16c.45 0 .86-.23 1.11-.6.25-.37.3-.84.13-1.25l-.35-.86a1.83 1.83 0 0 0-1.7-1.14H9.29c-.75 0-1.42.45-1.7 1.15l-.35.86c-.17.41-.12.88.13 1.25s.66.59 1.11.59h1.16v.992A3.484 3.484 0 0 0 6.34 9.6l-.89 4.85c-.08.41-.09.81-.03 1.2a2.877 2.877 0 0 0-1.92 2.7v.8c0 1.58 1.28 2.87 2.86 2.87h11.21a2.88 2.88 0 0 0 2.87-2.86v-.8c0-1.48-1.16-2.73-2.63-2.85-.28-.02-.55.17-.65.44a2.443 2.443 0 0 1-2.68 1.59l-.92-.15c-.63-.1-1.26-.13-1.88-.11-.03 0-.69.01-1.3.11l-.91.15c-.79.13-1.57-.13-2.13-.7-.25-.25-.43-.54-.55-.85a.358.358 0 0 0-.04-.11 2.51 2.51 0 0 1-.07-1.19l.89-4.86A2.24 2.24 0 0 1 9.77 8h4.39c1.08 0 2 .77 2.2 1.83l.68 3.71a.626.626 0 0 0 1.23-.23l-.68-3.71a3.484 3.484 0 0 0-3.27-2.856V5.75Zm-1.24 0h-2.2v.99h2.2v-.99Zm-3.79-2.6c-.24 0-.45.14-.54.37l-.35.86.08.12h7c.01 0 .05 0 .07-.04l-.34-.94a.577.577 0 0 0-.54-.36H9.29v-.01ZM5.81 16.84c-.62.23-1.06.83-1.06 1.51v.8c0 .89.72 1.61 1.61 1.61h11.2c.89 0 1.61-.72 1.61-1.61v-.8c0-.69-.44-1.29-1.07-1.52-.75 1.4-2.28 2.18-3.84 1.93l-.91-.15c-.54-.09-1.1-.12-1.64-.1-.01 0-.61.01-1.14.1l-.91.15c-1.2.19-2.37-.2-3.22-1.07-.26-.25-.47-.54-.63-.85Z" clip-rule="evenodd"></path><path fill="#121214" fill-rule="evenodd" d="M13.87 16.27a1.558 1.558 0 0 0 1.37-.46c.36-.37.51-.89.42-1.4l-.58-3.19a2.047 2.047 0 0 0-2.01-1.68h-2.19c-.99 0-1.83.71-2.01 1.68l-.58 3.18c-.09.51.07 1.03.43 1.4.36.37.87.54 1.39.46l1.23-.2c.4-.06.81-.06 1.21 0l1.32.21Zm-1.14-1.44a5.322 5.322 0 0 0-1.59 0l-1.23.2a.35.35 0 0 1-.3-.1.338.338 0 0 1-.09-.3l.58-3.18c.07-.38.4-.65.78-.65h2.2c.38 0 .71.27.78.65l.58 3.19c.03.15-.04.25-.09.3a.35.35 0 0 1-.3.1l-1.32-.21Z" clip-rule="evenodd"></path></svg>
                                                <p className='text-[13px] text-gray-400'>5 seates</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='seo-host-info mt-7'>
                                    <div className='seo-host-content'>
                                        <p className='text-[13px] font-bold uppercase mb-2 mt-2'>Hosted By</p>
                                        <div className='flex items-center gap-[280px] border-[1px] p-2 rounded-lg border-gray-200'>
                                            <div className='flex items-center gap-3'>
                                                <div className='seo-host-photo w-[60px] h-[60px]'>
                                                    <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full object-cover rounded-[50%]' />
                                                </div>
                                                <div className=''>
                                                    <p className='font-bold text-[13px]'>Mohssine E.</p>
                                                    <p className='text-gray-400 text-[11px]'>Joined 2024</p>
                                                </div>
                                            </div>
                                            <div className='contact-info'>
                                                <div className='flex items-center gap-3'>
                                                    <BsWhatsapp className='text-[20px] text-green-500 cursor-pointer transition-all duration-200 hover:translate-y-[-2px]' />
                                                    <BiMessageDetail className='text-[20px] text-blue-500 cursor-pointer transition-all duration-200 hover:translate-y-[-2px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='seo-car-info mt-7'>
                                    <div className='seo-car-content'>
                                        <p className='text-[13px] font-bold uppercase mb-2'>Description</p>
                                        <div className='flex items-center gap-3'>
                                            <div className='seo-description text-[13px] p-2'>
                                                <p className='description text-justify text-gray-600'>
                                                    Pick up & Delivery available
                                                    M4CS in San Marino Blue
                                                    Using this vehicle in any race, test, or competition  is prohibited and will result in consequences
                                                    Turo permits hosts to use tracking and technology devices in order to track and protect their vehicles.
                                                    The BMW M4 CS is a high-performance sports car with a powerful engine and sleek design.
                                                    Stunning color that looks amazing day and night
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='seo-car-info mt-4'>
                                    <div className='seo-car-content'>
                                        <p className='text-[13px] font-bold uppercase mb-5'>Features</p>
                                        <div className='flex flex-wrap gap-5 items-center'>

                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/steering-wheel.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.5]' id='image112' />
                                                <p className='text-[13px]'>Cruise Control</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/airbag.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Airbags</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/heat.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Leather Seats</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/location.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>GPS</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/car.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Air Conditioning</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/sun.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Sunroof</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/alloy-wheel.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Alloy Wheels</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/speedometer.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Speed Limiter</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/esp.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6] ' />
                                                <p className='text-[13px]'>ESP</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/parking.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Parking Radar</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/steering-wheel.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Onboard Computer</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/baby-car-seat.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Child seat</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/360-degree.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Rear View Camera</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/abs.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>ABS</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/window.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>Electric Windows</p>
                                            </div>
                                            <div className='seo-features flex items-center gap-3 text-[14px] rounded-md border p-2'>
                                                <img src="../../src/assets/bluetooth.png" alt="" className='object-cover h-[24px] w-[24px] opacity-[0.6]' />
                                                <p className='text-[13px]'>CD/MP3/Bluetooth</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='reviews mt-5'>
                                    <div className="reviews-content">
                                        <div className='mb-2'>
                                            <p className='text-[12px] font-semibold uppercase mb-2'>Ratings</p>
                                            <div className='mb-4'>
                                                <div className='flex items-center gap-1'>
                                                    <p className='text-[35px] font-bold'>4.0</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <p>(18 rating)</p>
                                            </div>
                                            <div className='flex gap-2 mb-2'>
                                                <div className='flex items-center'>
                                                    <p clasName="font-bold">5</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <Progress className="w-[400px]" percent={90} status="active" showInfo={false} />
                                                <p clasName="font-bold">85</p>
                                            </div>
                                            <div className='flex gap-2 mb-2'>
                                                <div className='flex items-center'>
                                                    <p clasName="font-bold">4</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <Progress className="w-[400px]" percent={70} status="active" showInfo={false} />
                                                <p clasName="font-bold">85</p>
                                            </div>
                                            <div className='flex gap-2 mb-2'>
                                                <div className='flex items-center'>
                                                    <p clasName="font-bold">3</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <Progress className="w-[400px]" percent={31} status="active" showInfo={false} />
                                                <p clasName="font-bold">85</p>
                                            </div>
                                            <div className='flex gap-2 mb-2'>
                                                <div className='flex items-center'>
                                                    <p clasName="font-bold">2</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <Progress className="w-[400px]" percent={20} status="active" showInfo={false} />
                                                <p clasName="font-bold">85</p>
                                            </div>
                                            <div className='flex gap-2 '>
                                                <div className='flex items-center'>
                                                    <p clasName="font-bold">1</p>
                                                    <StarIcon className="text-[#5c3cfc]" />
                                                </div>
                                                <Progress className="w-[400px]" percent={12} status="active" showInfo={false} />
                                                <p clasName="font-bold">85</p>
                                            </div>
                                        </div>
                                        <p className='text-[12px] text-gray-500'>Based on 17 guest ratings</p>
                                        <div className='mt-5 '>
                                            <div className='reviews-users'>
                                                <div className='content-reviews bg-white mt-5 h-[fit-content] w-[80%] '>
                                                    <div className='flex flex-col gap-7'>
                                                        <div className='flex flex-col gap-4'>
                                                            <div class="reviews flex flex-col ">
                                                                <div class="flex items-center">
                                                                    <div class="text-yellow-400 font-bold w-[40px] h-[40px] ">
                                                                        <img src=".././src/assets/carmain3.jpg" alt="" className='h-full w-full object-cover rounded-[50%]' />
                                                                    </div>
                                                                    <div className='flex flex-col ml-[10px]'>
                                                                        <div class="font-medium text-[12px]">Yousef S.</div>
                                                                        <div class="text-gray-400 text-[11px] ml-1">February 20, 2024</div>
                                                                    </div>
                                                                </div>
                                                                <div className='rating-stars mb-1'>
                                                                    <div>
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-gray-200' />
                                                                        <StarIcon className='text-gray-200' />
                                                                    </div>
                                                                </div>
                                                                <div className=''>
                                                                    <p className="text-gray-700 text-[13px]">Amazing car and great experience. Very easy pick up and drop off pick up and drop off.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-4'>
                                                            <div class="reviews flex flex-col ">
                                                                <div class="flex items-center">
                                                                    <div class="text-yellow-400 font-bold w-[40px] h-[40px] ">
                                                                        <img src=".././src/assets/carmain3.jpg" alt="" className='h-full w-full object-cover rounded-[50%]' />
                                                                    </div>
                                                                    <div className='flex flex-col ml-[10px]'>
                                                                        <div class="font-medium text-[12px]">Yousef S.</div>
                                                                        <div class="text-gray-400 text-[11px] ml-1">February 20, 2024</div>
                                                                    </div>
                                                                </div>
                                                                <div className='rating-stars mb-1'>
                                                                    <div>
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-gray-200' />
                                                                        <StarIcon className='text-gray-200' />
                                                                    </div>
                                                                </div>
                                                                <div className=''>
                                                                    <p className="text-gray-700 text-[13px]">Amazing car and great experience. Very easy pick up and drop off pick up and drop off.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-4'>
                                                            <div class="reviews flex flex-col ">
                                                                <div class="flex items-center">
                                                                    <div class="text-yellow-400 font-bold w-[40px] h-[40px] ">
                                                                        <img src=".././src/assets/carmain3.jpg" alt="" className='h-full w-full object-cover rounded-[50%]' />
                                                                    </div>
                                                                    <div className='flex flex-col ml-[10px]'>
                                                                        <div class="font-medium text-[12px]">Yousef S.</div>
                                                                        <div class="text-gray-400 text-[11px] ml-1">February 20, 2024</div>
                                                                    </div>
                                                                </div>
                                                                <div className='rating-stars mb-1'>
                                                                    <div>
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-[#5c3cfc]' />
                                                                        <StarIcon className='text-gray-200' />
                                                                        <StarIcon className='text-gray-200' />
                                                                    </div>
                                                                </div>
                                                                <div className=''>
                                                                    <p className="text-gray-700 text-[13px]">Amazing car and great experience. Very easy pick up and drop off pick up and drop off.</p>
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
                            <div className='seo-aside-right ml-5 mt-7'>
                                <div className='seo-aside-content'>
                                    <div className='seo-date-picker'>
                                        <div className='datecontent pl-7 pr-7 pt-2 pb-5 rounded-lg  border-[1px] border-gray-200'>
                                            <div className='flex flex-col gap-2'>
                                                <div className='seo-price'>
                                                    <div className='mt-2 flex justify-end'>
                                                        <p><span className='font-bold text-[23px]'>70$ </span>/ day</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='mb-2 text-[13px]'>Trip Start</p>
                                                    <div className='flex items-center gap-2'>
                                                        <DatePicker defaultValue={dayjs(formatDate(new Date()), dateFormat)} format={dateFormat} onChange={onChange} className='w-[100%] ' />
                                                        <Select placeholder="Select Time"  >
                                                            <Option required >11 pm</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='mb-2 text-[13px]'>Trip End</p>
                                                    <div className='flex items-center gap-2'>
                                                        <DatePicker defaultValue={dayjs(formatDate(new Date()), dateFormat)} format={dateFormat} onChange={onChange} className='w-[100%]' />
                                                        <Select placeholder="Select Time" >
                                                            <Option required >11 pm</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <div className='flex justify-between bg-gray-100 p-3 rounded-lg border-gray-200 border-[1px] text-[13px]'>
                                                    <p>1-week discount</p>
                                                    <p className='text-green-600'>$159</p>
                                                </div>
                                                <div className='mt-4'>
                                                    <button className='text-center bg-[#5c3cfc] p-2 w-[100%] text-white rounded-md text-[13px]'>
                                                        Reserve
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-4 mt-7 border-[1px] rounded-lg pl-5 pb-5 pt-5'>
                                            <ThumbUpOutlinedIcon className='text-[blue]' />
                                            <div>
                                                <p className='text-[14px] font-bold'>Free cancellation </p>
                                                <p className='text-[12px]'> Full refund for the next 1 hour</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-4 mt-4 border-[1px] rounded-lg pt-5 pb-5 pl-5'>
                                            <div>
                                                <p className='text-[13px] font-bold mb-1 text-gray-400'>INSURANCE & PROTECTION</p>
                                                <p className='text-[12px]'> Insurance via Travelers</p>
                                            </div>
                                        </div>
                                        <div className='mt-7'>
                                            <button className='text-center  p-2 w-[100%] rounded-lg border-[1px] border-gray-200 text-gray-800 text-[13px]'>
                                                <FavoriteBorderIcon className='transition-all duration-100 hover:text-red-600 cursor-pointer mr-3 ' />
                                                Add to favorites
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
    )
}

export default CarPage