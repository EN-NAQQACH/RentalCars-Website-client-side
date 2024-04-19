import React from 'react'
import Steppers from '../User/Steppers'

function List() {
  return (
    <div  className='min-h-[80vh] mt-[15px] w-[850px] m-auto text-gray-900'>
        <div className='p-3 mb-6 text-black'>
            <p className='text-[25px] font-bold'>List your car</p>
        </div>
        <div>
        <Steppers />
        </div>
    </div>
  )
}

export default List