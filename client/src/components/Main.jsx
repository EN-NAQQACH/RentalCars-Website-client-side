import React from 'react'
import { useState, useContext } from 'react'
import { Radio, Select, Rate, Flex, message } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import { StyleContext } from '../Stylecontext'; // Import StyleContext as a named export
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './cardeffect.css';

import { GiCarSeat } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled, { keyframes, css } from "styled-components";
import datacarsslider from '../data/slidercar.json'
import cities from '../data/cities.json'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space,Button } from 'antd';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const disabledDate = (current) => {
    // Disable dates before the current day
    return current && current < dayjs().startOf('day');
};
import { useNavigate } from 'react-router-dom';


function Main() {
    const [email,setemail]= useState('');
    const [loading,setloading] = useState(false)
    const style = useContext(StyleContext);
    const swipper = useSwiper();
    const [city, setcity] = useState('Agadir');
    const [selectedDestination, setSelectedDestination] = useState('');
    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
        setcity(destination);
    };
    const sliderLeft = () => {
        const slider = document.getElementById('scrollbareffect');
        slider.scrollLeft -= 500;
    }
    const sliderRight = () => {
        const slider = document.getElementById('scrollbareffect');
        slider.scrollLeft += 500;
    }
    const row1 = [
        "https://i.ibb.co/SRTM1rk/Dacia-logo-2008-640x550-removebg-preview.png",
        "https://i.ibb.co/Byw7HbZ/Land-Rover-logo-2011-640x335-removebg-preview.png",
        "https://i.ibb.co/mCysbFy/audi-logo-2016-640.png",
        "https://i.ibb.co/TbDpFfk/Kia-logo-640x321-removebg-preview.png",
        "https://i.ibb.co/23b4PX9/bmw-logo-2020-gray.png",
        "https://i.ibb.co/54ydBJK/Oin-j-QW4-RYuzgpg80-NGr9w-1500x844.png",
    ];

    const row2 = [
        "https://i.ibb.co/vJyDpd8/hyundai-logo-2011-640.png",
        "https://i.ibb.co/YbNXvMn/honda-logo-2000-full-640.png",
        "https://i.ibb.co/kcPJ3Z0/Mercedes-Benz-logo-2011-640x369-removebg-preview.png",
        "https://i.ibb.co/TWhmdpD/Skoda-logo-2016-640x550-removebg-preview.png",
        "https://i.ibb.co/khSwjy5/Volkswagen-logo-2019-640x500-removebg-preview.png",
        "https://i.ibb.co/mtGMm9G/Peugeot-logo-2010-640x451-removebg-preview.png",
    ];

    const [location, setlocation] = useState('');
    const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [days, setdays] = useState();

    const handleSearch = () => {
        if (!startdate || !enddate || !location) {
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
    const dateFormat = 'YYYY/MM/DD';
    const navigate = useNavigate();
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

    const handleSubmit = async ()=>{
        try {
            setloading(true);
            const res = await fetch('http://localhost:5600/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            if (res.ok) {
                setloading(false);
                setemail('');
                message.success(data.message);
            } else {
                setloading(false);
                message.error(data.error);
            }
        } catch (error) {
            console.log(e)
        }
    }

    return (
        <>
            <main >

                <section className='find-your-car-section '>
                    <div className='flex justify-center items-center h-lvh mb-[90px] relative' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing }}>
                        <div className='location-section  w-[100%]  absolute  bottom-[60%] tr z-[15] mb-7 ml-2 mt-5 '>
                            <div className='location-content-section-carhome  gap-2 rounded-[30px] bg-[white]  shadow-lg w-fit p-[4px] pl-2 pr-2'>
                                <div className='border-r-[1px] '>
                                    <label htmlFor="" className='pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                                    <input type="text" className='border-none w-[100%] h-[20px] rounded-[7px] pl-2 text-[13px] bg-transparent text-black outline-none' placeholder='Enter Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                                </div>
                                <div className='flex flex-col justify-center border-r-[1px]'>
                                    <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Check in-out</label>
                                    <div className='flex items-center w-[100%] '>
                                        <Space direction="vertical" size={12} className='bg-transparent'>
                                            <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} className='bg-transparent text-black' />
                                        </Space>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center  rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer bg-[#612e2e] hover:bg-[#1a133f] m-auto'>
                                    <button onClick={handleSearch}><SearchIcon className='text-white' /></button>
                                </div>
                            </div>
                        </div>
                        <div className=' relative h-[100vh] w-[full] mt-[50px]  m-auto mr-[60px] ml-[60px]  '>
                            <img src="src/assets/carmain50.jpg" alt="Description" className=" object-cover w-full h-full rounded-[10px] " />
                            <button className=' border-[2px]  p-2 absolute bottom-[50px] left-[50px] pl-8 pr-8 bg-transparent transition duration-500 hover:bg-white hover:text-black text-white'>
                                <a href="/carhome">Explore our Cars</a>
                            </button>
                        </div>
                    </div>
                </section>

                <section id='explore' className='cars-slider h-fit mb-[50px] mr-[25px] ml-[25px]'>
                    <div className='car-slider-content p-3 ' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col items-center mb-[20px]'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Explore By make</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                    </div>
                        <div className='cslider mt-[20px] relative mr-[25px] ml-[25px]'>
                            <div className='flex gap-2 absolute right-0 z-[15] top-[-50px]'>
                                <button className='review-swiper-button-prev border-transparent  rounded-full  pt-1 pb-1 pr-2 pl-2 bg-gray-100 hover:bg-gray-200 hover:rounded-[50%] ' ><ChevronLeftIcon /></button>
                                <button className='review-swiper-button-next border-transparent  rounded-full pt-1 pb-1 pr-2 pl-2 bg-gray-100 hover:bg-gray-200 hover:rounded-[50%] '><ChevronRightIcon /></button>
                            </div>
                            <Swiper
                                navigation={{
                                    nextEl: ".review-swiper-button-next",
                                    prevEl: ".review-swiper-button-prev",

                                }}
                                mousewheel={true}
                                pagination={false}
                                spaceBetween={15} // Space between slides in pixels
                                slidesPerView={4} // Number of slides per view (visible slides)
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
                                        slidesPerView: 4,
                                        spaceBetween: 15
                                    }
                                }}
                                modules={[Pagination, Navigation, FreeMode, Scrollbar, Mousewheel]}
                                className="mySwiper mt-9 "

                            >

                                {/* <ButtonsSlider /> */}
                                {datacarsslider.map((car, index) => (
                                    <SwiperSlide className='card w-[250px] h-[200px]' key={index} >
                                        <img src={car.url} alt="" className='object-cover w-full h-full  rounded-[8px]' />
                                        <div className='overlay '>
                                            <Link to={`/car-rental/cars/search/bymake/${car.name}`} className='border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>
                                                {car.name}
                                            </Link>                                        </div>
                                    </SwiperSlide>

                                ))}
                                {/* <SwiperSlide className='card'> */}
                                {/* absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%] */}
                                {/* <img src="/Audi.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className='border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>Bmw</button>
                                    </div> */}
                                {/* </SwiperSlide>
                                <SwiperSlide className='card'>
                                    <img src="./src/assets/carmain2.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className=' border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>kia</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='card'>
                                    <img src="./src/assets/carmain3.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className=' border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>lexuz</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='card'>
                                    <img src="./src/assets/carmain4.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className=' border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>bmw</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='card'>
                                    <img src="./src/assets/carmain7.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className=' border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>audi</button>
                                    </div>
                                </SwiperSlide> */}
                            </Swiper>

                        </div>
                    </div>
                </section>

                <section className='blogs mb-[50px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col items-center mb-[20px]'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Explore cars for any occasion</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                        <p className='text-center w-[600px] mb-[5px]'>Our incredible selection of cars makes it easy to find a ride anytime, anywhere.</p>
                    </div>
                    <div className='flex justify-center items-center relative'>
                        <div className='bg-gray-50 w-[250px] h-[150px] absolute z-[15] left-[15%] flex  flex-col  rounded-[5px] p-5'>
                            <div>
                                <p className='font-bold'>FEATURED POST</p>
                                <p className='mb-[6px]'>Look at this car: Dacia Duster</p>
                            </div>
                            <div className='underline'>
                                <a href="">Read more</a>
                            </div>
                        </div>
                        <div className=' '>
                            <img src="src/assets/carblog2.jpg" alt="" className='w-full h-full relat' />
                        </div>
                    </div>

                </section>

                <section id="destinations" className='cars-list h-fit mb-[50px]  mr-[25px] ml-[25px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Explore by destination</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                    </div>
                    <div className='cars-list-contents flex flex-col mr-[25px] ml-[25px]'>
                        {/* <div className='place-of-cars flex gap-[20px] justify-center mt-3'>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Agadir')}>Agadir</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Marrakech')}>Marrakech</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Essaouira')}>Essaouira</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Casablanca')}>Casablanca</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Rabat')}>Rabat</button>
                        </div> */}
                        <div className='car-card '>
                            {selectedDestination === '' && (
                                <>
                                    <div className='flex justify-end gap-4 w-[80%] m-auto'>
                                        <button className='prevbtncity border-transparent  rounded-full  pt-1 pb-1 pr-2 pl-2 bg-gray-100 hover:bg-gray-200 hover:rounded-[50%] ' ><ChevronLeftIcon /></button>
                                        <button className='nextbtncity  border-transparent  rounded-full pt-1 pb-1 pr-2 pl-2 bg-gray-100 hover:bg-gray-200 hover:rounded-[50%] '><ChevronRightIcon /></button>
                                    </div>
                                    <div className='scrollbar-content max-w-[80%]   m-auto scroll-smooth h-fit ' id='scrollbareffect'>

                                        {/* {cities.map((city, index) => (
                                            <Link to={`/car-rental/cars/bydestination/${city.name}`}>
                                                <div className='cars-list mt-[20px] h-fit min-w-[250px] rounded-[10px] border-gray-200 border overflow-hidden' key={index}>
                                                    <div className='car-img  h-[150px] w-full bg-white'>
                                                        <img src={city.url} alt="" className='w-full object-cover h-full ' />
                                                    </div>
                                                    <div className='car-contents mt-2 flex flex-col pl-2 pb-2'>
                                                        <div>
                                                            <div>
                                                                <h1 className='text-black'>{city.name}</h1>
                                                                <p className='text-[12px] font-semibold text-gray-500'>Morocco</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        ))} */}
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
                                            className="mySwiper "

                                        >

                                            {cities.map((city, index) => (
                                                <SwiperSlide className='card w-[250px] h-[fit]' key={index} >
                                                    <Link to={`/car-rental/cars/search/bydestination/${city.name}`}>
                                                        <div className='cars-list mt-[20px] h-fit min-w-[100%] rounded-[10px] overflow-hidden border' key={index}>
                                                            <div className='car-img  h-[150px] w-full '>
                                                                <img src={city.url} alt="" className='w-[100%] object-cover h-full border-none' />
                                                            </div>
                                                            <div className='car-contents mt-2 flex flex-col pl-2 pb-2'>
                                                                <div>
                                                                    <div>
                                                                        <h1 className='text-black'>{city.name}</h1>
                                                                        <p className='text-[12px] font-semibold text-gray-500'>Morocco</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>

                                            ))}
                                        </Swiper>

                                    </div>


                                </>
                            )}

                            {selectedDestination === 'Agadir' && (
                                <>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain9.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                            <h1 className='text-black '>car 1 </h1>

                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain10.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px] rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain14.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain8.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain8.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain8.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                </>
                            )}

                            {selectedDestination === 'Marrakech' && (
                                <>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain1.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain1.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px] rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain1.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                    <div className='cars-list mt-[50px] h-[270px] w-[250px]  rounded-[10px] shadow-md '>
                                        <div className='car-img  h-[150px] w-full bg-white'>
                                            <img src="./src/assets/carmain1.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-tl-[10px]' />
                                        </div>
                                        <div className='car-contents'>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* <div className='flex justify-center mt-8'>
                            <button className='  border-[2px] pr-3 pl-3 pt-2 pb-2 bg-white ]'>See more about {city}'s Cars</button>
                        </div> */}
                    </div>
                </section>

                <section className='brand-slider mb-[50px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col  m-auto mb-[10px]'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Our Partners</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[23%] m-auto'></div>
                    </div>
                    <AppContainer>
                        <Wrapper>
                            <Marquee>
                                <MarqueeGroup>
                                    {row1.map((el) => (
                                        <ImageGroup>
                                            <Image src={el} />
                                        </ImageGroup>
                                    ))}
                                </MarqueeGroup>
                                <MarqueeGroup>
                                    {row1.map((el) => (
                                        <ImageGroup>
                                            <Image src={el} />
                                        </ImageGroup>
                                    ))}
                                </MarqueeGroup>
                            </Marquee>
                            <Marquee>
                                <MarqueeGroup2>
                                    {row2.map((el) => (
                                        <ImageGroup>
                                            <Image src={el} />
                                        </ImageGroup>
                                    ))}
                                </MarqueeGroup2>
                                <MarqueeGroup2>
                                    {row2.map((el) => (
                                        <ImageGroup>
                                            <Image src={el} />
                                        </ImageGroup>
                                    ))}
                                </MarqueeGroup2>
                            </Marquee>
                        </Wrapper>
                    </AppContainer>

                </section>

                <section className='frequently-questions-section m-auto w-[80%] '>
                    <div className='frequently-content  p-3  w-[100%] ' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                        <div className='flex justify-center items-center flex-col m-auto mb-4'>
                            <h1 className='text-center mb-[50px] text-4xl z-[1]'>Frequently asked questions</h1>
                            <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                        </div>
                        <div className='frequently-content-card flex  justify-center gap-3 w-[100%]'>
                        {/* flex flex-col items-center gap-2  */}
                            <div className='grid grid-cols-2 gap-3  w-[100%]'>
                                <div className="card-question collapse h-fit collapse-arrow bg-white text-black border rounded-[0px]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        What types of vehicles do you offer for rent ?
                                    </div>
                                    <div className="collapse-content">
                                        <p>A: We offer a wide range of vehicles to suit your needs, including:</p>
                                        <div className='flex flex-col gap-3 mt-2 pl-5 mb-2'>
                                            <li><span className='font-bold'>Economy Cars :</span> Budget-friendly and fuel-efficient.</li>
                                            <li><span className='font-bold'>Luxury Vehicles:</span> High-end cars for a premium driving experience.</li>
                                            <li><span className='font-bold'>SUVs:</span> Spacious and comfortable for family trips or group travel.</li>
                                            <li><span className='font-bold'>Coupes:</span> Stylish and sporty cars for a dynamic driving experience.</li>
                                        </div>
                                        <p>For a complete list and availability, please visit our vehicle selection page on the website.</p>

                                    </div>
                                </div>

                                <div className=" card-question collapse h-fit collapse-arrow bg-white text-black border rounded-[0px] ">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Can I modify or cancel my reservation ?
                                    </div>
                                    <div className="collapse-content flex flex-col gap-3">
                                        <li>Modify Your Reservation: Log in to your account on our website or app, navigate to your booking, and make the necessary changes. Alternatively, you can contact our customer service team for assistance.</li>
                                        <li>
                                            Cancel Your Reservation: Log in to your account on our website or app, navigate to your booking, and click the "Cancel Booking" button. Alternatively, you can contact our customer service team for assistance.
                                        </li>
                                    </div>
                                </div>
                                <div className=" card-question collapse h-fit collapse-arrow bg-white text-black border rounded-[0px] ">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Rental Requirements ?
                                    </div>
                                    <div className="collapse-content">
                                        <p> Renters must be at least 18 years old to rent a car. Additional fees may apply for drivers under 25.(your ID)</p>
                                    </div>
                                </div>
                                <div className=" card-question collapse h-fit collapse-arrow bg-white text-black border rounded-[0px] ">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Can I extend my rental period ?
                                    </div>
                                    <div className="collapse-content">
                                        Yes, you can extend your rental period. To do so, please contact us before your original return date. You can extend your rental by:

                                        Logging in to your account on our website and call to the host of your car you are reserved

                                    </div>
                                </div>
                                <div className=" card-question collapse h-fit collapse-arrow bg-white text-black border rounded-[0px] ">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        What is your fuel policy ?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Our fuel policy typically requires you to return the car with the same amount of fuel it had when you picked it up. you can contact your host for more informatins </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='frequently-content-card2 flex flex-col gap-2'>
                                <div className=" collapse collapse-arrow bg-white text-black border rounded-[0px] w-[500px] ">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>hello</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-white text-black border rounded-[0px] w-[500px]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>hello</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>


                <section class="bg-[#f7f7f7bd]  mt-5">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-md sm:text-center">
                            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                            <form action="#">
                                <div class=" mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div class="relative w-full">
                                        <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none" placeholder="Enter your email" value={email} type="email" id="email" onChange={(e)=>setemail(e.target.value)} required="" />
                                    </div>
                                    <div>
                                    {loading ? (<Button id="signupbtn" className='min-w-[100px] py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleSubmit} loading={true} >Sent</Button>) : (<Button id="signupbtn" className=' py-3 px-5 min-w-[100px] text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleSubmit}  >Sent</Button>)}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main

// const ButtonsSlider = () => {
//     con border pr-3 pl-3 pt-1 pb-1 bg-whitest swipper = useSwiper();
//     return (
//         <div className='buttons'>
//             <div className='buttons absolute top-[10px] right-[10px] z-[20]'>
//                 <button className='border border-red-600 pt-1 pb-1 pr-3 pl-3 bg-red-500' onClick={() => swipper.slidePrev()}>right</button>
//                 <button className='border border-red-600 pt-1 pb-1 pr-3 pl-3 bg-red-500' onClick={() => swipper.slideNext()}>left</button>
//             </div>

//         </div>
//     )
// }


const AppContainer = styled.div`

`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;