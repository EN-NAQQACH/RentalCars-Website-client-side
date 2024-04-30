import React from 'react'
import Lottie from "lottie-react";
import animationData from "./404.json";
import { Link } from 'react-router-dom';

export default function Page() {
    return (
        <>
            <div className=' flex justify-center m-auto flex-col' id='page404'>
                <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '250px', marginTop: '100px' }} />
                <Link to="/" className='pl-3 pr-3 pt-2 pb-2 border w-fit rounded-md m-auto flex justify-center bg-black text-white font-semibold text-[14px]'>Go To Home</Link>
            </div>
        </>
    )
}
