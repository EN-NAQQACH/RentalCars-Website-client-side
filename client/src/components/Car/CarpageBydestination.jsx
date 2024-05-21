import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DatePicker, Space,message } from 'antd';
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
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const disabledDate = (current) => {
    // Disable dates before the current day
    return current && current < dayjs().startOf('day');
};

function CarpageBydestination() {


    const navigate = useNavigate();
    const dateFormat = 'YYYY/MM/DD';
    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };
    const { destination } = useParams();
    const [slidePreviews, setSlidepreviews] = useState();
    const onchange = (dates, dateString) => {
        setDateRange(dates)
        const startDateString = String(dateString[0]);
        const endDateString = String(dateString[1]);
        setstartdate(dayjs(startDateString).format('YYYY-MM-DD'))
        setenddate(dayjs(endDateString).format('YYYY-MM-DD'))
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const differenceInMilliseconds = endDate - startDate;
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        console.log('Difference in days:', differenceInDays);
        setdays(differenceInDays)
    }
    const [cars, setCars] = useState([]);
    const getAllCars = async () => {
        try {
            const token = localStorage.getItem('T_ID_Auth');
            const response = await fetch(token ? `https://easlycars-server.vercel.app/api/getallcarsbydestination?destination=${destination}` : `https://easlycars-server.vercel.app/api/getallcarsbydestinationunauth?destination=${destination}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            });
            const result = await response.json();
            if (result) {
                setCars(result);
                setSlidepreviews(cars.length);
            }
        } catch (error) {
            console.log(error);
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
    }, [])


    const [location, setlocation] = useState(destination);
    const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [days,setdays] = useState();

    const handleSearch = () => {
        if (!startdate || !enddate || !location.trim()) {
            message.error(' location or date is missed');
            return;
        }
        if (location.trim() && dateRange && dateRange[0] && dateRange[1]) {
            localStorage.setItem('lastquerySearch', JSON.stringify(lastquerySearch));
            navigate(`/carhome/search?where=${location}&startdate=${startdate}&enddate=${enddate}&days=${days}`);
        }
    };
    const lastquerySearch = {
        location: location,
        startdate: startdate,
        enddate: enddate,
        days: days
    }
    return (
        <div>
            {cars.length > 0 ?
                <div className='max-w-[70%] m-auto border-t-[1px] '>
                    <div className='flex flex-col gap-5 mt-[80px]'>
                        <div>
                            <p className='font-bold text-center text-[20px]'>Discover the EaslyCars car rental marketplace</p>
                        </div>
                        <div>
                            <p className='font-bold text-center text-[35px]' style={{ fontFamily: "Playfair Display" }}>Rent a {destination}</p>
                        </div>
                        <div>
                            <div className='location-section w-[100%]  mb-7 ml-2'>
                                <div className='location-content-section-carhome gap-2 rounded-[30px]  border-gray-100 border-[0.2px] shadow-sm w-fit  pl-3 pr-3 pt-1 pb-1'>
                                    <div className='border-r-[1px] pr-5'>
                                        <label htmlFor="" className='pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                                        <input type="text" className='border-none w-[100%] h-[20px] rounded-[2px]  pl-2 text-[13px]' placeholder='Enter Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col justify-center '>
                                        <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Check in-out</label>
                                        <div className='flex items-center w-[100%]'>
                                            <Space direction="vertical" size={12}>
                                                <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} />
                                            </Space>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center  rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer bg-[#7357ff] hover:bg-[#5c3cfc] m-auto'>
                                        <button onClick={handleSearch}><SearchIcon className='text-white' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cars.length > 3 &&
                        <div className='flex justify-end gap-4 w-[80%] m-auto'>
                            <KeyboardDoubleArrowLeftIcon className='prevbtncity hover:bg-gray-200 hover:rounded-[50%] ' />
                            <KeyboardDoubleArrowRightIcon className='nextbtncity hover:bg-gray-200 hover:rounded-[50%] ' />
                        </div>
                    }

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
                            {cars.map((car) => (
                                <SwiperSlide className='card w-[300px] h-[fit]' >
                                    <div className='car-card cursor-pointer relative w-[100%] h-fit rounded-lg  ' key={car.id}>
                                        <Link to={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`}>
                                            <div className="car-card-components w-[100%]  h-[fit] border rounded-lg shadow-sm">
                                                <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover transition-all duration-300 hover:transition-all hover:duration-300 hover:brightness-[90%]' />
                                                <div className='mt-2 p-2'>
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>{car.Type}</p>
                                                        </div>
                                                        <div>
                                                            <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold  text-[15px] text-[#937eff]'>{car.price}{' '}DH  </span>/ Day</p>
                                                        </div>
                                                    </div>
                                                    <div className='overflow-hidden max-w-[90%]'>
                                                        <p className='text-[14px] font-bold text-gray-500 truncate '>{car.make}{' '}{car.model}{' '}{car.year}</p>
                                                    </div>                                <div className='flex gap-3 mt-2  '>
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
                                                    <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                                                    <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold truncate'><p><LocationOnIcon /> {car.location}, Morocco</p></div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className={car.isSaved ? 'btnsave3' : 'btnsave2'} key={car.id}>
                                            <button id="btnsave2" onClick={() => favoriteCar(car.id)}>
                                                {car.isSaved ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                        <Link to={`/carhome/search?where=${location}`} className='text-center flex justify-center m-auto rounded-md mt-8 border w-fit p-2 font-semibold text-[14px] text-white bg-[#5c3cfc] hover:bg-[#3d2b97]'>Rent in {destination}</Link>
                    </div>
                </div>
                : <div className='h-lvh justify-center flex items-center flex-col'>
                    <img src="./Nocars.png" alt="" />
                    <p className='font-bold text-[30px] text-center '>There is no Cars yet</p>
                </div>}
        </div>
    )
}

export default CarpageBydestination