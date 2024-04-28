import React from 'react'
import  { useState } from 'react';
import {Radio, Input,Checkbox,} from 'antd';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function EditYourCar() {
    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    return (
        <div className='edityourcar border rounded-xl p-3 h-[100%]'>
            <div className='flex flex-col justify-center'>
                <div className='content-your-car '>
                    <div className='YourCar mb-4'>
                        <div className='flex justify-between items-center'>
                        <p className='font-bold text-black mb-1'>Your Car</p>
                        <Link to="/account/my-listing" className='flex items-center gap-1  rounded-lg text-[#9c8cfc] hover:text-[#7251ca] font-semibold'><ArrowBackIcon/> Go back</Link>
                        </div>
                        <div className='flex flex-col gap-3' >
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-[13px] font-bold mb-2 text-gray-400'> location</label>
                                <input name='location' type='text' placeholder="Your car location" className=' border p-1 rounded-md' />
                            </div>
                            <div className='year-model-make grid grid-cols-3 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="caryear" className='text-[13px] font-bold mb-2 text-gray-400'>Year</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">mohssine</option>
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmake" className='text-[13px] font-bold mb-2 text-gray-400'> Make</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">mohssine</option>
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmodel" className='text-[13px] font-bold mb-2 text-gray-400'>Model</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">mohssine</option>
                                    </select>
                                </div>
                            </div>
                            <div className='w-[260px]'>
                                <div className='flex flex-col'>
                                    <label htmlFor="distance" className='text-[13px] font-bold mb-2 text-gray-400'>Distance</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">mohssine</option>
                                    </select>
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <label htmlFor="Transition" className='text-[13px] font-bold mb-2 text-gray-400'>Transition</label>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={1}>Manual</Radio>
                                        <Radio value={2}>Automatic</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='caravailinility mb-4 w-[500px]'>
                        <p className='font-bold text-black '>Car availibility</p>
                        <div className='flex flex-col gap-3 mt-2' >
                            <div className='flex flex-col '>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Minimum trip duration</label>
                                <select placeholder="select year" className='p-1 border rounded-md'>
                                    <option value="" className=''>mohssine</option>
                                    <option value="" className='rounded-none'>mohssine</option>
                                    <option value="" className='rounded-none'>mohssine</option>
                                    <option value="" className='rounded-none'>mohssine</option>
                                </select>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Maximum trip duration</label>
                                <select placeholder="select year" className='p-1 border rounded-md'>
                                    <option value="">mohssine</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='cardetails mb-4'>
                        <p className='font-bold text-black mb-1'>Car Details</p>
                        <div className='flex flex-col gap-2' >
                            <p className='text-[13px] font-bold mb-2 text-gray-400'>Car features</p>
                            <div className='grid grid-cols-3'>
                                <div className='flex flex-col gap-1'>
                                    <Checkbox>Cruise Control</Checkbox>
                                    <Checkbox>Airbags</Checkbox>
                                    <Checkbox>Leather Seats</Checkbox>
                                    <Checkbox>Navigation/GPS System</Checkbox>
                                    <Checkbox>Air Conditioning</Checkbox>
                                    <Checkbox>Sunroof</Checkbox>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Checkbox>Remote Central Locking</Checkbox>
                                    <Checkbox>Alloy Wheels</Checkbox>
                                    <Checkbox>(ESP)</Checkbox>
                                    <Checkbox>Rear Parking Radar</Checkbox>
                                    <Checkbox>Onboard Computer</Checkbox>
                                    <Checkbox>Child seat</Checkbox>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Checkbox>Rear View Camera</Checkbox>
                                    <Checkbox>Anti-lock Braking System (ABS)</Checkbox>
                                    <Checkbox>Speed Limiter</Checkbox>
                                    <Checkbox>Electric Windows</Checkbox>
                                    <Checkbox>CD/MP3/Bluetooth</Checkbox>
                                </div>
                            </div>
                            <div className=' flex flex-col w-[500px]'>
                                <label htmlFor="" className='text-[14px] font-bold mb-1 text-gray-400'> Car seats</label>
                                <input placeholder="car seats" className='rounded-[0px] border p-1 text-[13px] rounded-md' />
                            </div>
                            <div>
                                <div className=''>
                                    <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Description</label>
                                        <Input.TextArea showCount maxLength={500} className='h-24' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='carphotos  mb-2'>
                        <p className='font-bold text-black mb-1'>Car photos</p>
                        <div className='flex flex-col gap-2' >
                            <p>Upload at least 6 photos, including multiple exterior angles with the whole car in frame, as well as interior shots.</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='pl-3 pr-3 pt-2 pb-2 bg-[#8d8df8] transition-all duration-75  hover:bg-[#6565ff] text-[12px] text-white font-semibold rounded-md'>Update Your Car</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditYourCar