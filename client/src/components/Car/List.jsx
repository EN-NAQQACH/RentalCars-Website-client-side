import React from 'react'
import Steppers from '../User/Steppers'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function List() {
  return (
    <div id='list' className='min-h-[100vh] mt-[15px] w-[75%] m-auto text-gray-900'>
      <div className='p-3 mb-6 text-black flex gap-3 items-center max-[655px]:text-center max-[655px]:flex-col '>
        <p className='text-[25px] font-bold'>List your car</p>
        <div className='flex'>
          <p className='text-gray-400 text-[12px]'>(<PriorityHighIcon className='text-gray-500' />if you refrech the page you will lose your data)</p>
        </div>

      </div>
      <div>
        <Steppers />
      </div>
    </div>
  )
}

export default List