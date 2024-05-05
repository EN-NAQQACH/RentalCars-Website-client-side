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

    return (
        <div>
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
                <div className='content-your-car '>
                    <div className='YourCar mb-2'>
                        <p className='font-bold text-black mb-3'>Your Car</p>
                        <div className='flex flex-col gap-3' >
                            <div>
                                <label htmlFor=""> location</label>
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={dataform.location} />
                            </div>
                            <div className='year-model-make grid grid-cols-3 gap-3'>
                                <div className='flex flex-col'>
                                    <label htmlFor="caryear">Year</label>
                                    {/* <Select placeholder="select year">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={dataform.year} />

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmake"> Make</label>
                                    {/* <Select placeholder="Make">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="carmodel">Model</label>
                                    {/* <Select placeholder="Model">
                                        {caryear.map((r, index) => (
                                            <Option key={index} required value={r}>{r}</Option>
                                        ))}
                                    </Select> */}
                                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

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
                                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

                                </div>
                                <div>
                                    <label htmlFor="Transition">Transition</label>
                                    {/* <Radio.Group >
                                        <Radio value="Manual">Manual</Radio>
                                        <Radio value="Automatic" >Automatic</Radio>
                                    </Radio.Group> */}
                                    <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='caravailinility mb-2'>
                        <p className='font-bold text-black '>Car availibility</p>
                        <div className='flex gap-3' >
                            <div className='flex items-center gap-2'>
                                <label htmlFor=""> Minimum trip duration</label>
                                {/* <Select placeholder="select number of days">
                                    <Option value={1} key={1} >1</Option>
                                    <Option value={2} key={2} >2</Option>
                                    <Option value={3} key={3} >3</Option>
                                </Select> */}
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

                            </div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor=""> Maximum trip duration</label>
                                {/* <Select placeholder="select number of days">
                                    <Option value={1} key={1} >1</Option>
                                    <Option value={2} key={2} >2</Option>
                                    <Option value={3} key={3} >3</Option>
                                </Select> */}
                                <Input name='location' type='text' placeholder="Your car location" className='rounded-[0px]' value={"mohssine"} />

                            </div>
                        </div>
                    </div>

                    <div className='cardetails'>
                        <p className='font-bold text-black mb-1'>Car Details</p>
                        <div className='flex flex-col gap-2' >
                            <p>Car features</p>
                            <div className='flex gap-3 flex-wrap w-[300px]'>
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
                                <p>mohssine</p>
                                <p>mohssine</p>
                                <p>mohssine</p>
                                <p>mohssine</p>
                                <p>mohssine</p>
                                <p>mohssine</p>
                                <p>mohssine</p>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='text-[14px]'> car seats</label>
                                <Input placeholder="car seats" className='rounded-[0px] ' />
                            </div>
                            <div>
                                <div className='mt-2'>
                                    <Input.TextArea showCount maxLength={500} className='h-24' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='carphotos'>
                        <p className='font-bold text-black mb-1'>Car photos</p>
                        <div className='flex flex-col gap-2' >
                            <p>Upload at least 6 photos, including multiple exterior angles with the whole car in frame, as well as interior shots.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyListing