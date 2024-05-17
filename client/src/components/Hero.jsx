import React from 'react'
import { useState, useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { StyleContext } from '../Stylecontext'; // Import StyleContext as a named export



function Hero() {
  const style = useContext(StyleContext);
  return (
    <div className='bg-white h-auto w-full top-0 relative' style={{fontFamily: style.fontFamily,fontWeight:style.fontWeight,letterSpacing:style.LetterSpacing}}>
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[89.5vh]"
      >
        <SwiperSlide>      <img src="./src/assets/carherocopy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
        </SwiperSlide>
        <SwiperSlide>      <img src="./src/assets/carhero2copy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
        </SwiperSlide>
        <SwiperSlide>      <img src="./src/assets/carhero3copy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
        </SwiperSlide>
      </Swiper>
      <div className='text-center flex flex-col items-center z-[15]' >
        <div className='absolute bottom-[25%] z-[15]'>
          <h1 className='text-2xl text-white uppercase '>
            Welcome to daisly
          </h1>
          <button className='border mt-5 pl-6 pr-6 pb-3 pt-3 text-center transition duration-500 bg-white uppercase text-[12px]'>
           <a href="#explore">discover us</a> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero