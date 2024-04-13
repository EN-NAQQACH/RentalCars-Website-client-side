import React from 'react'
import { useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import StyleContext from '../Stylecontext'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Main() {
    const style = useContext(StyleContext);
    const swipper = useSwiper();
    return (
        <>

            <div className='h-lvh mb-[150px]' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing }}>

                <div className='mt-[80px] flex justify-center flex-col w-fit m-auto '>
                    <h1 className='text-center mb-[50px] text-4xl z-[15]'>Find your Car</h1>
                    <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[40%] m-auto'></div>
                    <div className='flex items-center justify-center border rounded-3xl p-1 pl-4 pr-4  z-[10] bg-white shadow-sm'>
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
                <div className=' relative h-[520px] w-[full] mt-[50px]  m-auto mr-[50px] ml-[50px]  '>
                    <img src="./src/assets/carmainn.jpg" alt="Description" className=" object-cover w-full h-full rounded-xl " />
                    <button className='border p-3 absolute bottom-[50px] left-[50px] pl-8 pr-8 bg-white transition duration-500 hover:border-black'>
                        <a href="">Explore our Cars</a>
                    </button>
                </div>
            </div>
            <div className=' h-[100vh] p-3 ' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing, }}>
                <div className='flex justify-center flex-col  m-auto'>
                    <h1 className='text-center mb-[50px] text-4xl z-[1]'>Browse by make</h1>
                    <div className='bg-gray-100 h-6 mt-[-70px] mb-6 w-[23%] m-auto'></div>
                </div>

                <div className='cslider mt-[20px] relative'>
                    <div className='flex gap-2 absolute right-0 z-[15] top-[-50px]'>
                        <button className='review-swiper-button-prev border border-black rounded-full  pt-1 pb-1 pr-2 pl-2 bg-white' ><ChevronLeftIcon /></button>
                        <button className='review-swiper-button-next border border-black rounded-full pt-1 pb-1 pr-2 pl-2 bg-white'><ChevronRightIcon /></button>
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
                                spaceBetween: 10
                            }
                        }}
                        modules={[Autoplay,Pagination, Navigation]}
                        className="mySwiper mt-9"

                    >

                        {/* <ButtonsSlider /> */}
                        <SwiperSlide>
                            <img src="./src/assets/carmain1.jpg" alt="" className='object-cover w-[350px] h-[250px] rounded-[2px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/carmain2.jpg" alt="" className='object-cover w-[350px] h-[250px]  rounded-[2px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/carmain3.jpg" alt="" className='object-cover w-[350px] h-[250px]  rounded-[2px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/carmain7.jpg" alt="" className='object-cover w-[350px] h-[250px]  rounded-[2px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/carmain4.jpg" alt="" className='object-cover w-[350px] h-[250px]  rounded-[2px]' />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Main

// const ButtonsSlider = () => {
//     const swipper = useSwiper();
//     return (
//         <div className='buttons'>
//             <div className='buttons absolute top-[10px] right-[10px] z-[20]'>
//                 <button className='border border-red-600 pt-1 pb-1 pr-3 pl-3 bg-red-500' onClick={() => swipper.slidePrev()}>right</button>
//                 <button className='border border-red-600 pt-1 pb-1 pr-3 pl-3 bg-red-500' onClick={() => swipper.slideNext()}>left</button>
//             </div>

//         </div>
//     )
// }