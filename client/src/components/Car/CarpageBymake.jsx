import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { DatePicker, Space, message } from 'antd';
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
import ClipLoader from "react-spinners/ClipLoader";

const { RangePicker } = DatePicker;
const disabledDate = (current) => {
    // Disable dates before the current day
    return current && current < dayjs().startOf('day');
};

function CarpageBymake() {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const dateFormat = 'YYYY/MM/DD';
    const { make } = useParams();
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
            setloading(true)
            const token = localStorage.getItem('T_ID_Auth');
            const response = await fetch(token ? `https://easlycars-server.vercel.app/api/getallcarsbymake?make=${make}` : `https://easlycars-server.vercel.app/api/getallcarsbymakeunauth?make=${make}`, {
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
                setloading(false)
            }
        } catch (error) {
            console.log(error);
            setloading(false)
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
        setloading(true);
    }, [])
    const [location, setlocation] = useState('');
    const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [days, setdays] = useState();

    const handleSearch = () => {
        if (!startdate || !enddate || !location.trim()) {
            message.error(' location or date is missed');
            return;
        }
        if (location.trim() && dateRange && dateRange[0] && dateRange[1]) {
            localStorage.setItem('lastquerySearch', JSON.stringify(lastquerySearch));
            navigate(`/carhome/search?where=${location}&startdate=${startdate}&enddate=${enddate}&days=${days}&make=${make}`);
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
            {loading ? (<>

                <div className='flex justify-center h-[370px] items-center '>
                    <ClipLoader
                        color="#5c3cfc"
                        size={35}
                        speedMultiplier={0.3}

                    />
                </div>

            </>) : (<>

                {cars.length > 0 ?
                    <div className='scroll-smooth max-w-[70%] m-auto border-t-[1px] '>
                        <div className=' flex flex-col gap-5 mt-[80px]'>
                            <div>
                                <p className='font-bold text-[20px] text-center'>Discover the EaslyCars car rental marketplace</p>
                            </div>
                            <div>
                                <p className='font-bold text-[35px] text-center' style={{ fontFamily: "Playfair Display" }}>Rent a {make}</p>
                            </div>
                            <div>
                                <div className='  w-[100%]   max-[980px]:bottom-[40%] bottom-[60%] tr z-[15] mb-7  mt-5 '>
                                    <div className='max-[980px]:flex max-[980px]:flex-col max-[980px]:gap-2 max-[980px]:w-[100%] max-[980px]:rounded-[5px]  gap-2 rounded-[30px] bg-[white]  shadow-lg w-[auto%] p-[5px] pl-2 pr-2 flex m-auto'>
                                        <div className='border-r-[1px] max-[980px]:border-b-[1px] max-[980px]:border-r-[0px] w-[100%]'>
                                            <label htmlFor="" className='min-[980px]:pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                                            <input type="text" className='border-none w-[100%] max-[980px]:mt-1 max-[980px]:mb-2 h-[20px] rounded-[7px] pl-2 text-[13px] bg-transparent text-black outline-none' placeholder='Enter Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                                        </div>
                                        <div className='flex flex-col justify-center border-r-[1px] max-[980px]:border-b-[1px] max-[980px]:border-r-[0px] w-[100%] '>
                                            <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Pick up / Drop off</label>
                                            <div className='flex items-center justify-between w-[100%] '>
                                                <Space direction="vertical" size={12} className='bg-transparent'>
                                                    <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} className='bg-transparent text-black max-[980px]:mt-1 max-[980px]:mb-2 ' />
                                                </Space>
                                            </div>
                                        </div>
                                        <div className='w-[25%] flex items-center justify-center'>
                                            <div className='flex items-center justify-center max-[980px]:rounded-[0px] max-[980px]:w-[100%] rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer max-[980px]:bg-[#1a133f] bg-[#612e2e] hover:bg-[#1a133f] m-auto'>
                                                <button onClick={handleSearch}><SearchIcon className='text-white' /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {cars?.length > 3 &&
                            <div className='flex justify-end gap-4 w-[80%] m-auto'>
                                <KeyboardDoubleArrowLeftIcon className='prevbtncity hover:bg-gray-200 hover:rounded-[50%] ' />
                                <KeyboardDoubleArrowRightIcon className='nextbtncity hover:bg-gray-200 hover:rounded-[50%] ' />
                            </div>
                        }

                        <div className='carsBymake w-[100%] m-auto h-lvh'>

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

                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    600: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    530: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    500: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    400: {
                                        slidesPerView: 1,
                                        spaceBetween: 201
                                    },
                                    300: {
                                        slidesPerView: 1,
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
                                                        </div>                                <div className='flex gap-2 mt-2 flex-wrap max-w-[280px] '>
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

                            <Link to={`/carhome/search?make=${make}`} className='text-center flex justify-center m-auto rounded-md mt-8 border w-fit p-2 font-semibold text-[14px] text-white bg-[#5c3cfc] hover:bg-[#3d2b97]'>Rent By {make}</Link>
                        </div>
                    </div>
                    : <div className='h-lvh justify-center flex items-center flex-col'>
                        <img src="/Nocars.png" alt="" />
                        <p className='font-bold text-[20px] text-center '>There is no Cars yet</p>
                    </div>}


            </>)}

        </div>
    )
}

export default CarpageBymake