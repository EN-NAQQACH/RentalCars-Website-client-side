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
    // <div className='bg-white h-screen m-auto top-0 relative' style={{fontFamily: style.fontFamily,fontWeight:style.fontWeight,letterSpacing:style.LetterSpacing}}>
    //   <Swiper
    //     spaceBetween={2}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 6500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={false}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper "
    //   >
    //     <SwiperSlide>      <img src="./carherocopy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
    //     </SwiperSlide>
    //     <SwiperSlide>      <img src="./carhero2copy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
    //     </SwiperSlide>
    //     <SwiperSlide>      <img src="./carhero3copy.jpg" alt="" className='m-auto h-[100%]  object-top ' />
    //     </SwiperSlide>
    //   </Swiper>
    //   <div className='text-center flex flex-col items-center z-[15]' >
    //     <div className='absolute bottom-[50%] z-[15]'>
    //       <h1 className='text-2xl text-white uppercase '>
    //         Welcome to daisly
    //       </h1>
    //       <button className='border mt-5 pl-6 pr-6 pb-3 pt-3 text-center transition duration-500 bg-white uppercase text-[12px]'>
    //        <a href="#explore">discover us</a> 
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <section className="relative h-screen w-full flex items-center justify-center ">
      <div className="max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl ">
          Experience the Thrill of Luxury Car Rental
        </h1>
        <p className="text-lg text-gray-300">
          Discover the ultimate driving experience with our premium car rental service. Explore the city in style and
          comfort.
        </p>
        <div className="flex justify-center space-x-4 ">
          <a
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#000000] px-6 py-2 text-base font-medium text-[white] shadow-sm transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-[black] focus:ring-offset-2"
            href="#"
          >
            Rent Now
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero