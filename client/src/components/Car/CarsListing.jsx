import React, { useState, useRef } from 'react'
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
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carcomponents from './Carcomponents';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SiMercedes } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useParams } from 'react-router-dom';
dayjs.extend(customParseFormat);





const { Option } = Select;
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];











function CarsListing() {
    const [valuee, setValuee] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValuee(newValue);
    }
    const dateFormat = 'YYYY/MM/DD';
    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };
    const [value, setValue] = useState(1);
    const [rat, setRate] = useState('');
    const [price, setPrice] = useState([0, 999]);
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
    const onchange = (date, dateString) => {
        const startDateString = String(dateString[0]);
        const endDateString = String(dateString[1]);
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const differenceInMilliseconds = endDate - startDate;
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        console.log('Difference in days:', differenceInDays);
    }
    const sliderLeft = () => {
        const slider = document.getElementById('scrollbareffect');
        slider.scrollLeft -= 100;
    }
    const sliderRight = () => {
        const slider = document.getElementById('scrollbareffect');
        slider.scrollLeft += 100;
    }
    const [togglestate, settogglestate] = useState("");
    const toggle = (index) => {
        setType(index);
    }
    const [sort, setSort] = useState(null);
    const [pricemin, setpricemin] = useState('');
    const [pricemax, setpricemax] = useState('');
    const [make, setmake] = useState('');
    const [seats, setseats] = useState();
    const [transmission, settransmission] = useState('');
    const [fueltype, setfueltype] = useState('');
    const [type, setType] = useState('all');
    const [features, setfeatures] = useState([]);

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const location = searchParams.get('where');
    const days = searchParams.get('days');
    console.log(sort)

    return (
        <div className='carhome-section  bg-white h-fit m-[80px] mt-0'>
            <div className='aside border-[0.5px] border-gray-100 h-fit rounded-[15px]'>
                <div className='filter-components'>
                    <div className='filter-content  pb-[30px]'>
                        <div className='flex justify-between mb-4 items-center border-b-[1px] p-3 rounded-tr-[15px] rounded-tl-[15px] bg-[#f4f4fc]'>
                            <p className='text-[14px] font-bold'>Filter</p>
                            <button className='text-[12px] text-[#5c3cfc] border border-transparent hover:bg-gray-200 hover:border pl-2 font-semibold pr-2 pt-1 pb-1 rounded-md'>Clear All Filters</button>
                        </div>
                        <div className="p-5">
                            <div className='filter-price mb-3'>
                                <p className='text-[13px] font-bold text-gray-400'>Price</p>
                                <Slider valueLabelDisplay="auto" value={price} onChange={handlechange} max={999} />
                                <div className='flex gap-3 mt-2'>
                                    <div>
                                        <TextField
                                            id="outlined-number"
                                            label="Min (DH)"
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
                                            label="Max (DH)"
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
                                    <p className='text-[13px]  mb-2 font-bold text-gray-400'>Transmission</p>
                                    <Radio.Group onChange={onChange} className='flex flex-col'>
                                        <Radio value={"mohssine"} className='text-[13px]'>Manule</Radio>
                                        <Radio value={"Automatic"} className='text-[13px]'>Automatic</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='filter-make mb-2' >
                                <p className='text-[13px] font-bold text-gray-400 mb-1'>Make</p>
                                <Select onChange={onChangee} className='w-[100%]'>
                                    <Option value={"mohssine"}>mohssine</Option>
                                    <Option value={"yassine"}>mohssine</Option>
                                </Select>
                            </div>
                            {/* <div className='filter-model mb-3'>
                        <p className='text-[13px] font-bold text-gray-400 mb-1'>model</p>
                        <Select onChange={onChangee} className='w-[100%]'>
                            <Option value={"mohssine"}>mohssine</Option>
                            <Option value={"yassine"}>mohssine</Option>
                        </Select>
                    </div> */}
                            <div className='filter-features mb-3'>
                                <p className='text-[13px] font-bold text-gray-400 mb-2'>Features</p>
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
                                <p className='text-[13px] font-bold text-gray-400 mb-1'>Capacity</p>
                                <Select className='w-[100%]'>
                                    <Option>2</Option>
                                    <Option>4</Option>
                                    <Option>5</Option>
                                    <Option>more</Option>
                                </Select>
                            </div>
                            <div className='filter-fuel mb-3'>
                                <p className='text-[13px] font-bold text-gray-400 mb-1'>Fuel Type</p>
                                <Select className='w-[100%]'>
                                    <Option>Petrol</Option>
                                    <Option>Diesel</Option>
                                    <Option>Hybrid</Option>
                                    <Option>Electric</Option>
                                </Select>
                            </div>
                            <div className='filter-Vehicletype mb-3'>
                                <p className='text-[13px] font-bold text-gray-400 mb-1'>Vehicle type</p>
                                <div>
                                    <Checkbox>Cars</Checkbox>
                                    <Checkbox>SUV</Checkbox>
                                    <Checkbox>Truck</Checkbox>
                                    <Checkbox>Van</Checkbox>
                                </div>
                            </div>
                            <div className='filter-reviews'>
                                <p className='text-[13px] font-bold text-gray-400 mb-1'>Reviews</p>
                                <Flex gap="middle" vertical>
                                    <Rate tooltips={desc} onChange={setRate} value={rat} />
                                </Flex>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-section ml-3 '>
                <div className='main-content p-3'>
                    <div className='flex justify-between items-center gap-3 mb-5'>
                        <div className='sort-component  w-[220px]' >
                            <Select className='w-[100%]' placeholder="Sort by" value={sort} onChange={(value) => setSort(value)}>
                                <Option key={1} value='Newest'>Newest</Option>
                                <Option key={2} value='Oldest'>Oldest</Option>
                                <Option key={3} value='high'>Highest Price</Option>
                                <Option key={4} value='low'>Lowest Price</Option>
                            </Select>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='pt-1 pb-1 pl-3 pr-3 border hover:bg-[#7357ff] text-[#7357ff] hover:text-white font-bold text-[13px] rounded-[20px]'> <MapOutlinedIcon className='mr-1' />Map View</button>
                            <button className='pt-1 pb-1 pl-3 pr-3  border hover:bg-[#7357ff] text-[13px] font-bold text-[#7357ff] hover:text-white rounded-[20px]'><DashboardOutlinedIcon className='mr-1' />Card View</button>
                        </div>
                    </div>
                    <div className='header '>
                        {/* <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={valuee} onChange={handleChange} aria-label="basic tabs example"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab icon={<SiMercedes className='text-[15px]'/>} iconPosition="start" label="Bmw" />
                        
                            <Tab icon={<SiBmw className='text-[15px]'/>} iconPosition="start" label="Mercedes" />
                            <Tab icon={<SiAudi className='text-[26px]'/>} iconPosition="start" label="Audi" />
                            <Tab label="Audi" />
                            <Tab label="Audi" />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={valuee} index={0}>
                        <div className='cars-components mt-5 max-w-[100%]'>
                            <Carcomponents />
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={valuee} index={1}>
                        <div className='cars-components mt-5 max-w-[100%]'>

                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={valuee} index={2}>
                        <div className='cars-components mt-5 max-w-[100%]'>
                            <Carcomponents />
                        </div>
                    </CustomTabPanel>
                    
                </Box> */}
                        <div className='scrollbar-content flex items-center relative max-w-[80%]'>
                            {/* <div className='h-[24px] w-[50px]'  >
                        <KeyboardDoubleArrowLeftIcon className='absolute  top-[4px] felx items-center cursor-pointer text-[#7357ff]' onClick={sliderLeft} id='leftbtnslider' />
                    </div> */}
                            <div className='flex gap-4 w-[100%] items-center overflow-x-scroll scroll-smooth ' id='scrollbareffect'

                            >
                                <button href="" className={type === "all" ? 'text-[12px] font-bold border border-[#7357ff] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[#7357ff] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[#7357ff]'} onClick={() => toggle("all")}>All</button>
                                <button href="" className={type === "suv" ? 'text-[12px] font-bold border border-[#7357ff] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[#7357ff] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[#7357ff]'} onClick={() => toggle("suv")}>Suv</button>
                                <button href="" className={type === "sedan" ? 'text-[12px] font-bold border border-[#7357ff] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[#7357ff] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[#7357ff]'} onClick={() => toggle("sedan")}>Sedan</button>
                                <button href="" className={type === "coupe" ? 'text-[12px] font-bold border border-[#7357ff] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[#7357ff] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[#7357ff]'} onClick={() => toggle("coupe")}>Coupe</button>
                                <button href="" className={type === "cars" ? 'text-[12px] font-bold border border-[#7357ff] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[#7357ff] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[#7357ff]'} onClick={() => toggle("cars")}>Cars</button>
                            </div>
                            {/* <div className='h-[24px] w-[50px]' id='rightbtnslider'>
                        <KeyboardDoubleArrowRightIcon className='absolute  top-[4px] text-[#7357ff] cursor-pointer right-[0px] felx items-center' onClick={sliderRight} />
                    </div> */}
                        </div>
                        <div className='cars-components mt-5 max-w-[100%] h-fit felx items-center '>
                            <Carcomponents
                                days={days}
                                location={location}
                                sort={sort}
                                type={type}



                            />
                            {/* {togglestate && <Carcomponents type={togglestate} />} */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarsListing