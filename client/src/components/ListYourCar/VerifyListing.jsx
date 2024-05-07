import React, { useState, useEffect } from 'react'
import { Button, message, Steps, theme, Radio, Input, Select, Checkbox, Modal } from 'antd';
import distancee from '../../data/distance.json'
import generateYears from '../../data/caryear.js'
import CryptoJS from 'crypto-js';
const { Option } = Select;
function VerifyListing() {
    const { token } = theme.useToken();
    const contentStyle = {
        height: 'fit-content',
        color: token.colorTextTertiary,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: 20,
    };
    const caryear = generateYears()
    // const getDecryptedDataFromLocalStorage = () => {
    //     const encryptedString = localStorage.getItem('@D_C0');
    //     if (encryptedString) {
    //       // Decrypt the encrypted string using the secret key
    //       const secretKey = 'MOHSSINE'; // Same secret key used for encryption
    //       const decryptedBytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
    //       const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);

    //       // Parse the decrypted JSON string
    //       const YourCar = JSON.parse(decryptedString);
    //       return YourCar;
    //     }
    //     return null;
    //   };
    //   const decryptedData = getDecryptedDataFromLocalStorage();
    //   console.log(decryptedData);
    const data = localStorage.getItem("@D_C0")
    const dataform = JSON.parse(data)
    const features = dataform.features;
    const photos = dataform.photos;

    return (
        <div>
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
                <div className='content-your-car '>
                    <div className='YourCar mb-2'>
                        <p className='font-bold text-gray-500 mb-3'>Your Car</p>
                        <div className='flex flex-col gap-3' >
                            <div>
                                <label htmlFor=""> location</label>
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.location} />
                            </div>
                            <div className='year-model-make grid grid-cols-3 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="caryear">Year</label>
                                    {/* <Select placeholder="select year">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='caryear' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.year} />

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmake"> Make</label>
                                    {/* <Select placeholder="Make">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='carmake' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.make} />

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmodel">Model</label>
                                    {/* <Select placeholder="Model">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='carmodel' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.model} />

                                </div>
                            </div>
                            <div className='w-[100%] flex gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="distance">Distance</label>
                                    {/* <Select placeholder="Model" className='mb-4'>
                                        {distancee.map((distance, index) => (
                                            <Option key={index} required value={distance}>{distance}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='distance' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.distance} />

                                </div>
                                <div>
                                    <label htmlFor="">vehicule type</label>
                                    <Input name='type' type='text' placeholder="Your car type" className='rounded-[5px] mt-1 font-semibold' value={dataform.type}/>
                                </div>
                                <div>
                                    <label htmlFor="Transition">Transition</label>
                                    {/* <Radio.Group >
                                        <Radio value="Manual">Manual</Radio>
                                        <Radio value="Automatic" >Automatic</Radio>
                                    </Radio.Group> */}
                                    <Input name='Transition' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.transmission} />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='caravailinility mb-2'>
                        <p className='font-bold text-gray-500 mt-5'>Car availibility</p>
                        <div className='flex gap-3 mt-2' >
                            <div className='flex items-center gap-2'>
                                <label htmlFor=""> Minimum trip duration</label>
                                {/* <Select placeholder="select number of days">
                                    <Option value={1} key={1} >1</Option>
                                    <Option value={2} key={2} >2</Option>
                                    <Option value={3} key={3} >3</Option>
                                </Select> */}
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.mintrip} />

                            </div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor=""> Maximum trip duration</label>
                                {/* <Select placeholder="select number of days">
                                    <Option value={1} key={1} >1</Option>
                                    <Option value={2} key={2} >2</Option>
                                    <Option value={3} key={3} >3</Option>
                                </Select> */}
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[5px] mt-1 font-semibold' value={dataform.maxtrip} />

                            </div>
                        </div>
                    </div>

                    <div className='cardetails'>
                        <p className='font-bold text-gray-500 mb-1 mt-3'>Car Details</p>
                        <div className='flex flex-col gap-2 ' >
                            <p className='text-[13px]'>Car features</p>
                            <div className='flex gap-3 flex-wrap w-[300px] font-semibold'>
                                {features.map((feature, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <Checkbox value={feature} onChange={(e) => handlechangecheckbox(e)} disabled>{feature}</Checkbox>
                                    </div>
                                ))}
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='text-[14px]'> car seats</label>
                                <Input placeholder="car seats" className='rounded-[5px] font-semibold' value={dataform.carseat}/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-[13px]'> Description</label>
                                <div className='mt-2'>
                                    <Input.TextArea showCount maxLength={500} className='h-24 font-semibold' value={dataform.description}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='carphotos'>
                        <p className='font-bold text-gray-500 mb-1 mt-5'>Car photos</p>
                        <div className='flex flex-col gap-2' >
                            <div
                                className="photos mt-5"
                                id='photos-container'
                            >
                                {photos.map((photo,index) => (
                                    <div key={index} className='photo '>
                                        <img src={photo} alt="car photo" className='h-full w-full object-cover shadow-md rounded-md' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyListing