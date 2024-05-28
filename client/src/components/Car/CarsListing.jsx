import React, { useState, useRef, useEffect } from 'react'
import { Checkbox } from 'antd';
import { Radio, Select, Rate, Flex, Slider, Modal } from 'antd';
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
import carmake from '../../data/carmake.js';


const featuresList = [
    "Cruise Control",
    "Airbags",
    "Leather Seats",
    "Navigation/GPS System",
    "Air Conditioning",
    "Sunroof",
    "Remote Central Locking",
    "Alloy Wheels",
    "ESP",
    "Rear Parking Radar",
    "Onboard Computer",
    "Child seat",
    "Rear View Camera",
    "ABS",
    "Speed Limiter",
    "Electric Windows",
    "CD/MP3/Bluetooth"
];



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
    const [rat, setRate] = useState('');
    const [price, setPrice] = useState([0, 999]);
    // const handlechange = (e, value) => {
    //     setPrice(value);
    //     console.log(price[0]);
    // }

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
        features.style.height = '180px';
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

    const [seats, setseats] = useState();
    const [transmission, settransmission] = useState('');
    const [fueltype, setfueltype] = useState('');
    const [type, setType] = useState('all');
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const location = searchParams.get('where');
    const days = searchParams.get('days');
    const startdate = searchParams.get('startdate');
    const enddate = searchParams.get('enddate');
    const [make, setmake] = useState(searchParams.get('make'));
    const [sliderValue, setSliderValue] = useState([194, 499]);

    const handleSliderChange = (value) => {
        setSliderValue(value);
        setpricemin(value[0]);
        setpricemax(value[1]);
    };
    const handleTextFieldChange = (index) => (event) => {
        const newValue = event.target.value.trim() !== '' ? parseInt(event.target.value) : 0;
        const newSliderValue = [...sliderValue];
        newSliderValue[index] = newValue;
        setSliderValue(newSliderValue);
        if (index === 0) {
            setpricemin(newValue);
        } else if (index === 1) {
            setpricemax(newValue);
        }
    };
    
    const onChange = (e) => {
        settransmission(e.target.value);
    };
    const handleCheckboxChange = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter(item => item !== feature))
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };
    const handleClear = () => {
        setSelectedFeatures([]);
        setpricemin('');
        setSliderValue([0, 0])
        setpricemax('');
        setmake(searchParams.get('make'));
        setseats('');
        settransmission('');
        setfueltype('');
        setType('all');
    }
    const handletypechaneg = (e) => {
        setType(e.target.value);
    }
    const [isAsideVisible, setIsAsideVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsAsideVisible(window.innerWidth > 732);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [modal, setmodal] = useState(false);
    const closeModal = () => {
        setmodal(false);
    }

    return (
        <div className='scroll-smooth carhome-section max-[732px]:block max-[732px]:m-[20px]  bg-white h-fit m-[80px] mt-0'>
            {isAsideVisible &&
                <div className='aside border-[0.5px] border-gray-100 h-fit rounded-[15px]'>
                    <div className='filter-components'>
                        <div className='filter-content  pb-[30px]'>
                            <div className='flex justify-between mb-4 items-center border-b-[1px] p-3 rounded-tr-[15px] rounded-tl-[15px] bg-[#f4f4fc]'>
                                <p className='text-[14px] font-bold'>Filter</p>
                                <button className='text-[12px] text-[black] border border-transparent hover:bg-gray-200 hover:border pl-2 font-semibold pr-2 pt-1 pb-1 rounded-md' onClick={handleClear}>Clear All Filters</button>
                            </div>
                            <div className="p-5">
                                <div className='filter-price mb-3'>
                                    <p className='text-[13px] font-bold text-gray-400'>Price</p>
                                    <Slider
                                        range={{
                                            draggableTrack: true,
                                        }}
                                        defaultValue={[194, 499]}
                                        max={2000}
                                        trackStyle={{ backgroundColor: 'black' }}
                                        handleStyle={{
                                            backgroundColor: 'black',
                                            borderColor: 'black',
                                        }}

                                        onChange={handleSliderChange}
                                    />
                                    <div className='flex gap-3 mt-5'>
                                        <TextField
                                            id="outlined-number"
                                            label="Min (DH)"
                                            type="text"
                                            value={sliderValue[0]}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleTextFieldChange(0)}
                                        />
                                        <TextField
                                            id="outlined-number"
                                            label="Max (DH)"
                                            type="text"
                                            value={sliderValue[1]}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleTextFieldChange(1)}
                                        />
                                    </div>


                                </div>
                                <div className='filter-transmission mb-3'>
                                    <div>
                                        <p className='text-[13px]  mb-2 font-bold text-gray-400'>Transmission</p>
                                        <Radio.Group onChange={onChange} className='flex flex-col'>
                                            <Radio value={"Manual"} className='text-[13px]'>Manule</Radio>
                                            <Radio value={"Automatic"} className='text-[13px]'>Automatic</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className='filter-make mb-2 w-[100%]' >
                                    <p className='text-[13px] font-bold text-gray-400 mb-1w-[100%]'>Make</p>
                                    <Select placeholder="Make" value={make} onChange={(value) => setmake(String(value))} className='w-[100%]'>
                                        {carmake.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className='filter-features mb-3'>
                                    <p className='text-[13px] font-bold text-gray-400 mb-2'>Features</p>
                                    <div className='flex flex-col h-[180px] overflow-hidden p-2 mb-1' id='features'>
                                        {featuresList.map((feature, index) => (
                                            <div key={index}>
                                                <label className='text-[13px]'>
                                                    <Checkbox
                                                        className='mr-1'
                                                        type="checkbox"
                                                        checked={selectedFeatures.includes(feature)}
                                                        onChange={() => handleCheckboxChange(feature)}
                                                    />
                                                    {feature}

                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <a className='text-[13px] text-[black] font-semibold cursor-pointer hover:underline' onClick={handleshowmore} id='showbtn'>Show more</a>
                                    <a className='text-[13px] text-[black] font-semibold cursor-pointer hover:underline hidden' onClick={handleshowless} id='lessbtn'>Show less</a>
                                </div>
                                <div className='filter-capacity mb-2'>
                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Capacity</p>
                                    <Select className='w-[100%]' value={seats} onChange={(value) => setseats(value)}>
                                        <Option key={1} value={2}>2</Option>
                                        <Option key={2} value={4}>4</Option>
                                        <Option key={3} value={5}>5</Option>
                                        <Option key={4} value={'more'}>more</Option>
                                    </Select>
                                </div>
                                <div className='filter-fuel mb-3'>
                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Fuel Type</p>
                                    <Select className='w-[100%]' value={fueltype} onChange={(value) => setfueltype(value)}>
                                        <Option key={55} value={'Petrol'}>Petrol</Option>
                                        <Option key={56} value={'Diesel'}>Diesel</Option>
                                        <Option key={57} value={'Hybrid'}>Hybrid</Option>
                                        <Option key={58} value={'Electric'}>Electric</Option>
                                    </Select>
                                </div>
                                <div className='filter-Vehicletype mb-3'>
                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Vehicle type</p>
                                    <div>
                                        <Radio.Group onChange={handletypechaneg} className='flex flex-col'>
                                            <Radio value={"Cars"} className='text-[13px]'>Cars</Radio>
                                            <Radio value={"Suv"} className='text-[13px]'>Suv</Radio>
                                            <Radio value={"Sedan"} className='text-[13px]'>Sedan</Radio>
                                            <Radio value={"Coupe"} className='text-[13px]'>Coupe</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                {/* <div className='filter-reviews'>
                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Reviews</p>
                                    <Flex gap="middle" vertical>
                                        <Rate tooltips={desc} onChange={setRate} value={rat} />
                                    </Flex>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='main-section ml-3  max-[732px]:ml-0'>
                <div className='main-content p-3 '>
                    <div className='flex justify-between items-center gap-3 mb-5'>
                        <div className='sort-component  w-[220px]' >
                            <Select className='w-[100%]' placeholder="Sort by" value={sort} onChange={(value) => setSort(value)}>
                                <Option key={1} value='Newest'>Newest</Option>
                                <Option key={2} value='Oldest'>Oldest</Option>
                                <Option key={3} value='high'>Highest Price</Option>
                                <Option key={4} value='low'>Lowest Price</Option>
                            </Select>
                        </div>
                        {!isAsideVisible &&
                            <>
                                <div>
                                    <div className='w-[100px] flex items-center justify-center '>
                                        <div className='flex items-center justify-center  h-[30px] w-[100%] rounded-[5px]  transition-all duration-75 cursor-pointer max-[780px]:bg-[black] bg-[black] hover:bg-[#5a5a5a] m-auto '>
                                            <button className='text-white font-semibold' onClick={() => setmodal(true)}>Filter</button>
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    title="Filter"
                                    visible={modal}
                                    onCancel={closeModal}
                                    footer={null}
                                    style={
                                        {
                                            minWidth: "80%",
                                        }
                                    }
                                >
                                    <div className='filter-components'>
                                        <div className='filter-content  pb-[30px]'>
                                            <div className='flex justify-between mb-4 items-center border-b-[1px] p-3 rounded-tr-[15px] rounded-tl-[15px] bg-[#f4f4fc]'>
                                                <p className='text-[14px] font-bold'>Filter</p>
                                                <button className='text-[12px] text-[black] border border-transparent hover:bg-gray-200 hover:border pl-2 font-semibold pr-2 pt-1 pb-1 rounded-md' onClick={handleClear}>Clear All Filters</button>
                                            </div>
                                            <div className="p-5">
                                                <div className='filter-price mb-3'>
                                                    <p className='text-[13px] font-bold text-gray-400'>Price</p>
                                                    <Slider
                                                        range={{
                                                            draggableTrack: true,
                                                        }}
                                                        defaultValue={[194, 499]}
                                                        max={999}
                                                        trackStyle={{ backgroundColor: 'black' }}
                                                        handleStyle={{
                                                            backgroundColor: 'black',
                                                            borderColor: 'black',
                                                        }}

                                                        onChange={handleSliderChange}
                                                    />
                                                    <div className='flex gap-3 mt-5'>
                                                        <TextField
                                                            id="outlined-number"
                                                            label="Max (DH)"
                                                            type="text"
                                                            value={sliderValue[0]}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                        <TextField
                                                            id="outlined-number"
                                                            label="Max (DH)"
                                                            type="text"
                                                            value={sliderValue[1]}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>


                                                </div>
                                                <div className='filter-transmission mb-3'>
                                                    <div>
                                                        <p className='text-[13px]  mb-2 font-bold text-gray-400'>Transmission</p>
                                                        <Radio.Group onChange={onChange} className='flex flex-col'>
                                                            <Radio value={"Manual"} className='text-[13px]'>Manule</Radio>
                                                            <Radio value={"Automatic"} className='text-[13px]'>Automatic</Radio>
                                                        </Radio.Group>
                                                    </div>
                                                </div>
                                                <div className='filter-make mb-2 w-[100%]' >
                                                    <p className='text-[13px] font-bold text-gray-400 mb-1w-[100%]'>Make</p>
                                                    <Select placeholder="Make" value={make} onChange={(value) => setmake(String(value))} className='w-[100%]'>
                                                        {carmake.map((r, index) => (
                                                            <Option key={index} required value={r}>{r}</Option>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div className='filter-features mb-3'>
                                                    <p className='text-[13px] font-bold text-gray-400 mb-2'>Features</p>
                                                    <div className='flex flex-col h-[180px] overflow-hidden p-2 mb-1' id='features'>
                                                        {featuresList.map((feature, index) => (
                                                            <div key={index}>
                                                                <label className='text-[13px]'>
                                                                    <Checkbox
                                                                        className='mr-1'
                                                                        type="checkbox"
                                                                        checked={selectedFeatures.includes(feature)}
                                                                        onChange={() => handleCheckboxChange(feature)}
                                                                    />
                                                                    {feature}

                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <a className='text-[13px] text-[black] font-semibold cursor-pointer hover:underline' onClick={handleshowmore} id='showbtn'>Show more</a>
                                                    <a className='text-[13px] text-[black] font-semibold cursor-pointer hover:underline hidden' onClick={handleshowless} id='lessbtn'>Show less</a>
                                                </div>
                                                <div className='filter-capacity mb-2'>
                                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Capacity</p>
                                                    <Select className='w-[100%]' value={seats} onChange={(value) => setseats(value)}>
                                                        <Option key={1} value={2}>2</Option>
                                                        <Option key={2} value={4}>4</Option>
                                                        <Option key={3} value={5}>5</Option>
                                                        <Option key={4} value={'more'}>more</Option>
                                                    </Select>
                                                </div>
                                                <div className='filter-fuel mb-3'>
                                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Fuel Type</p>
                                                    <Select className='w-[100%]' value={fueltype} onChange={(value) => setfueltype(value)}>
                                                        <Option key={55} value={'Petrol'}>Petrol</Option>
                                                        <Option key={56} value={'Diesel'}>Diesel</Option>
                                                        <Option key={57} value={'Hybrid'}>Hybrid</Option>
                                                        <Option key={58} value={'Electric'}>Electric</Option>
                                                    </Select>
                                                </div>
                                                <div className='filter-Vehicletype mb-3'>
                                                    <p className='text-[13px] font-bold text-gray-400 mb-1'>Vehicle type</p>
                                                    <div>
                                                        <Radio.Group onChange={handletypechaneg} className='flex flex-col'>
                                                            <Radio value={"Cars"} className='text-[13px]'>Cars</Radio>
                                                            <Radio value={"Suv"} className='text-[13px]'>Suv</Radio>
                                                            <Radio value={"Sedan"} className='text-[13px]'>Sedan</Radio>
                                                            <Radio value={"Coupe"} className='text-[13px]'>Coupe</Radio>
                                                        </Radio.Group>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </>
                        }
                        {/* <div className='flex items-center gap-2'>
                            <button className='pt-1 pb-1 pl-3 pr-3 border hover:bg-[#7357ff] text-[#7357ff] hover:text-white font-bold text-[13px] rounded-[20px]'> <MapOutlinedIcon className='mr-1' />Map View</button>
                            <button className='pt-1 pb-1 pl-3 pr-3  border hover:bg-[#7357ff] text-[13px] font-bold text-[#7357ff] hover:text-white rounded-[20px]'><DashboardOutlinedIcon className='mr-1' />Card View</button>
                        </div> */}
                    </div>
                    <div className='header '>
                        <div className='scrollbar-content flex items-center relative max-w-[80%]'>
                            {/* <div className='h-[24px] w-[50px]'  >
                        <KeyboardDoubleArrowLeftIcon className='absolute  top-[4px] felx items-center cursor-pointer text-[#7357ff]' onClick={sliderLeft} id='leftbtnslider' />
                    </div> */}
                            <div className='flex gap-4 w-[100%] items-center overflow-x-scroll scroll-smooth ' id='scrollbareffect'

                            >
                                <button href="" className={type === "all" ? 'text-[12px] font-bold border border-[black] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[black] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[black]'} onClick={() => toggle("all")}>All</button>
                                <button href="" className={type === "Suv" ? 'text-[12px] font-bold border border-[black] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[black] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[black]'} onClick={() => toggle("Suv")}>Suv</button>
                                <button href="" className={type === "Sedan" ? 'text-[12px] font-bold border border-[black] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[black] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[black]'} onClick={() => toggle("Sedan")}>Sedan</button>
                                <button href="" className={type === "Coupe" ? 'text-[12px] font-bold border border-[black] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[black] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[black]'} onClick={() => toggle("Coupe")}>Coupe</button>
                                <button href="" className={type === "Cars" ? 'text-[12px] font-bold border border-[black] pl-5 pr-5 pt-1 pb-1 rounded-[20px] bg-[black] text-white' : 'text-[12px] font-bold border border-gray-200 pl-5 pr-5 pt-1 pb-1 rounded-[20px] text-[black]'} onClick={() => toggle("Cars")}>Cars</button>
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
                                minprice={pricemin}
                                maxprice={pricemax}
                                transmission={transmission}
                                make={make}
                                features={selectedFeatures}
                                seats={seats}
                                fueltype={fueltype}
                                startDate={startdate}
                                endDate={enddate}



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