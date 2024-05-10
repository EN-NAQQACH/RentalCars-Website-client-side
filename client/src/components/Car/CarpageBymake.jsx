import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import SearchIcon from '@mui/icons-material/Search';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const { RangePicker } = DatePicker;
const disabledDate = (current) => {
    return current && current < dayjs().endOf('day');
};

function CarpageBymake() {
    const dateFormat = 'YYYY/MM/DD';
    const { make } = useParams();
    const onchange = (date, dateString) => {
        console.log(dateString[0], dateString[1]);
    }
    return (
        <div>
            <div className='max-w-[70%] m-auto border-t-[1px] '>
                <div className='text-center flex flex-col gap-5 mt-[80px]'>
                    <div>
                        <p className='font-bold text-[20px]'>Discover the EaslyCars car rental marketplace</p>
                    </div>
                    <div>
                        <p className='font-bold text-[35px]' style={{ fontFamily: "Playfair Display" }}>Rent a {make}</p>
                    </div>
                    <div>
                        <div className='location-section w-[100%]  mb-7 ml-2 '>
                            <div className='location-content-section-carhome gap-2 rounded-[30px] h-fit border-gray-100 border-[0.2px] shadow-md w-fit p-3'>
                                <div className='border-r-[1px]'>
                                    <label htmlFor="" className='pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                                    <input type="text" className='border-none w-[100%] h-[20px] rounded-[7px] pl-2 text-[13px]' placeholder='Enter Location' />
                                </div>
                                <div className='flex flex-col justify-center border-r-[1px]'>
                                    <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Check in-out</label>
                                    <div className='flex items-center w-[100%]'>
                                        <Space direction="vertical" size={12}>
                                            <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} />
                                        </Space>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center  rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer bg-[#7357ff] hover:bg-[#5c3cfc] m-auto'>
                                    <SearchIcon className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 w-[80%] m-auto'>
                    <KeyboardDoubleArrowLeftIcon className='prevbtncity' />
                    <KeyboardDoubleArrowRightIcon className='nextbtncity' />
                </div>
                <div className='carsBymake max-w-[90%] m-auto h-lvh'>
                    {/* <Link >
                            <div className="car-card-components w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                <img src='/carmain9.jpg' alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                <div className='mt-2 p-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>200 {' '}DH  </span>/ Day</p>
                                        </div>
                                    </div>
                                    <p className='text-[14px] font-bold text-gray-500'>BMW X5 2023</p>
                                    <div className='flex gap-3 mt-2  '>
                                        <p className='flex gap-2 items-center'>
                                            <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>5 seats
                                            </span></p>
                                        <p className='flex gap-2 items-center'>
                                            <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>automatic
                                            </span></p>
                                        <div className='flex gap-2 items-center'>
                                            <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fillRule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clipRule="evenodd"></path></svg>
                                            <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>desiel</p>
                                        </div>
                                    </div>
                                    <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                    <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                </div>
                            </div>
                        </Link> */}
                    {/* <div className={car.isSaved ? 'btnsave3' : 'btnsave2'} key={car.id}>
                        <button id="btnsave2" onClick={() => favoriteCar(car.id)}>
                            {car.isSaved ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        </button>
                    </div> */}
                    {/* <Link >
                            <div className="car-card-components w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                <img src='/carmain9.jpg' alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                <div className='mt-2 p-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>200 {' '}DH  </span>/ Day</p>
                                        </div>
                                    </div>
                                    <p className='text-[14px] font-bold text-gray-500'>BMW X5 2023</p>
                                    <div className='flex gap-3 mt-2  '>
                                        <p className='flex gap-2 items-center'>
                                            <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>5 seats
                                            </span></p>
                                        <p className='flex gap-2 items-center'>
                                            <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>automatic
                                            </span></p>
                                        <div className='flex gap-2 items-center'>
                                            <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fillRule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clipRule="evenodd"></path></svg>
                                            <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>desiel</p>
                                        </div>
                                    </div>
                                    <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                    <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                </div>
                            </div>
                        </Link>
                        <Link >
                            <div className="car-card-components w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                <img src='/carmain9.jpg' alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                <div className='mt-2 p-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>200 {' '}DH  </span>/ Day</p>
                                        </div>
                                    </div>
                                    <p className='text-[14px] font-bold text-gray-500'>BMW X5 2023</p>
                                    <div className='flex gap-3 mt-2  '>
                                        <p className='flex gap-2 items-center'>
                                            <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>5 seats
                                            </span></p>
                                        <p className='flex gap-2 items-center'>
                                            <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>automatic
                                            </span></p>
                                        <div className='flex gap-2 items-center'>
                                            <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fillRule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clipRule="evenodd"></path></svg>
                                            <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>desiel</p>
                                        </div>
                                    </div>
                                    <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                    <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                </div>
                            </div>
                        </Link> */}
                    <Swiper
                        navigation={{
                            nextEl: ".nextbtncity",
                            prevEl: ".prevbtncity",

                        }}
                        mousewheel={true}
                        pagination={false}
                        spaceBetween={30} // Space between slides in pixels
                        slidesPerView={3} // Number of slides per view (visible slides)
                        direction={'horizontal'}


                        freeMode={true}
                        scrollbar={true}

                        breakpoints={{ // Breakpoints for responsive design
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            530: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            500: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        modules={[Pagination, Navigation, FreeMode, Scrollbar, Mousewheel]}
                        className="mySwiper mt-9 "

                    >
                        <SwiperSlide className='card w-[300px] h-[fit]' >
                            <Link >
                                <div className="car-card-components relative relative w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                    <img src='/carmain9.jpg' alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                    <div className='mt-2 p-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>200 {' '}DH  </span>/ Day</p>
                                            </div>
                                        </div>
                                        <p className='text-[14px] font-bold text-gray-500'>BMW X5 2023</p>
                                        <div className='flex gap-3 mt-2  '>
                                            <p className='flex gap-2 items-center'>
                                                <AirlineSeatReclineNormalIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>5 seats
                                                </span></p>
                                            <p className='flex gap-2 items-center'>
                                                <LocalGasStationIcon /><span className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>automatic
                                                </span></p>
                                            <div className='flex gap-2 items-center'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fillRule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clipRule="evenodd"></path></svg>
                                                <p className='text-[11px] text-gray-600 font-bold bg-gray-200 pl-1 pr-1 rounded-md'>desiel</p>
                                            </div>
                                        </div>
                                        <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                        <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                    </div>
                                </div>
                                <div className='btnsave'>
                                    <button id='btnsave2' >
                                        <FavoriteOutlinedIcon />
                                    </button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    <Link className='text-center flex justify-center m-auto rounded-md mt-8 border w-fit p-2 font-semibold text-[14px] text-white bg-[#5c3cfc] hover:bg-[#3d2b97]'>See more about {make}</Link>
                </div>
            </div>
        </div>
    )
}

export default CarpageBymake