import React from 'react'
import { Link } from 'react-router-dom'

function Listyourcar() {
  return (
    <div className='scroll-smooth h-[100vh] flex justify-center items-center'>
        <div className='flex flex-col items-center gap-3'>
            <p className='text-[40px] text-center'>Become a Host</p>
            <a href="become_a_host/list-your-car" className='bg-[#583cfa] text-white hover:bg-[#460ab5] transition-all duration-[0.4s] p-3 rounded-[5px]'>Get Started</a>
        </div>
    </div>
  )
}

export default Listyourcar