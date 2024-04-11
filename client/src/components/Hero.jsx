import React from 'react'

function Hero() {
  return (
    <div className='bg-white  h-auto w-full top-18'>
        <img src="./src//assets/home-img.png" alt="" className='m-auto object-top mt-[80px]' />
        <div className='text-center ml-[px] mt-[50px]'>
            <h1 className='text-2xl '>
                Welcome to daisly
            </h1>
            <button className='border mt-5  p-2 text-center transition duration-500 hover:border-black'>
                discover us
            </button>
        </div>
    </div>
  )
}

export default Hero