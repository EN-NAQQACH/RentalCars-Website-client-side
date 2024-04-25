import React, { useState } from 'react'
import { Checkbox } from 'antd';
import { Radio, Select, Rate, Flex } from 'antd';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import '../cardeffect.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';

const { Option } = Select;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
function CarHome() {
    const [value, setValue] = useState(1);
    const [rat, setRate] = useState('');
    const [price, setPrice] = useState([20, 75]);
    const handlechange = (e, value) => {
        setPrice(value);
        console.log(price);
    }
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const [value2, setValue2] = useState('');
    const onChangee = (value) => {
        console.log('selected', { value });
        setValue2(value);
        console.log(value2);
    };
    const handlechnagemax = (e) => {
    }
    const handlechnagemin = (e) => {
    }
    const handleshowmore = () => {
        const features = document.getElementById('features');
        features.style.height = 'fit-content';
        const showbtn = document.getElementById('showbtn');
        showbtn.style.display = 'none';
        const hidebtn = document.getElementById('lessbtn');
        hidebtn.style.display = 'block';
    }
    const handleshowless = () => {
        const features = document.getElementById('features');
        features.style.height = '160px';
        const showbtn = document.getElementById('showbtn');
        showbtn.style.display = 'block';
        const hidebtn = document.getElementById('lessbtn');
        hidebtn.style.display = 'none';
    }

    return (
        <div className=''>
            <div className='location-section  flex justify-center w-fit m-auto mb-7'>
                <div className='location-content-section flex items-center justify-center border rounded-3xl p-1 pl-4 pr-4  z-[10] bg-white shadow-sm '>
                    <div className='flex flex-col w-[250px] border-gray-200 border-r-[1px] mr-[15px] '>
                        <label htmlFor="">where</label>
                        <input type="text" placeholder='agadir,marakkech' className='mr-5  text-gray-400' />
                    </div>
                    <div className='flex flex-col w-fit mr-[15px] border-gray-200 border-r-[1px]'>
                        <label htmlFor="">from</label>
                        <input type="date" className='mr-5 text-gray-400' />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <label htmlFor="">untill</label>
                        <input type="date" className='mr-5  text-gray-400' />
                    </div>
                    <div className='flex flex-col w-fit'>
                        <button className='bg-black rounded-full pl-3 pr-3 pt-2 pb-2 text-white text-center flex justify-center'>
                        <SearchIcon className='m-auto' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='carhome-section bg-white h-fit m-[80px] mt-0'>

                <div className='aside border rounded-[15px]'>
                    <div className='filter-components'>
                        <div className='filter-content  pb-[30px]'>
                            <div className='flex justify-between mb-4 items-center border-b-[1px] p-3 rounded-tr-[15px] rounded-tl-[15px] bg-[#fbfaff]'>
                                <p className='text-[14px]'>Filter</p>
                                <button className='text-[12px] text-[#5c3cfc] hover:bg-gray-100 pl-2 pr-2 pt-1 pb-1 rounded-md'>Clear All Filters</button>
                            </div>
                            <div className="p-3">
                                <div className='filter-price mb-3'>
                                    <p className='text-[13px] font-semibold'>Price</p>
                                    <Slider valueLabelDisplay="auto" value={price} onChange={handlechange} />
                                    <div className='flex gap-3 mt-2'>
                                        <div>
                                            <TextField
                                                id="outlined-number"
                                                label="Min"
                                                type="text"
                                                value={price[0]}
                                                onChange={(e) => { setPrice((prev) => { return [e.target.value, prev[1]] }) }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />

                                        </div>
                                        <div>
                                            <TextField
                                                id="outlined-number"
                                                label="Max"
                                                type="text"
                                                value={price[1]}
                                                onChange={(e) => { setPrice((prev) => { return [prev[0], e.target.value] }) }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-transmission mb-3'>
                                    <div>
                                        <p className='text-[13px] font-semibold mb-2'>Transmission</p>
                                        <Radio.Group onChange={onChange} className='flex flex-col'>
                                            <Radio value={"mohssine"} className='text-[13px]'>Manule</Radio>
                                            <Radio value={"Automatic"} className='text-[13px]'>Automatic</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className='filter-make mb-2' >
                                    <p className='text-[13px] font-semibold mb-1'>Make</p>
                                    <Select onChange={onChangee} className='w-[100%]'>
                                        <Option value={"mohssine"}>mohssine</Option>
                                        <Option value={"yassine"}>mohssine</Option>
                                    </Select>
                                </div>
                                <div className='filter-model mb-3'>
                                    <p className='text-[13px] font-semibold mb-1'>model</p>
                                    <Select onChange={onChangee} className='w-[100%]'>
                                        <Option value={"mohssine"}>mohssine</Option>
                                        <Option value={"yassine"}>mohssine</Option>
                                    </Select>
                                </div>
                                <div className='filter-features mb-3'>
                                    <p className='text-[13px] font-semibold mb-2'>Features</p>
                                    <div className='flex flex-col h-[160px] overflow-hidden p-2 mb-1' id='features'>
                                        <Checkbox>Cruise Control</Checkbox>
                                        <Checkbox>Airbags</Checkbox>
                                        <Checkbox>Leather Seats</Checkbox>
                                        <Checkbox>Navigation/GPS System</Checkbox>
                                        <Checkbox>Air Conditioning</Checkbox>
                                        <Checkbox>Sunroof</Checkbox>
                                        <Checkbox>Remote Central Locking</Checkbox>
                                        <Checkbox>Alloy Wheels</Checkbox>
                                        <Checkbox>(ESP)</Checkbox>
                                        <Checkbox>Rear Parking Radar</Checkbox>
                                        <Checkbox>Onboard Computer</Checkbox>
                                        <Checkbox>Child seat</Checkbox>
                                        <Checkbox>Rear View Camera</Checkbox>
                                        <Checkbox>Anti-lock Braking System (ABS)</Checkbox>
                                        <Checkbox>Speed Limiter</Checkbox>
                                        <Checkbox>Electric Windows</Checkbox>
                                        <Checkbox>CD/MP3/Bluetooth</Checkbox>
                                    </div>
                                    <a className='text-[13px] text-[#5c3cfc] font-semibold cursor-pointer hover:underline' onClick={handleshowmore} id='showbtn'>Show more</a>
                                    <a className='text-[13px] text-[#5c3cfc] font-semibold cursor-pointer hover:underline hidden' onClick={handleshowless} id='lessbtn'>Show less</a>
                                </div>
                                <div className='filter-capacity mb-2'>
                                    <p className='text-[13px] font-semibold mb-1'>Capacity</p>
                                    <Select className='w-[100%]'>
                                        <Option>2</Option>
                                        <Option>4</Option>
                                        <Option>5</Option>
                                        <Option>more</Option>
                                    </Select>
                                </div>
                                <div className='filter-fuel mb-3'>
                                    <p className='text-[13px] font-semibold mb-1'>Fuel Type</p>
                                    <Select className='w-[100%]'>
                                        <Option>Petrol</Option>
                                        <Option>Diesel</Option>
                                        <Option>Hybrid</Option>
                                        <Option>Electric</Option>
                                    </Select>
                                </div>
                                <div className='filter-Vehicletype mb-3'>
                                    <p className='text-[13px] font-semibold mb-1'>Vehicle type</p>
                                    <div>
                                        <Checkbox>Cars</Checkbox>
                                        <Checkbox>SUV</Checkbox>
                                        <Checkbox>Truck</Checkbox>
                                        <Checkbox>Van</Checkbox>
                                    </div>
                                </div>
                                <div className='filter-reviews'>
                                    <p className='text-[13px] font-semibold mb-1'>Reviews</p>
                                    <Flex gap="middle" vertical>
                                        <Rate tooltips={desc} onChange={setRate} value={rat} />
                                    </Flex>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-section ml-3'>
                    <div className='main-content p-3'>
                        <div className='flex justify-between items-center gap-3 mb-3'>
                            <div className='sort-component  w-[220px]'>
                                <Select className='w-[100%]' placeholder="Sort by">
                                    <Option>Newest</Option>
                                    <Option>Oldest</Option>
                                    <Option>Highest Price</Option>
                                    <Option>Lowest Price</Option>
                                </Select>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='pt-1 pb-1 pl-3 pr-3 bg-black text-white text-[13px] rounded-[20px]'>Map View</button>
                                <button className='pt-1 pb-1 pl-3 pr-3 bg-black  text-[13px] text-white rounded-[20px]'>Card View</button>
                            </div>
                        </div>
                        <div className='header border-b-[1px]'>
                            <div>
                                <a href="">Cars</a>
                            </div>
                        </div>
                        <div className='cars-components mt-5 flex gap-[12px] flex-wrap'>
                            <div className='car-card w-[419.5px] h-[384.41px]'>
                                <div className="car-card-components  h-fit border rounded-lg shadow-sm">
                                    <img src="../../src/assets/carmain12.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                                    <div className='mt-2 p-2'>
                                        <div className='flex justify-between'>
                                            <div >
                                                <p className='text-[12px] mb-1'>Cars</p>
                                                <p className='text-[15px] font-semibold'>Bmw cs model 2019</p>
                                            </div>
                                            <div>
                                                <p><span className='font-bold'>$100 </span>/ Day</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 mt-2  '>
                                            <p className='flex gap-3 items-center'>
                                                <AirlineSeatReclineNormalIcon /><span className='text-[13px]'>5 seats
                                                </span></p>
                                            <p className='flex gap-3 items-center'>
                                                <LocalGasStationIcon /><span className='text-[13px]'>Automatic
                                                </span></p>
                                            <div className='flex gap-3 items-center'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                <p className='text-[13px]'>disel</p>
                                            </div>
                                        </div>
                                        <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon /></p>
                                        <div>
                                        </div>
                                        <div className='mt-1 text-[12px] text-gray-400 border-t-[1px] pt-1'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='car-card w-[419.5px] h-[384.41px]'>
                                <div className="car-card-components  h-fit border rounded-lg shadow-sm">
                                    <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                                    <div className='mt-2 p-2'>
                                        <div className='flex justify-between'>
                                            <div >
                                                <p className='text-[12px] mb-1'>Cars</p>
                                                <p className='text-[15px] font-semibold'>Bmw cs model 2019</p>
                                            </div>
                                            <div>
                                                <p><span className='font-bold'>$100 </span>/ Day</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 mt-2  '>
                                            <p className='flex gap-3 items-center'>
                                                <AirlineSeatReclineNormalIcon /><span className='text-[13px]'>5 seats
                                                </span></p>
                                            <p className='flex gap-3 items-center'>
                                                <LocalGasStationIcon /><span className='text-[13px]'>Automatic
                                                </span></p>
                                            <div className='flex gap-3 items-center'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                <p className='text-[13px]'>disel</p>
                                            </div>
                                        </div>
                                        <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon /></p>
                                        <div>
                                        </div>
                                        <div className='mt-1 text-[12px] text-gray-400 border-t-[1px] pt-1'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='car-card w-[419.5px] h-[384.41px]'>
                                <div className="car-card-components  h-fit border rounded-lg shadow-sm">
                                    <img src="../../src/assets/carmain10.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                                    <div className='mt-2 p-2'>
                                        <div className='flex justify-between'>
                                            <div >
                                                <p className='text-[12px] mb-1'>Cars</p>
                                                <p className='text-[15px] font-semibold'>Bmw cs model 2019</p>
                                            </div>
                                            <div>
                                                <p><span className='font-bold'>$100 </span>/ Day</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 mt-2  '>
                                            <p className='flex gap-3 items-center'>
                                                <AirlineSeatReclineNormalIcon /><span className='text-[13px]'>5 seats
                                                </span></p>
                                            <p className='flex gap-3 items-center'>
                                                <LocalGasStationIcon /><span className='text-[13px]'>Automatic
                                                </span></p>
                                            <div className='flex gap-3 items-center'>
                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                <p className='text-[13px]'>disel</p>
                                            </div>
                                        </div>
                                        <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon /></p>
                                        <div>
                                        </div>
                                        <div className='mt-1 text-[12px] text-gray-400 border-t-[1px] pt-1'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarHome