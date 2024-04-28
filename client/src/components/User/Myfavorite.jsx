import React, { useEffect, useState, useContext } from 'react'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../cardeffect.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Myfavorite() {
    return (
        <div className='myfavoritiesinfo border rounded-xl p-3 h-[100%]'>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-[18px] font-semibold text-gray-700'>Mohssine’s favorites</p>
            </div>
            <div className='favorites-componentss mt-5 max-w-[100%] felx items-center '>
                <div className='favorites-cards relative '>
                    <div className="favorites-card-componentss h-fit border rounded-lg shadow-sm">
                        <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                    <p className='text-[14px] font-bold text-gray-500'>Bmw cs model 2019</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>$100 </span>/ Day</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-2  '>
                                <p className='flex gap-3 items-center'>
                                    <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>5 seats
                                    </span></p>
                                <p className='flex gap-3 items-center'>
                                    <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>Automatic
                                    </span></p>
                                <div className='flex gap-3 items-center'>
                                    <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                    <p className='text-[12px] text-gray-600 font-bold'>disel</p>
                                </div>
                            </div>
                            <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                            <div>
                            </div>
                            <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                        </div>
                    </div>
                    <div>
                        <button id='btnsave2'>
                            <FavoriteOutlinedIcon />
                        </button>
                    </div>
                </div>

                <div className='favorites-cards relative '>
                    <div className="car-card-componentss   h-fit border rounded-lg shadow-sm">
                        <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                                    <p className='text-[14px] font-bold text-gray-500'>Bmw cs model 2019</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>$100 </span>/ Day</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-2  '>
                                <p className='flex gap-3 items-center'>
                                    <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>5 seats
                                    </span></p>
                                <p className='flex gap-3 items-center'>
                                    <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>Automatic
                                    </span></p>
                                <div className='flex gap-3 items-center'>
                                    <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                    <p className='text-[12px] text-gray-600 font-bold'>disel</p>
                                </div>
                            </div>
                            <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                            <div>
                            </div>
                            <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                        </div>
                    </div>
                    <div>
                        <button id='btnsave2'>
                            <FavoriteOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myfavorite