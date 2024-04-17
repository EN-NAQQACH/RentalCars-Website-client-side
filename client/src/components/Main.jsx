import React from 'react'
import { useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import StyleContext from '../Stylecontext'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './cardeffect.css';

import { GiCarSeat } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled, { keyframes, css } from "styled-components";


function Main() {
    const style = useContext(StyleContext);
    const swipper = useSwiper();
    const [city, setcity] = useState('Agadir');
    const [selectedDestination, setSelectedDestination] = useState('');
    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
        setcity(destination);
    };

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



    return (
        <>
            <main>

                <section className='find-your-car-section '>
                    <div className='h-lvh mb-[150px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing }}>
                        <div className='location-section mt-[80px] flex justify-center flex-col w-fit m-auto '>
                            <h1 className='text-center mb-[50px] text-4xl z-[15]'>Find your Car</h1>
                            <div className='divider-find bg-gray-100 h-6 mt-[-70px] mb-6 w-[40%] m-auto'></div>
                            <div className='location-content-section flex items-center justify-center border rounded-3xl p-1 pl-4 pr-4  z-[10] bg-white shadow-sm '>
                                <div className='flex flex-col w-[250px] border-gray-200 border-r-[1px] mr-[15px] '>
                                    <label htmlFor="">where</label>
                                    <input type="text" placeholder='agadir,marakkech' className='mr-5  text-gray-400' />
                                </div>
                                <div className='flex flex-col w-fit mr-[15px] border-gray-200 border-r-[1px]'>
                                    <label htmlFor="">from</label>
                                    <input type="date" className='mr-5 text-gray-400' />
                                </div>
                                <div className='flex flex-col w-fit'>
                                    <label htmlFor="">untill</label>
                                    <input type="date" className='mr-5  text-gray-400' />
                                </div>
                                <div className='flex flex-col w-fit'>
                                    <button className='bg-black rounded-full p-2 text-white text-center'>
                                        <SearchIcon className='m-auto' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' relative h-[520px] w-[full] mt-[50px]  m-auto mr-[60px] ml-[60px]  '>
                            <img src="./src/assets/carmain50.jpg" alt="Description" className=" object-cover w-full h-full rounded-[10px] " />
                            <button className='border border-[2px] rounded-[50px] p-3 absolute bottom-[50px] left-[50px] pl-8 pr-8 bg-transparent transition duration-500 hover:bg-transparent text-white'>
                                <a href="">Explore our Cars</a>
                            </button>
                        </div>
                    </div>
                </section>

                <section className='cars-slider h-fit mb-[85px]'>
                    <div className='car-slider-content p-3 ' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                        <div className='content flex justify-center flex-col  m-auto'>
                            <h1 className='text-center mb-[50px] text-4xl z-[1]'>Browse by make</h1>
                            <div className='divider-slider bg-gray-100 h-6 mt-[-70px] mb-6 w-[23%] m-auto'></div>
                        </div>
                        <div className='cslider mt-[20px] relative mr-[25px] ml-[25px]'>
                            <div className='flex gap-2 absolute right-0 z-[15] top-[-50px]'>
                                <button className='review-swiper-button-prev border-transparent  rounded-full  pt-1 pb-1 pr-2 pl-2 bg-gray-100' ><ChevronLeftIcon /></button>
                                <button className='review-swiper-button-next border-transparent  rounded-full pt-1 pb-1 pr-2 pl-2 bg-gray-100'><ChevronRightIcon /></button>
                            </div>
                            <Swiper
                                navigation={{
                                    nextEl: ".review-swiper-button-next",
                                    prevEl: ".review-swiper-button-prev",

                                }}
                                pagination={false}
                                mousewheel={true}

                                spaceBetween={15} // Space between slides in pixels
                                slidesPerView={4} // Number of slides per view (visible slides)
                                loop={true} // Enable loop mode
                                autoplay={{ // Autoplay settings
                                    delay: 4000, // Delay between slides in milliseconds
                                    disableOnInteraction: false // Disable autoplay when user interacts with swiper
                                }}
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
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper mt-9"

                            >

                                {/* <ButtonsSlider /> */}
                                <SwiperSlide className='card'>
                                    {/* absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%]
absolute z-[15] bottom-[100px] left-[36%] */}
                                    <img src="./src/assets/carmain1.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[12px]' />
                                    <div className='overlay '>
                                        <button className='border border-[3px] pr-3 pl-3 pt-1 pb-1 bg-white rounded-[30px]'>mercedes</button>
                                    </div>
                                </SwiperSlide>
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
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </section>

                <section className='blogs mb-[85px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col items-center mb-[20px]'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Explore the blog</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                        <p className='text-center w-[600px] mb-[5px]'>Peruse the latest features and photos of the best cars from around the marketplace.</p>
                        <button className='border border-black pr-3 pl-3 pt-1 pb-1'>Explore the blog</button>
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
                            <img src="./src/assets/carblog2.jpg" alt="" className='w-full h-full relat' />
                        </div>
                    </div>

                </section>

                <section className='cars-list h-fit mb-[85px]  mt-8 mr-[25px] ml-[25px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                    <div className='flex justify-center flex-col'>
                        <h1 className='text-center mb-[50px] text-4xl z-[1]'>Explore by destination</h1>
                        <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                    </div>
                    <div className='cars-list-contents flex flex-col mr-[25px] ml-[25px]'>
                        <div className='place-of-cars flex gap-[20px] justify-center mt-3'>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Agadir')}>Agadir</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Marrakech')}>Marrakech</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Essaouira')}>Essaouira</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Casablanca')}>Casablanca</button>
                            <button className='border pl-5 pr-5 pt-1 pb-1 hover:bg-black hover:text-white' onClick={() => handleDestinationClick('Rabat')}>Rabat</button>
                        </div>
                        <div className='car-card flex gap-8 justify-center'>
                            {selectedDestination === '' && (
                                <>
                                    <div className='card-content-list car-card flex gap-8 justify-center'>
                                        <div className='cars-list mt-[50px] h-[320px] w-[250px]  rounded-[10px] '>
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
                                                    <FavoriteBorderIcon className='hover:text-red-600 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cars-list mt-[50px] h-[320px] w-[250px]  rounded-[10px] '>
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
                                                    <FavoriteBorderIcon className='hover:text-red-600 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cars-list mt-[50px] h-[320px] w-[250px]  rounded-[10px] '>
                                            <div className='car-img  h-[180px] w-full bg-white'>
                                                <img src="./src/assets/carmain14.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-[10px]' />
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
                                                    <FavoriteBorderIcon className='hover:text-red-600 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cars-list mt-[50px] h-[320px] w-[250px]  rounded-[10px] '>
                                            <div className='car-img  h-[180px] w-full bg-white'>
                                                <img src="./src/assets/carblog2.jpg" alt="" className='w-full object-cover h-full rounded-tr-[10px] rounded-[10px]' />
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
                                                    <FavoriteBorderIcon className='hover:text-red-600 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
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
                        <div className='flex justify-center mt-8'>
                            <button className='  border-[2px] pr-3 pl-3 pt-2 pb-2 bg-white ]'>See more about {city}'s Cars</button>
                        </div>
                    </div>
                </section>

                <section className='brand-slider mb-[86px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
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

                <section className='frequently-questions-section mb-[50px] w-[100%] '>
                    <div className='frequently-content min-h-[100vh] p-3  w-[100%] ' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                        <div className='flex justify-center items-center flex-col m-auto mb-4'>
                            <h1 className='text-center mb-[50px] text-4xl z-[1]'>Frequently asked questions</h1>
                            <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[65%] m-auto'></div>
                        </div>
                        <div className='frequently-content-card flex  justify-center gap-3 w-[100%]'>
                            <div className='flex flex-col items-center gap-2 w-[100%]'>
                                <div className="card-question collapse collapse-arrow bg-white text-black border rounded-[0px] w-[70%]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae dignissimos rerum, sapiente officiis velit atque rem adipisci dolores, quia nemo voluptatum esse consectetur harum placeat. Id accusantium maiores nihil?</p>
                                    </div>
                                </div>

                                <div className=" card-question collapse collapse-arrow bg-white text-black border rounded-[0px] w-[70%]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi itaque quidem nesciunt! Aliquid expedita id, quam eum sapiente commodi non quos deleniti repudiandae aperiam rem reprehenderit officiis at eveniet.</p>
                                    </div>
                                </div>
                                <div className=" card-question collapse collapse-arrow bg-white text-black border rounded-[0px] w-[70%]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati omnis dolore ipsum. Exercitationem sint a illo, praesentium consectetur autem, quam qui dolorem iure nihil alias modi non blanditiis ullam!</p>
                                    </div>
                                </div>
                                <div className=" card-question collapse collapse-arrow bg-white text-black border rounded-[0px] w-[70%]">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[17px] font-medium">
                                        Click me to show/hide content
                                    </div>
                                    <div className="collapse-content">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati omnis dolore ipsum. Exercitationem sint a illo, praesentium consectetur autem, quam qui dolorem iure nihil alias modi non blanditiis ullam!</p>
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