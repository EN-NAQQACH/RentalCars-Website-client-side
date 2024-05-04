
import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, Radio, Input, Select, Checkbox, Modal } from 'antd';
import '../cardeffect.css'
import generateYears from '../../data/caryear.js'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import RecommendIcon from '@mui/icons-material/Recommend';
import LightModeIcon from '@mui/icons-material/LightMode';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Form } from 'antd';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import distancee from '../../data/distance.json'
import CryptoJS from 'crypto-js';
import VerifyListing from '../ListYourCar/VerifyListing.jsx';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const steps = [
  {
    title: 'Your car',
    content: 'hi',
  },
  {
    title: 'Car availibility',
    content: 'Last-content',
  },
  {
    title: 'Car details',
    content: 'Last-content',
  },
  {
    title: 'Car photos',
    content: 'Last-content',
  },
  {
    title: 'Submit your listing',
    content: 'Last-content',
  },
];

const { Option } = Select;
const Steppers = () => {
  const [location, setLocation] = useState('');
  const [year, setYear] = useState();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');
  const [distance, setDistance] = useState('');
  const [mintrip, setmintrip] = useState();
  const [maxtrip, setmaxtrip] = useState();
  const [carseat, setcarseat] = useState();
  const [description, setdescription] = useState('');
  const [features, setfeatures] = useState([]);
  const [photos, setphotos] = useState([]);
  const [price, setprice] = useState('');
  const { token } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [current, setCurrent] = useState(() => {
    const storedStep = localStorage.getItem('currentStep');
    return storedStep ? parseInt(storedStep) : 0;
  });
  const handleuplaodphotos = (e) => {
    const newPhotos = e.target.files;
    setphotos(prevphotos => [...prevphotos, ...newPhotos])
  }
  console.log(photos)
  const handleDragPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedPhoto] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedPhoto);
    setphotos(items);
  };
  const handledeletephoto = (index) => {
    setphotos((prevphotos) => prevphotos.filter((_, i) => i !== index))
  };

  const handlechangecheckbox = (e) => {
    if (e.target.checked) {
      setfeatures(prev => [...prev, e.target.value]);
    } else {
      setfeatures(prev => {
        return [...prev.filter(item => item !== e.target.value)];
      });
    }
  }
  console.log(features);
  const next = () => {
    form
      .validateFields()
      .then(() => {
        storeDataLocalStorage();
        setCurrent((prevCurrent) => prevCurrent + 1);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  const storeDataLocalStorage = () => {
    const YourCar = {
      location: location,
      year: year,
      make: make,
      price: price,
      model: model,
      distance: distance,
      transmission: transmission,
      fuel: fuel,
      mintrip: mintrip,
      maxtrip: maxtrip,
    };
    localStorage.setItem('@D_C0', JSON.stringify(YourCar));
  }
  // useEffect(() => {
  //   const storedLocation = localStorage.getItem('location');
  //   const storedYear = localStorage.getItem('year');
  //   const storedMake = localStorage.getItem('make');
  //   const storedModel = localStorage.getItem('model');
  //   const storedTransmission = localStorage.getItem('transmission');
  //   const storedDistance = localStorage.getItem('distance');
  //   if (storedLocation) setLocation(storedLocation);
  //   if (storedYear) setYear(storedYear);
  //   if (storedMake) setMake(storedMake);
  //   if (storedModel) setModel(storedModel);
  //   if (storedTransmission) setTransmission(storedTransmission);
  //   if (storedDistance) setDistance(storedDistance);
  // }, []);
  useEffect(() => {
    // Store current step to localStorage
    localStorage.setItem('currentStep', current.toString());
  }, [current]);
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    height: 'fit-content',
    color: token.colorTextTertiary,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 20,
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const caryear = generateYears()

  const handlesubmitlisting = async (e) => {
    e.preventDefault();
    const featuresArray = Array.isArray(features) ? features : [features];
    const formData = new FormData();
    formData.append('location', location);
    formData.append('year', parseInt(year));
    formData.append('price', price);
    formData.append('make', make);
    formData.append('model', model);
    formData.append('transmission', transmission);
    formData.append('fuel', fuel);
    formData.append('distance', distance);
    formData.append('mintrip', mintrip);
    formData.append('maxtrip', maxtrip);
    formData.append('carseat', carseat);
    formData.append('description', description);
    featuresArray.forEach((feature, index) => {
      formData.append(`features[${index}]`, feature);
    });
    try {
      const response = await fetch('http://localhost:5600/api/addcar', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
        },
        body: formData,
      });
      const result = await response.json();
      if(result){
        message.success(result.message);
      }else{
        message.error(result.error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  return (
    <>
      <Steps current={current} items={items} />
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} className='mb-16'>
        {(current === 0 &&
          <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
            <div className='content-your-car '>
              <p className='font-bold text-black mb-3'>Your car</p>
              <div className='flex flex-col gap-3' >
                <div>
                  <label htmlFor=""> location</label>
                  <Form.Item
                    className='w-[400px]'
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: 'your car location!',
                      },
                    ]}
                  >
                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px] ' value={location} onChange={(e) => setLocation(e.target.value)} />
                  </Form.Item>
                </div>
                <div className='year-model-make grid grid-cols-3'>
                  <div>
                    <label htmlFor="caryear">Year</label>
                    <Form.Item
                      name="caryear"
                      rules={[
                        {
                          required: true,
                          message: 'Year!',
                        },
                      ]}
                    >
                      <Select placeholder="select year" value={year} onChange={(value) => setYear(value)}>
                        {caryear.map((r, index) => (
                          <Option key={index} required value={r}>{r}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="carmake"> Make</label>
                    <Form.Item
                      name="carmake"
                      rules={[
                        {
                          required: true,
                          message: 'car make!',
                        },
                      ]}
                    >
                      <Select placeholder="Make" value={make} onChange={(value) => setMake(String(value))}>
                        {caryear.map((r, index) => (
                          <Option key={index} required value={r}>{r}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="carmodel">Model</label>
                    <Form.Item
                      name="carmodel"
                      rules={[
                        {
                          required: true,
                          message: 'car model!',
                        },
                      ]}
                    >
                      <Select placeholder="Model" value={model} onChange={(value) => setModel(String(value))}>
                        {caryear.map((r, index) => (
                          <Option key={index} required value={r}>{r}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                </div>
                <div className='w-[500px]'>
                  <div className='flex'>
                    <div className='w-[100%]'>
                      <label htmlFor="distance">Distance</label>
                      <Form.Item
                        name="distance"
                        rules={[
                          {
                            required: true,
                            message: 'car distance!',
                          },
                        ]}
                      >
                        <Select placeholder="Model" className='mb-4' value={distance} onChange={(value) => setDistance(value)}>
                          {distancee.map((distance, index) => (
                            <Option key={index} required value={distance}>{distance}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                    <div className='w-[100%]'>
                      <label htmlFor="fuel">Distance</label>
                      <Form.Item
                        name="fuel"
                        rules={[
                          {
                            required: true,
                            message: 'car fuel!',
                          },
                        ]}
                      >
                        <Select placeholder="fuel" className='mb-4' value={fuel} onChange={(value) => setFuel(value)}>
                          <Option key="2" required value="Gasoline">Gasoline</Option>
                          <Option key="3" required value="Diesel">Diesel</Option>
                          <Option key="4" required value="Electric">Electric</Option>
                          <Option key="5" required value="Hybrid">Hybrid</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="Transition">Transition</label>
                    <Form.Item
                      name="Transition"
                      rules={[
                        {
                          required: true,
                          message: 'Transition!',
                        },
                      ]}
                    >
                      <Radio.Group value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                        <Radio value="Manual">Manual</Radio>
                        <Radio value="Automatic" >Automatic</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
          ||
          (current === 1 &&
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
              <div className='content-your-car '>
                <p className='font-bold text-black mb-3'>Car availibility</p>
                <div className='flex flex-col gap-3' >
                  <div>
                    <label htmlFor=""> price of your car (DH)</label>
                    <Form.Item
                      className='w-[400px]'
                      name="price"
                      rules={[
                        {
                          required: true,
                          message: 'price of your car',
                        },
                      ]}
                    >
                      <Input name='price' value={price} onChange={(e) => setprice(parseFloat(e.target.value))} />
                    </Form.Item>
                  </div>
                  <p>What’s the shortest and longest possible trip you’ll accept?</p>
                  <div>
                    <label htmlFor=""> Minimum trip duration (days)</label>
                    <Form.Item
                      className='w-[400px]'
                      name="min"
                      rules={[
                        {
                          required: true,
                          message: 'Minimum trip duration!',
                        },
                      ]}
                    >
                      <Select placeholder="recommanded 1 day" value={mintrip} onChange={(value) => setmintrip(parseInt(value))}>
                        <Option value="1" key={1} >1</Option>
                        <Option value="2" key={2} >2</Option>
                        <Option value="3" key={3} >3</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor=""> Maximum trip duration (days)</label>
                    <Form.Item
                      className='w-[400px]'
                      name="max"
                      rules={[
                        {
                          required: true,
                          message: 'Maximum trip duration!',
                        },
                      ]}
                    >
                      <Input min={4} name='max' type='number' placeholder="enter Maximum trip duration" className='rounded-[0px] ' value={maxtrip} onChange={(e) => setmaxtrip(parseInt(e.target.value))} />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>)
          ||
          (current === 2 &&
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
              <div className='content-your-car '>
                <p className='font-bold text-black mb-3'>Car Details</p>
                <div className='flex flex-col gap-2' >
                  <p>Car features</p>
                  <div className='grid grid-cols-3'>
                    <div className='flex flex-col gap-1'>
                      <Checkbox value={"Cruise Control"} onChange={(e) => handlechangecheckbox(e)}>Cruise Control</Checkbox>
                      <Checkbox value={"Airbags"} onChange={(e) => handlechangecheckbox(e)}>Airbags</Checkbox>
                      <Checkbox value={"Leather Seats"} onChange={(e) => handlechangecheckbox(e)}>Leather Seats</Checkbox>
                      <Checkbox value={"Navigation/GPS System"} onChange={(e) => handlechangecheckbox(e)}>Navigation/GPS System</Checkbox>
                      <Checkbox value={"Air Conditioning"} onChange={(e) => handlechangecheckbox(e)}>Air Conditioning</Checkbox>
                      <Checkbox value={"Sunroof"} onChange={(e) => handlechangecheckbox(e)}>Sunroof</Checkbox>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <Checkbox value={"Remote Central Locking"} onChange={(e) => handlechangecheckbox(e)}>Remote Central Locking</Checkbox>
                      <Checkbox value={"Alloy Wheels"} onChange={(e) => handlechangecheckbox(e)}>Alloy Wheels</Checkbox>
                      <Checkbox value={"ESP"} onChange={(e) => handlechangecheckbox(e)}>(ESP)</Checkbox>
                      <Checkbox value={"Rear Parking Radar"} onChange={(e) => handlechangecheckbox(e)}>Rear Parking Radar</Checkbox>
                      <Checkbox value={"Onboard Computer"} onChange={(e) => handlechangecheckbox(e)}>Onboard Computer</Checkbox>
                      <Checkbox value={"Child seat"} onChange={(e) => handlechangecheckbox(e)}>Child seat</Checkbox>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <Checkbox value={"Rear View Camera"} onChange={(e) => handlechangecheckbox(e)}>Rear View Camera</Checkbox>
                      <Checkbox value={"ABS"} onChange={(e) => handlechangecheckbox(e)}>Anti-lock Braking System (ABS)</Checkbox>
                      <Checkbox value={"Speed Limiter"} onChange={(e) => handlechangecheckbox(e)}>Speed Limiter</Checkbox>
                      <Checkbox value={"Electric Windows"} onChange={(e) => handlechangecheckbox(e)}>Electric Windows</Checkbox>
                      <Checkbox value={"CD/MP3/Bluetooth"} onChange={(e) => handlechangecheckbox(e)}>CD/MP3/Bluetooth</Checkbox>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="" className='text-[14px]'> car seats</label>
                    <Form.Item
                      className='w-[400px] mt-2'
                      name="car seats"
                      rules={[
                        {
                          required: true,
                          message: 'car seats!',
                        },
                      ]}
                    >
                      <Input placeholder="car seats" className='rounded-[0px]' value={carseat} onChange={(e) => setcarseat(parseInt(e.target.value))} />
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="" className='font-bold text-black'>Description</label>
                    <div className='mt-2'>
                      <p className='mb-2 text-[12px]'>Tell guests what makes your car unique and why they'll love driving it.</p>
                      <a type="primary" onClick={showModal} className='text-[#583cfa] hover:underline hover:text-[#583cfa]'>
                        what should i include ?
                      </a>
                      <Modal title="Writing tips" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="p-1">
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <DirectionsCarIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <p className="text-black font-bold">Cover the Basics</p>
                              <div className='text-[13px] text-[black] font-[200]'>Share basic info like your car’s cargo space, backseat legroom, and your cleanliness expectations to address common guest questions.</div>
                            </div>
                          </div>
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <SentimentSatisfiedAltIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <p className="text-black font-bold">Set the scene</p>
                              <div className='text-[13px] text-[black] font-[200]'>How is your car best enjoyed? A weekend adventure? Big date night? Inspire guests to book your car by helping them imagine themselves behind the wheel.</div>
                            </div>
                          </div>
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <AirlineSeatReclineExtraIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <p className="text-black font-bold">Highlight unique features</p>
                              <div className='text-[13px] text-[black] font-[200]'>List and describe a few of your car’s most attractive features to help guests get excited for their trip. Get creative!</div>
                            </div>
                          </div>
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <AutoAwesomeIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <p className="text-black font-bold">Showcase your service</p>
                              <div className='text-[13px] text-[black] font-[200]'>Explain how you’ll go the extra mile to make your guests’ trips comfortable and convenient.</div>
                            </div>
                          </div>
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <RecommendIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <p className="text-black font-bold">Inspire peace of mind</p>
                              <div className='text-[13px] text-[black] font-[200]'>Share your regular car maintenance, cleaning, and sanitizing habits to help your guests feel safe and confident booking your car.</div>
                            </div>
                          </div>
                        </div>
                      </Modal>
                      <div className='border rounded-[6px] p-3 w-[400px] mt-3 mb-3'>
                        <p className='font-bold text-black'>Tips to get more bookings</p>
                        <div className='border rounded-[6px] p-2 mt-2'>
                          <div className='flex gap-3 mb-2'>
                            <div>
                              <AutoAwesomeIcon className='text-[#583cfa]' />
                            </div>
                            <div>
                              <div className='text-[12px] text-[black]  '>Listings with descriptions of at least 100 words are up to three times more likely to get booked.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <Form.Item
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: 'Please input description',
                          },
                        ]}
                      >
                        <Input.TextArea showCount maxLength={500} className='h-24' value={description} onChange={(e) => setdescription(e.target.value)} />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          ||
          (current === 3 &&
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
              <div className='content-your-car '>
                <p className='font-bold text-black mb-3'>Car photos</p>
                <div>
                  <div>
                    High quality photos increase your earning potential by attracting more guests. Upload at least 6 photos, including multiple exterior angles with the whole car in frame, as well as interior shots.
                  </div>
                  <div className='car-photo flex justify-center gap-[80px] mt-7'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex gap-2' >
                        <LightModeIcon className='text-black' />
                        <p>Shoot during the daytime</p>
                      </div>
                      <div className='flex gap-2' >
                        <WhereToVoteIcon className='text-black' />
                        <p>Try somewhere open or scenic</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <div className='flex gap-2' >
                        <RemoveRedEyeIcon className='text-black' />
                        <p>Take clear, crisp photos</p>
                      </div>
                      <div className='flex gap-2' >
                        <CleaningServicesIcon className='text-black' />
                        <p>Ensure the car is clean inside and out</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Example :</p>
                  </div>
                  <div className='w-[650px] flex m-auto items-center mt-5'>
                    <div>
                      <button className='review-swiper-button-prev'><ChevronLeftIcon /></button>
                    </div>
                    <Swiper
                      navigation={{
                        nextEl: ".review-swiper-button-next",
                        prevEl: ".review-swiper-button-prev",

                      }}
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={3}
                      loop={true}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        600: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        530: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        500: {
                          slidesPerView: 3,
                          spaceBetween: 20
                        },
                        400: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        300: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        700: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 15
                        }
                      }}
                      className="mySwiper">
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example1.jpg" alt="" className='object-cover w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example2.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example3.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example4.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example5.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example6.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example7.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                      <SwiperSlide className='card w-[190px] h-[107px]'>
                        <img src="../../src/assets/Example8.jpg" alt="" className='object-cover  w-[190px] h-[107px] rounded-[6px]' />
                      </SwiperSlide>
                    </Swiper>
                    <div>
                      <button className='review-swiper-button-next'><ChevronRightIcon /></button>
                    </div>
                  </div>
                  <div className='mt-5 overflow-hidden'>
                    <p className='flex justify-center text-[18px] font-semibold mb-5'>Your Car photos</p>
                    <DragDropContext onDragEnd={handleDragPhoto}>
                      <Droppable droppableId={photos} direction="horizontal">
                        {(provided) => (
                          <div
                            className="photos"
                            id='photos-container'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {photos.length < 1 && (
                              <>
                                <input type="file" id='image' style={{ display: "none" }} accept='image/*' onChange={handleuplaodphotos} multiple />
                                <label htmlFor="image" className='alone'>
                                  <div className='flex flex-col justify-center items-center h-[200px] text-gray-400 border-dotted border-2 border-gray-300 rounded-md '>
                                    <div className='icon k'><CollectionsOutlinedIcon /></div>
                                    <p>Upload photos</p>
                                  </div>

                                </label>

                              </>


                            )}
                            {photos.length >= 1 && (
                              <>
                                {photos.map((photo, index) => {
                                  return (
                                    <Draggable key={index} draggableId={index.toString()} index={index}>
                                      {(provided) => (
                                        <div className='photo relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                          <img src={URL.createObjectURL(photo)} alt="car photo" className='h-full w-full object-cover shadow-md rounded-md' />
                                          <button className="absolute top-2 left-2 text-white bg-[#0c0c0c6c] hover:bg-[#0c0c0c94] rounded-[50%] pl-[3px] pr-[3px] pt-[2px] pb-[2px] flex justify-center" onClick={() => handledeletephoto(index)}><CloseOutlinedIcon /></button>
                                        </div>
                                      )}
                                    </Draggable>
                                  )
                                })}
                                <input type="file" id='image' style={{ display: "none" }} accept='image/*' onChange={handleuplaodphotos} multiple />
                                <label htmlFor="image" className='together'>
                                  <div className='flex flex-col justify-center items-center h-[200px] text-gray-400 border-dotted border-2 border-gray-300 rounded-md '>
                                    <div className='icon k'><CollectionsOutlinedIcon /></div>
                                    <p>Upload photos</p>
                                  </div>

                                </label>

                              </>
                            )}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </div>
                  <button onClick={handlesubmitlisting}>submit listing</button>
                </div>
              </div>
            </div>)
          ||
          (current === 4 && <VerifyListing />)}

        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button id="prevbtn" onClick={prev} className='hidden'>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button id="nextbtn" onClick={() => next()} className='bg-black' >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <button type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')}>
              Done
            </button>
          )}
        </div>
      </Form>
    </>
  );
};
export default Steppers;
