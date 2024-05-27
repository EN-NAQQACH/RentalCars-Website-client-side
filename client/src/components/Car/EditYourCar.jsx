import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../cardeffect.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import distancee from '../../data/distance.json'
import carmake from '../../data/carmake.js'; import generateYears from '../../data/caryear.js';
import { Button, message, Steps, theme, Radio, Input, Select, Checkbox, Modal } from 'antd';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import sanitizeHtml from 'sanitize-html';
import MapIcon from '@mui/icons-material/Map';
import Map3 from '../User/Map3.jsx';


const featuresList = [
    { name: "Cruise Control", icon: "/steering-wheel.png" },
    { name: "Airbags", icon: "/airbag.png" },
    { name: "Leather Seats", icon: "/heat.png" },
    { name: "Navigation/GPS System", icon: "/location.png" },
    { name: "Air Conditioning", icon: "/car.png" },
    { name: "Sunroof", icon: "/sun.png" },
    { name: "Alloy Wheels", icon: "/alloy-wheel.png" },
    { name: "ESP", icon: "/esp.png" },
    { name: "Rear Parking Radar", icon: "/parking.png" },
    { name: "Onboard Computer", icon: "/steering-wheel.png" },
    { name: "Child seat", icon: "/baby-car-seat.png" },
    { name: "Rear View Camera", icon: "/360-degree.png" },
    { name: "ABS", icon: "/abs.png" },
    { name: "Speed Limiter", icon: "/speedometer.png" },
    { name: "Electric Windows", icon: "/window.png" },
    { name: "CD/MP3/Bluetooth", icon: "/bluetooth.png" }
];
function EditYourCar() {
    const [car, setCar] = useState();
    const [location, setlocation] = useState('');
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [transmission, setTransmission] = useState('');
    const [distance, setdistance] = useState('');
    const [fuel, setFuel] = useState('');
    const [maxtrip, setmaxtrip] = useState();
    const [mintrip, setmintrip] = useState();
    const [seats, setSeats] = useState();
    const [type, setType] = useState('');
    const [image, setImage] = useState([]);
    const [features, setfeatures] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const { carId } = useParams();
    const [photos, setphotos] = useState([]);
    const [value, setValue] = useState(1);
    const [newPhotos, setNewPhotos] = useState([]);
    const [deletedPhotos, setDeletedPhotos] = useState([]);
    const [StartDate, setStartDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [doors, setdoors] = useState();
    const [loading, setloading] = useState(false);
    const [positionlat, setpositionlat] = useState();
    const [positionlang, setpositionlng] = useState();
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        setTransmission(e.target.value)
    };
    const isSelected = (feature) => {
        return selectedFeatures.some((selectedFeature) => selectedFeature.name === feature.name);
    };
    useEffect(() => {
        const getCar = async () => {
            try {
                setloading(true);
                const reponse = await fetch(`https://easlycars-server.vercel.app/api/getusercar/${carId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                    }
                });
                const result = await reponse.json();
                setCar(result.car);
                setlocation(result.car.location);
                setYear(result.car.year);
                setMake(result.car.make);
                setModel(result.car.model);
                setPrice(result.car.price);
                setDescription(result.car.description);
                setTransmission(result.car.transmission);
                setdistance(result.car.distance);
                setFuel(result.car.fuel);
                setmaxtrip(result.car.maxTrip);
                setStartDate(result.car.startTripDate)
                setEndDate(result.car.endTripDate)
                setmintrip(result.car.minTrip);
                setSeats(result.car.carSeats);
                setImage(result.car.imageUrls);
                setdoors(result.car.doors)
                setpositionlat(result.car.positionlat);
                setpositionlng(result.car.positionlang)
                const parsedFeatures = result.car.features.map(feature => {
                    const [name, icon] = feature.split(":");
                    return { name, icon };
                });
                setSelectedFeatures(parsedFeatures);
                setType(result.car.Type)
                setloading(false);
                
            } catch (e) {
                setloading(false);
                console.log(e);
            }
        }
        getCar();
    }, [])
    const handleuplaodphotos = (e) => {
        const files = e.target.files;
        const newPhotos = Array.from(files);
        setphotos([...photos, ...newPhotos]);
    }
    // const handleDragPhoto = (result) => {
    //     if (!result.destination) return;
    //     const items = Array.from(image);
    //     const [reorderedPhoto] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedPhoto);
    //    setimages(items);
    // };
    const handleDragPhoto = (result) => {
        if (!result.destination) return;
        const items = Array.from(car.imageUrls);
        const [reorderedPhoto] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedPhoto);
        setCar({ ...car, imageUrls: items });
    };
    const handledeletephoto = (index) => {
        setNewPhotos((prevphotos) => prevphotos.filter((_, i) => i !== index))
    };
    const handleCheckboxChange = (feature) => {
        if (isSelected(feature)) {
            setSelectedFeatures(selectedFeatures.filter(item => item.name !== feature.name));
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setNewPhotos([...newPhotos, ...files]);
    };
    const handleDeletePhoto = (index) => {
        const deletedPhotoUrl = car.imageUrls[index];
        setDeletedPhotos([...deletedPhotos, deletedPhotoUrl]);
        const updatedPhotos = car.imageUrls.filter((_, i) => i !== index);
        setCar({ ...car, imageUrls: updatedPhotos });
    };
    const handleUpdateCar = async () => {
        const formData = new FormData();
        const featuresArray = Array.isArray(selectedFeatures) ? selectedFeatures : [selectedFeatures];
        const deletedimagesArray = Array.isArray(deletedPhotos) ? deletedPhotos : [deletedPhotos];
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
        formData.append('carseat', seats);
        formData.append('doors', doors);
        formData.append('positionlat',positionlat)
        formData.append('positionlng',positionlang)
        formData.append('type', type);
        formData.append('startTripDate', StartDate);
        formData.append('endTripDate', EndDate);
        formData.append('description', description);
        featuresArray.forEach((feature, index) => {
            const featureString = `${feature.name}:${feature.icon}`;
            formData.append(`features[${index}]`, featureString);
        });
        deletedimagesArray.forEach((image, index) => {
            formData.append(`deletedImages[${index}]`, image);
        });
        newPhotos.forEach((photo, index) => {
            formData.append(`photos`, photo);
        });
        if (!location || !year || !price || !make || !model || !transmission || !fuel || !distance || !seats || !type || !StartDate || !EndDate || !description || !featuresArray.length) {
            toast.error('Please fill all the fields');
            return;
        }
        try {
            const response = await fetch(`https://easlycars-server.vercel.app/api/updatecar/${carId}`, {
                method: 'put',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                },
                body: formData,
            });
            const result = await response.json();
            if (result) {
                // message.success(result.message)
                toast.success(result.message);
            } else {
                message.error(result.error);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    const caryear = generateYears()
    console.log(selectedFeatures)

    const handleStartDateChange = (newDate) => {
        const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
        // Check if start date is greater than end date
        if (dayjs(formattedDate).isAfter(EndDate)) {
            setStartDate(EndDate); // Swap start date with end date
            setEndDate(formattedDate); // Keep end date as it is
        } else {
            setStartDate(formattedDate);
        }
    };

    const handleEndDateChange = (newDate) => {
        const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
        // Check if end date is less than start date
        if (dayjs(formattedDate).isBefore(StartDate)) {
            setEndDate(StartDate); // Swap end date with start date
            setStartDate(formattedDate); // Keep start date as it is
        } else {
            setEndDate(formattedDate);
        }

    };
    const navigate = useNavigate();
    const handleToastClose = () => {
        navigate('/account/my-listing');
    };
    const [isModalOpenn, setIsModalOpenn] = useState(false);
    const showModall = () => {
        setIsModalOpenn(true);
    };
    const handleOkk = () => {
        setIsModalOpenn(false);
    };
    const handleCancell = () => {
        setIsModalOpenn(false);
    };
    return (
        <div className='edityourcar border rounded-xl p-3 h-[100%]'>
            {loading ? (<>
                <div className=' flex h-[100%] items-center justify-center m-auto'>
                    <ClipLoader
                        color="#5c3cfc"
                        size={35}
                        speedMultiplier={0.3}

                    />
                </div>

            </>) : (<>

                <div className='flex flex-col justify-center'>
                    <div className='content-your-car '>
                        <div className='YourCar mb-4'>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold text-black mb-1'>Your Car</p>
                                <Link to="/account/my-listing" className='flex items-center gap-1  rounded-lg text-[#9c8cfc] hover:text-[#7251ca] font-semibold'><ArrowBackIcon /> Go back</Link>
                            </div>
                            <div className='flex flex-col gap-3' >
                                <div className='flex items-end justify-between gap-2'>
                                    <div className='grow'>
                                    <label htmlFor="" className='text-[13px] font-bold mb-2 text-gray-400'> location</label>

                                        <div className='flex flex-col'>
                                            <input name='location' type='text' placeholder="Your car location" className=' border p-1 rounded-md' value={location} onChange={(e) => setlocation(e.target.value)} />
                                        </div>
                                    </div>

                                    <div name='map' className='p-1 cursor-pointer rounded-md  bg-black text-white' onClick={showModall}><MapIcon /> Map</div>
                                    <Modal
                                        title='please choose your location'
                                        className='text-center'

                                        style={{
                                            top: 20,
                                            padding: '0 !importent',

                                        }}
                                        open={isModalOpenn} onOk={handleOkk} onCancel={handleCancell} footer={null} width={900}
                                    >
                                        <Map3 setpositionlat={setpositionlat} positionlat={positionlat} positionlang={positionlang} setpositionlng={setpositionlng} />

                                    </Modal>
                                </div>

                                <div className='year-model-make grid grid-cols-3 gap-3'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="caryear" className='text-[13px] font-bold mb-2 text-gray-400'>Year</label>
                                        <Select placeholder="select year" value={year} onChange={(value) => setYear(value)}>
                                            {caryear.map((r, index) => (
                                                <Option key={index} required value={r}>{r}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="carmake" className='text-[13px] font-bold mb-2 text-gray-400'> Make</label>
                                        <Select placeholder="select year" value={make} onChange={(value) => setMake(value)}>
                                            {carmake.map((r, index) => (
                                                <Option key={index} required value={r}>{r}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="carmodel" className='text-[13px] font-bold mb-2 text-gray-400'>Model</label>
                                        <Input value={model} onChange={(e) => setModel(e.target.value)} />
                                    </div>
                                </div>
                                <div className='w-[100%] flex gap-1'>
                                    <div className='flex flex-col w-[100%]'>
                                        <label htmlFor="distance" className='text-[13px] font-bold mb-2 text-gray-400'>Distance</label>
                                        <Select placeholder="select year" value={distance} onChange={(value) => setdistance(value)}>
                                            {distancee.map((r, index) => (
                                                <Option key={index} required value={r}>{r}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className='flex flex-col w-[100%]'>
                                        <label htmlFor="distance" className='text-[13px] font-bold mb-2 text-gray-400'>Type</label>
                                        <Select placeholder="select year" value={type} onChange={(value) => setType(value)}>
                                            <Option key="2" required value="Cars">Cars</Option>
                                            <Option key="3" required value="Coupe">Coupe</Option>
                                            <Option key="4" required value="Suv">Suv</Option>
                                            <Option key="5" required value="Sedan">Sedan</Option>
                                        </Select>
                                    </div>
                                    <div className='flex flex-col w-[100%]'>
                                        <label htmlFor="distance" className='text-[13px] font-bold mb-2 text-gray-400'>Fuel</label>
                                        <Select placeholder="select year" value={fuel} onChange={(value) => setFuel(value)}>
                                            <Option key="2" required value="Gasoline">Gasoline</Option>
                                            <Option key="3" required value="Diesel">Diesel</Option>
                                            <Option key="4" required value="Electric">Electric</Option>
                                            <Option key="5" required value="Hybrid">Hybrid</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <label htmlFor="Transition" className='text-[13px] font-bold mb-2 text-gray-400'>Transition</label>
                                    <Radio.Group onChange={onChange} value={transmission}>
                                        <Radio value="Manual" >Manual</Radio>
                                        <Radio value="Automatic" >Automatic</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>

                        <div className='caravailinility mb-4 w-[500px]'>
                            <p className='font-bold text-black '>Car availibility</p>
                            <div className='flex flex-col mt-2'>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Price DH /Day</label>
                                <input type="text" className='border p-1 rounded-md' value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className='flex items-center gap-3 mt-2 w-[100%]' >
                                <div className='flex flex-col min-w-[50%]'>
                                    <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Start Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker value={dayjs(StartDate)} onChange={handleStartDateChange} />
                                    </LocalizationProvider>
                                </div>
                                <div className='flex flex-col w-[50%]'>
                                    <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> End Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker value={dayjs(EndDate)} onChange={handleEndDateChange} />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>

                        <div className='cardetails mb-4'>
                            <p className='font-bold text-black mb-1'>Car Details</p>
                            <div className='flex flex-col gap-2' >
                                <p className='text-[13px] font-bold mb-2 text-gray-400'>Car features</p>
                                <div className='grid grid-cols-3'>
                                    {featuresList.map((feature) => (
                                        <div key={feature}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected(feature)}
                                                    onChange={() => handleCheckboxChange(feature)}
                                                />
                                                {feature.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className=' flex flex-col w-[500px]'>
                                    <label htmlFor="" className='text-[14px] font-bold mb-1 text-gray-400'> Car seats</label>
                                    <input placeholder="car seats" className=' border p-1 text-[13px] rounded-md' value={seats} onChange={(e) => setSeats(e.target.value)} />
                                </div>
                                <div className=' flex flex-col w-[500px]'>
                                    <label htmlFor="" className='text-[14px] font-bold mb-1 text-gray-400'> Car doors</label>
                                    <input placeholder="car doors" className=' border p-1 text-[13px] rounded-md' value={doors} onChange={(e) => setdoors(e.target.value)} />
                                </div>
                                <div>
                                    <div className=''>
                                        <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Description</label>
                                        <ReactQuill theme="snow" className='mt-2 min-h-[100%]' value={description} onChange={setDescription} />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='carphotos  mb-2'>
                            <p className='font-bold text-black mb-1'>Car photos</p>

                            <DragDropContext onDragEnd={handleDragPhoto}>
                                <Droppable droppableId={image} direction="horizontal">

                                    {(provided) => (
                                        <>
                                            <div className='mb-5'>
                                                <input type="file" id='image' name='photos' style={{ display: "none" }} accept='image/*' onChange={handleFileChange} multiple />
                                                <label htmlFor="image" className='alone text-[#5c3cfc] w-[100%] '>
                                                    <div className='flex flex-col justify-center items-center h-[200px]  border-dotted border-2 border-[#a694ffb7] rounded-md '>
                                                        <div className='icon k'><CollectionsOutlinedIcon /></div>
                                                        <p>Upload photos</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div
                                                className="photos"
                                                id='photos-container'
                                            >
                                            </div>
                                            <div className="photos" id='photos-container' {...provided.droppableProps} ref={provided.innerRef}>
                                                {newPhotos.map((file, index) => (
                                                    // <div key={`new-${index}`} className="image-wrapper">
                                                    //     <img src={URL.createObjectURL(file)} alt={`New Car ${index}`} className="car-image" />
                                                    // </div>
                                                    <Draggable key={index} draggableId={index.toString()} index={index} id="">
                                                        {(provided) => (
                                                            <div className='photo relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                <img src={URL.createObjectURL(file)} alt={`Car ${index}`} className='h-full w-full object-cover shadow-md rounded-md' />
                                                                <button className="absolute top-2 left-2 text-white bg-[#0c0c0c6c] hover:bg-[#0c0c0c94] rounded-[50%] pl-[3px] pr-[3px] pt-[2px] pb-[2px] flex justify-center" onClick={() => handledeletephoto(index)}><CloseOutlinedIcon /></button>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            <div className="photos mt-2" id='photos-container' {...provided.droppableProps} ref={provided.innerRef}>
                                                {image.length >= 1 && (
                                                    <>
                                                        {car.imageUrls.map((imageUrl, index) => (
                                                            // <div key={index} className="image-wrapper">
                                                            //     <img src={imageUrl} alt={`Car ${index}`} className="car-image" />
                                                            //     <button onClick={() => handleDeletePhoto(index)}>Delete</button>
                                                            // </div>

                                                            <Draggable key={index} draggableId={index.toString()} index={index} id="">
                                                                {(provided) => (
                                                                    <div className='photo relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                        <img src={imageUrl} alt={`Car ${index}`} className='h-full w-full object-cover shadow-md rounded-md' />
                                                                        <button className="absolute top-2 left-2 text-white bg-[#0c0c0c6c] hover:bg-[#0c0c0c94] rounded-[50%] pl-[3px] pr-[3px] pt-[2px] pb-[2px] flex justify-center" onClick={() => handleDeletePhoto(index)}><CloseOutlinedIcon /></button>
                                                                    </div>
                                                                )}
                                                            </Draggable>

                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </div>
                        <div className='flex justify-end'>
                            <button className='pl-3 pr-3 pt-2 pb-2 bg-[#8d8df8] transition-all duration-75  hover:bg-[#6565ff] text-[12px] text-white font-semibold rounded-md' onClick={handleUpdateCar}>Update Your Car</button>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            onClose={handleToastClose}
                        />
                    </div>
                </div>


            </>)}

        </div>
    )
}

export default EditYourCar