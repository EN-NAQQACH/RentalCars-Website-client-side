import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../cardeffect.css'
function CarPage() {
    return (
        <div className='carpage h-lvh p-0 m-0 ' >
            <div className='ml-5 rounded-[15px] bg-transparent  border-black w-fit text-black p-1 hover:bg-gray-100 hover:text-black transition-all duration-[0.3s] cursor-pointer'>
                <ArrowBackIcon />
            </div>
            <div className='carpagecontents'>
                <div className='carpagecontents1 h-fit  text-white'>
                    <div className='containerr mt-4 shadow-md'>
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
                </div>
            </div>
        </div>
    )
}

export default CarPage