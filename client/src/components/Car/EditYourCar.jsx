import React from 'react'
import { useState, useEffect } from 'react';
import { Radio, Input, Checkbox, } from 'antd';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../cardeffect.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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
    const [image, setImage] = useState([]);
    const [features, setfeatures] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const { carId } = useParams();
    const [photos, setphotos] = useState([]);
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    useEffect(() => {
        const getCar = async () => {
            try {
                const reponse = await fetch(`http://localhost:5600/api/getusercar/${carId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                    }
                });
                const result = await reponse.json();
                setCar(result);
                setlocation(result.location);
                setYear(result.year);
                setMake(result.make);
                setModel(result.model);
                setPrice(result.price);
                setDescription(result.description);
                setTransmission(result.transmission);
                setdistance(result.distance);
                setFuel(result.fuel);
                setmaxtrip(result.maxTrip);
                setmintrip(result.minTrip);
                setSeats(result.carSeats);
                setImage(result.imageUrls);
                setSelectedFeatures(result.features);
            } catch (e) {
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
    const handleDragPhoto = (result) => {
        if (!result.destination) return;
        const items = Array.from(image);
        const [reorderedPhoto] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedPhoto);
        setImage(items);
    };
    const handledeletephoto = (index) => {
        setImage((prevphotos) => prevphotos.filter((_, i) => i !== index))
    };
    const handleCheckboxChange = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };
    return (
        <div className='edityourcar border rounded-xl p-3 h-[100%]'>
            <div className='flex flex-col justify-center'>
                <div className='content-your-car '>
                    <div className='YourCar mb-4'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-black mb-1'>Your Car</p>
                            <Link to="/account/my-listing" className='flex items-center gap-1  rounded-lg text-[#9c8cfc] hover:text-[#7251ca] font-semibold'><ArrowBackIcon /> Go back</Link>
                        </div>
                        <div className='flex flex-col gap-3' >
                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-[13px] font-bold mb-2 text-gray-400'> location</label>
                                <input name='location' type='text' placeholder="Your car location" className=' border p-1 rounded-md' value={location} />
                            </div>
                            <div className='year-model-make grid grid-cols-3 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="caryear" className='text-[13px] font-bold mb-2 text-gray-400'>Year</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">{year}</option>
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmake" className='text-[13px] font-bold mb-2 text-gray-400'> Make</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">{make}</option>
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmodel" className='text-[13px] font-bold mb-2 text-gray-400'>Model</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">{model}</option>
                                    </select>
                                </div>
                            </div>
                            <div className='w-[260px]'>
                                <div className='flex flex-col'>
                                    <label htmlFor="distance" className='text-[13px] font-bold mb-2 text-gray-400'>Distance</label>
                                    <select placeholder="select year" className='border p-1 rounded-md'>
                                        <option value="">{distance}</option>
                                    </select>
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <label htmlFor="Transition" className='text-[13px] font-bold mb-2 text-gray-400'>Transition</label>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={1} >Manual</Radio>
                                        <Radio value={2} >Automatic</Radio>

                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='caravailinility mb-4 w-[500px]'>
                        <p className='font-bold text-black '>Car availibility</p>
                        <div className='flex flex-col gap-3 mt-2' >
                            <div className='flex flex-col '>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Price DH /Day</label>
                                <input type="text" className='border p-1' value={price} />
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Minimum trip duration</label>
                                <select placeholder="select year" className='p-1 border rounded-md'>
                                    <option value="" className=''>{mintrip}</option>
                                    <option value="" className='rounded-none'>1</option>
                                    <option value="" className='rounded-none'>2</option>
                                    <option value="" className='rounded-none'>3</option>
                                </select>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Maximum trip duration</label>

                                <input type='number' className='border p-1' value={maxtrip} />
                            </div>
                        </div>
                    </div>

                    <div className='cardetails mb-4'>
                        <p className='font-bold text-black mb-1'>Car Details</p>
                        <div className='flex flex-col gap-2' >
                            <p className='text-[13px] font-bold mb-2 text-gray-400'>Car features</p>
                            <div className='grid grid-cols-3'>
                                {/* <div className='flex flex-col gap-1'>
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
                                </div> */}
                                {featuresList.map((feature) => (
                                    <div key={feature}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedFeatures.includes(feature)}
                                                onChange={() => handleCheckboxChange(feature)}
                                            />
                                            {feature}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className=' flex flex-col w-[500px]'>
                                <label htmlFor="" className='text-[14px] font-bold mb-1 text-gray-400'> Car seats</label>
                                <input placeholder="car seats" className=' border p-1 text-[13px] rounded-md' value={seats} />
                            </div>
                            <div>
                                <div className=''>
                                    <label htmlFor="" className='text-[13px] font-bold mb-1 text-gray-400'> Description</label>
                                    <Input.TextArea showCount maxLength={500} className='h-24' value={description} />
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
                                            <input type="file" id='image' name='photos' style={{ display: "none" }} accept='image/*' onChange={handleuplaodphotos} multiple />
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
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {image.length >= 1 && (
                                                <>
                                                    {photos.map((photo, index) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index} id="">
                                                                {(provided) => (
                                                                    <div className='photo relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                        <img src={URL.createObjectURL(photo)} alt="car photo" className='h-full w-full object-cover shadow-md rounded-md' />
                                                                        <button className="absolute top-2 left-2 text-white bg-[#0c0c0c6c] hover:bg-[#0c0c0c94] rounded-[50%] pl-[3px] pr-[3px] pt-[2px] pb-[2px] flex justify-center" onClick={() => handledeletephoto(index)}><CloseOutlinedIcon /></button>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    })}
                                                    {image.map((photo, index) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index} id="">
                                                                {(provided) => (
                                                                    <div className='photo relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                        <img src={photo} alt="car photo" className='h-full w-full object-cover shadow-md rounded-md' />
                                                                        <button className="absolute top-2 left-2 text-white bg-[#0c0c0c6c] hover:bg-[#0c0c0c94] rounded-[50%] pl-[3px] pr-[3px] pt-[2px] pb-[2px] flex justify-center" onClick={() => handledeletephoto(index)}><CloseOutlinedIcon /></button>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    })}
                                                </>
                                            )}
                                        </div>
                                    </>
                                )}
                            </Droppable>
                        </DragDropContext>
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