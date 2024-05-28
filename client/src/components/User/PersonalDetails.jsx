import React, { useEffect, useState } from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import '../cardeffect.css'
import { Button, message, Steps, theme, Radio, Input, Select, Checkbox, Modal } from 'antd';
const longText = `
Tell hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience. Feel free to include links to your LinkedIn, Twitter, or Facebook profiles so they get to know you even better.
`;
import ClipLoader from "react-spinners/ClipLoader";

function PersonalDetails() {
    const [userData, setUserData] = useState({});
    const [firstName, setFirstname] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setnumber] = useState('');
    const [about, setAbout] = useState('');
    const [photo, setphoto] = useState('');
    const [loading, setloading] = useState(false);
    const [zipcode , setzipcode] = useState('');
    const [city , setcity] = useState('');
    const [address , setaddress] = useState('');
    const getuserInfo = async () => {
        try {
            setloading(true);
            const reponse = await fetch('https://easlycars-server.vercel.app/api/users/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                }
            })
            const data = await reponse.json();
            setFirstname(data.firstName);
            setlastName(data.lastName);
            setEmail(data.email);
            setnumber(data.number)
            setAbout(data.about);
            setzipcode(data.zipcode);
            setcity(data.city);
            setaddress(data.address);
            setUserData(data);
            setloading(false);
        } catch (e) {
            console.log(e)
            setloading(false);
        }
    }
    const updateUserinfo = async () => {
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('number', number);
        formData.append('about', about);
        formData.append('photo', photo);
        formData.append('zipcode', zipcode);
        formData.append('city', city);
        formData.append('address', address);
        if (!firstName || !lastName || !email || !number || !about) {
            message.error('Please fill all the fields')
            return;
        }
        try {
            const response = await fetch('https://easlycars-server.vercel.app/api/users/update', {
                method: 'put',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                },
                body: formData
            });
            const result = await response.json();
            if (result) {
                getuserInfo();
            } else {
                message.error(result.error);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    const handeleeditbtn = () => {
        const firstname = document.getElementById('Firstname');
        const lastname = document.getElementById('Lastname');
        const emaill = document.getElementById('emaill');
        const number = document.getElementById('number');
        const about = document.getElementById('aboutme');
        const photo = document.getElementById('photo');
        const zipcode = document.getElementById('zipcode');
        const city = document.getElementById('city');
        const address = document.getElementById('address');

        if (firstname.disabled) {
            firstname.disabled = false;
            firstname.style.border = '0.2px solid #E2DFD0';
            firstname.style.borderRadius = '5px'; 
            photo.disabled = false;
            lastname.disabled = false;
            lastname.style.border = '0.2px solid #E2DFD0';
            lastname.style.borderRadius = '5px';

            if (userData.googleId) {
                emaill.disabled = true;
            } else {
                emaill.disabled = false;
                emaill.style.border = '0.2px solid #E2DFD0';

            }
            number.disabled = false;
            number.style.border = '0.2px solid #E2DFD0';
            number.style.borderRadius = '5px';


            zipcode.disabled = false;
            zipcode.style.border = '0.2px solid #E2DFD0';
            zipcode.style.borderRadius = '5px';

            city.disabled = false;
            city.style.border = '0.2px solid #E2DFD0';
            city.style.borderRadius = '5px';

            address.disabled = false;
            address.style.border = '0.2px solid #E2DFD0';
            address.style.borderRadius = '5px';


            about.disabled = false;
            about.style.border = '0.2px solid #E2DFD0';
            about.style.borderRadius = '5px';

        }
        const editbtn = document.getElementById('editbtn');
        editbtn.style.display = 'none'
        const savebtn = document.getElementById('updatebtn');
        savebtn.style.display = 'flex'

    }
    useEffect(() => {
        getuserInfo();
    }, [])
    return (
        <div className='scroll-smooth myprofileinfo  p-3 h-[100%]'>

            <div className='flex justify-between items-center mb-3'>
                <p className='text-[18px] font-semibold text-gray-700'>My Profile</p>
                {loading ? (<></>) :
                    <>
                        <button className='border pl-3 pr-3 pt-1 pb-1 flex items-center gap-2 rounded-md font-semibold text-[#9682ff] hover:text-[#5c3cfc]' onClick={handeleeditbtn} id='editbtn' > <BorderColorIcon />Edit</button>
                        <button className='border pl-3 pr-3 pt-1 pb-1  items-center gap-2 rounded-md font-semibold text-[#9682ff] hover:text-[#5c3cfc] hidden' onClick={updateUserinfo} id='updatebtn'> <BorderColorIcon />Update</button>
                    </>
                }

            </div>
            {loading ? (

                <>
                    <div className=' h-[100%] flex justify-center items-center'>
                        <ClipLoader
                            color="#5c3cfc"
                            size={35}
                            speedMultiplier={0.3}

                        />
                    </div>
                </>



            ) :
                (
                    <>
                        <div className='border p-3 rounded-md'>


                            <div id='Myprofile'  >
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'> First Name</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={firstName} onChange={(e) => setFirstname(e.target.value)} id='Firstname' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400' >Last Name</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={lastName} onChange={(e) => setlastName(e.target.value)} id='Lastname' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>photo</label>
                                    <input type="file" name='file' className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled id="photo" onChange={(e) => setphoto(e.target.files[0])} />
                                    {photo && <img src={URL.createObjectURL(photo)} alt="" className='rounded-[50%] w-[80px] h-[80px] object-cover mt-2' />}
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Phone Number</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={number} onChange={(e) => setnumber(e.target.value)} id='number' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Email</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={email} onChange={(e) => setEmail(e.target.value)} id='emaill' />
                                </div>
                            </div>
                            <div className='mt-7'>
                                <div className=''>
                                    <p className='text-[18px] flex items-center gap-3 font-semibold text-gray-700 mb-3'>About Me <div>
                                        <Tooltip title={longText}>
                                            <HelpIcon className='cursor-pointer text-[#cac0ff]' />
                                        </Tooltip>
                                    </div></p>
                                </div>
                                <div className='flex flex-col'>
                                    <textarea type="text" className='border-none p-2 rounded-[3px] font-semibold text-[14px] text-gray-400 min-h-[100px]' disabled id='aboutme' value={about} onChange={(e) => setAbout(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-7 border p-3 rounded-md'>
                            <p className='text-[18px] font-semibold text-gray-700'>Address</p>
                            <div id='Myprofile' className='mt-2' >

                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>City</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={city} onChange={(e) => setcity(e.target.value)} id='city' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400' >Address</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={address} onChange={(e) => setaddress(e.target.value)} id='address' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400' >Zip code</label>
                                    <input type="text" className='border-none p-1 pl-2 rounded-[3px] font-semibold text-[14px] text-gray-800' disabled value={zipcode} onChange={(e) => setzipcode(e.target.value)} id='zipcode' />
                                </div>
                            </div>
                        </div>

                    </>
                )}

        </div>

    )
}

export default PersonalDetails