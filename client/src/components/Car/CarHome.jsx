import React, { useState, useRef,useEffect } from 'react'
import { Checkbox } from 'antd';
import { Radio, Select, Rate, Flex, message } from 'antd';
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
dayjs.extend(customParseFormat);
import { Link, Outlet, useNavigate } from 'react-router-dom';




const { RangePicker } = DatePicker;
const disabledDate = (current) => {
    // Disable dates before the current day
    return current && current < dayjs().startOf('day');
};

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
function CarHome() {
    const navigate = useNavigate();
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
    const onchange = (dates, dateString) => {
        setDateRange(dates)
        const startDateString = String(dateString[0]);
        const endDateString = String(dateString[1]);
        setstartdate(dayjs(startDateString).format('YYYY-MM-DD'))
        setenddate(dayjs(endDateString).format('YYYY-MM-DD'))
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const differenceInMilliseconds = endDate - startDate;
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        console.log('Difference in days:', differenceInDays);
        setdays(differenceInDays)
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
        settogglestate(index);
    }
    const [sort, setSort] = useState('');
    const [pricemin, setpricemin] = useState('');
    const [pricemax, setpricemax] = useState('');
    const [make, setmake] = useState('');
    const [seats, setseats] = useState();
    const [transmission, settransmission] = useState('');
    const [fueltype, setfueltype] = useState('');
    const [type, setType] = useState('');
    const [features, setfeatures] = useState([]);
    const [location, setlocation] = useState('');
    console.log(sort)
    const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [days, setdays] = useState();

    const handleSearch = () => {
        if (!startdate || !enddate || !location) {
            message.error(' location or date is missed');
            return;
        }
        if (location.trim() && dateRange && dateRange[0] && dateRange[1]) {
            localStorage.setItem('lastquerySearch', JSON.stringify(lastquerySearch));
            navigate(`search?where=${location}&startdate=${startdate}&enddate=${enddate}&days=${days}`);
        }
    };
    const lastquerySearch = {
        location: location,
        startdate: startdate,
        enddate: enddate,
        days: days
    }
    const [isAsideVisible, setIsAsideVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsAsideVisible(window.innerWidth < 781);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='scroll-smooth min-h-[200vh]' style={{ fontFamily: "Space Grotesk" }}>
            {/* <div className='location-section w-[100%]  mb-7'>
                <div className='location-content-section-carhome gap-2 rounded-[30px]  border-gray-100 border-[0.2px] shadow-sm w-fit pl-3 pr-3 pt-1 pb-1'>
                    <div className='border-r-[1px] pr-5'>
                        <label htmlFor="" className='pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                        <input type="text" className='border-none w-[100%] h-[20px] rounded-[2px]  pl-2 text-[13px]' placeholder='Enter Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                    </div>
                    <div className='flex flex-col justify-center '>
                        <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Check in-out</label>
                        <div className='flex items-center w-[100%]'>
                            <Space direction="vertical" size={12}>
                                <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} />
                            </Space>
                        </div>
                    </div>
                    <div className='flex items-center justify-center  rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer bg-[black] hover:bg-[#4e4848] m-auto'>
                        <button onClick={handleSearch}><SearchIcon className='text-white' /></button>
                    </div>
                </div>
            </div> */}
            <div className='  w-[60%] max-[984px]:w-[80%]  max-[500px]:w-[80%] max-[780px]:bottom-[40%] bottom-[60%] tr z-[15] mb-7  mt-5 m-auto'>
                <div className='max-[780px]:flex max-[780px]:flex-col max-[780px]:gap-2 max-[780px]:w-[100%] max-[780px]:rounded-[0px] max-[780px]:shadow-none  gap-2 rounded-[30px] shadow-md bg-[white]  w-[auto%] p-[5px] pl-2 pr-2 flex m-auto'>
                    <div className='border-r-[1px]   w-[100%] bg-white p-1 max-[780px]:border-transparent max-[780px]:border-[1px]  max-[780px]:rounded-[5px] max-[780px]:shadow-md'>
                        <label htmlFor="" className='min-[780px]:pl-2 text-[13px] font-bold text-gray-500'>Location</label>
                        <input type="text" className='border-none w-[100%] max-[780px]:mt-1 max-[780px]:mb-2 h-[20px] rounded-[7px] pl-2 text-[13px] bg-transparent text-black outline-none' placeholder='Enter Location' value={location} onChange={(e) => setlocation(e.target.value)} />
                    </div>
                    <div className='flex flex-col justify-center border-r-[1px]  w-[100%] max-[780px]:border-transparent max-[780px]:border-[1px] max-[780px]:pl-1 max-[780px]:pt-1 max-[780px]:rounded-[5px] max-[780px]:shadow-md '>
                        <label htmlFor="" className='text-[13px] font-bold text-gray-500'>Pick up / Drop off</label>
                        <div className='flex items-center justify-between w-[100%] '>
                            <Space direction="vertical" size={12} className='bg-transparent'>
                                <RangePicker disabledDate={disabledDate} onChange={onchange} format={dateFormat} className='bg-transparent text-black max-[780px]:mt-1 max-[780px]:mb-2  ' />
                            </Space>
                        </div>
                    </div>
                    <div className='w-[25%] flex items-center justify-center max-[780px]:w-[100%]'>
                        <div className='flex items-center justify-center  max-[780px]:w-[100%] rounded-[50%] h-[40px] w-[40px]  transition-all duration-75 cursor-pointer max-[780px]:bg-[black] bg-[black] hover:bg-[#5a5a5a] m-auto  max-[780px]:rounded-[10px]'>
                            <button onClick={handleSearch} className='text-white font-semibold'>
                                {isAsideVisible ?  'Search for Cars':<SearchIcon /> }
                                </button>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default CarHome