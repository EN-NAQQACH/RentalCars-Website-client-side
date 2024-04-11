import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Main() {
    return (
        <div className='h-lvh'>
            
            <div className='mt-[80px] flex justify-center flex-col w-fit m-auto '>
                <h1 className='text-center mb-[50px] text-4xl'>Find your Car</h1>
                <div className='flex items-center justify-center border rounded-3xl p-1 pl-4 pr-4  z-[10] bg-white shadow-md'>
                    <div className='flex flex-col w-[250px] border-black border-r-[1px] mr-[15px] '>
                        <label htmlFor="">where</label>
                        <input type="text" placeholder='agadir,marakkech' className='mr-5' />
                    </div>
                    <div className='flex flex-col w-fit mr-[15px] border-black border-r-[1px]'>
                        <label htmlFor="">from</label>
                        <input type="date" className='mr-5' />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label htmlFor="">untill</label>
                        <input type="date" className='mr-5' />
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
    )
}

export default Main