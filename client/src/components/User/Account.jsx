import React, { useEffect, useState, useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
import { useNavigate } from 'react-router-dom';
import { StyleContext } from '../../Stylecontext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Select } from 'antd';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import '../cardeffect.css'

const { Option } = Select;

const longText = `
Tell hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience. Feel free to include links to your LinkedIn, Twitter, or Facebook profiles so they get to know you even better.
`;

function Account() {
  const navigate = useNavigate()
  const [selectedoption, setSelectedoption] = useState('');
  const token = localStorage.getItem('T_ID_Auth');
  const [firstName, setfirsname] = useState('');
  const [lastName, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [about, setabout] = useState('');
  const [googleid, setgoogleid] = useState(false);

  const fetchuser = async () => {
    try {
      const res = await fetch('http://localhost:5600/api/users/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
        }
      })
      const data = await res.json()
      if (res.ok) {
        const { firstName, lastName, about, number, email, googleId } = data;
        setfirsname(firstName);
        setlastname(lastName);
        setabout(about);
        setnumber(number);
        setemail(email);
        if (googleId) {
          setgoogleid(true)
        }
      }
      if (data.error) {
        console.log(data.error)
      }
    } catch (err) {
      console.log(err)
    }
  }


  const updateuserinfo = async () => {
    try {
      const res = await fetch('http://localhost:5600/api/users/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
        },
        body: JSON.stringify({
          firstName,
          lastName,
          about,
          number,
          email
        })
      })
      const data = await res.json()
      if (res.ok) {
        fetchuser();
        console.log(data)
      } else {
        console.log(data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchuser();
  }, [])

  const handleoptionClick = (option, e) => {
    const lis = document.querySelectorAll('.header li');
    lis.forEach(li => li.style.color = 'black');
    e.target.style.color = 'blue';
    setSelectedoption(option);
  };
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
    return;
  }, [token])

  const handeleeditbtn = () => {
    const firstname = document.getElementById('Firstname');
    const lastname = document.getElementById('Lastname');
    const emaill = document.getElementById('emaill');
    const number = document.getElementById('number');
    const about = document.getElementById('aboutme');

    if (firstname.disabled) {
      firstname.disabled = false;
      firstname.style.border = '1px solid gray';

      lastname.disabled = false;
      lastname.style.border = '1px solid gray';

      emaill.disabled = false;
      emaill.style.border = '1px solid gray';

      number.disabled = false;
      number.style.border = '1px solid gray';

      about.disabled = false;
      about.style.border = '1px solid gray';
    }
    const editbtn = document.getElementById('editbtn');
    editbtn.style.display = 'none'
    const savebtn = document.getElementById('updatebtn');
    savebtn.style.display = 'flex'

  }

  return (
    <>
      {!token ? <Authorisation /> : (
        <div className=' text-black mb-[20px]' >
          <div className='profile-section ml-[80px] mt-[20px]  mr-[80px]'>
            <div className="asideprofile h-[100%] border rounded-xl">
              <div className='aside-content p-4 pt-2'>
                <div className='image h-[150px] flex justify-center m-auto flex-col items-center '>
                  <img src="./src/assets/carmain9.jpg" alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%]' />
                  <div className='mt-2'>
                    <StarIcon className='text-[#9e8df1]' />
                    <StarIcon className='text-[#9e8df1]' />
                    <StarIcon className='text-[#9e8df1]' />
                    <StarIcon className='text-[#9e8df1]' />
                  </div>
                </div>
                <div>
                  <div className='flex flex-col gap-2 justify-between items-center mb-4'>
                    <button className='border pl-2 pr-2 rounded-lg text-[12px]'>Host</button>
                    <p className='font-semibold text-[17px] text-gray-800'>Mohssine En-naqqach</p>
                  </div>
                  <div className='flex flex-col gap-3 '>
                    <p className='text-[white] font-bold text-[14px] border p-2 rounded-lg bg-[#9e8df1]'>Personal Details</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>Account (Listing)</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>Reviews</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>Favorite</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>Notifications</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>My cars</p>
                    <p className='text-gray-500 font-semibold text-[14px]'>My booking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main h-[100%] ">
              <div className='main-content h-[100%]' id>
                {/* <div className='myprofileinfo border rounded-xl p-3 h-[100%]'>
                  <div className='flex justify-between items-center mb-3'>
                    <p className='text-[18px] font-semibold text-gray-700'>My Profile</p>
                    <button className='border pl-3 pr-3 pt-1 pb-1 flex items-center gap-2 rounded-2xl font-semibold text-[#9682ff] hover:text-[#5c3cfc]' onClick={handeleeditbtn} id='editbtn'> <BorderColorIcon />Edit</button>
                    <button className='border pl-3 pr-3 pt-1 pb-1  items-center gap-2 rounded-2xl font-semibold text-[#9682ff] hover:text-[#5c3cfc] hidden' onClick={handeleeditbtn} id='updatebtn'> <BorderColorIcon />Update</button>
                  </div>
                  <div id='Myprofile'>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'> First Name</label>
                      <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine"} id='Firstname' />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400' >Last Name</label>
                      <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine"} id='Lastname'/>
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Last Name</label>
                      <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"En-naqqach"} />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Phone Number</label>
                      <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"0645039244"} id='number'/>
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Email</label>
                      <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine@gmail.com"} id='emaill'/>
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
                      <textarea type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-400 min-h-[100px]' disabled id='aboutme'/>
                    </div>
                  </div>
                </div> */}
                {/* <div className='mylistinginfo border rounded-xl p-3 h-[100%]'>
                  <div className='flex justify-between items-center mb-3'>
                    <p className='text-[18px] font-semibold text-gray-700'>My Cars</p>
                    <div className='sort-component  w-[220px]'>
                      <Select className='w-[100%]' placeholder="Sort by">
                        <Option>Newest</Option>
                        <Option>Oldest</Option>
                        <Option>Highest Price</Option>
                        <Option>Lowest Price</Option>
                      </Select>
                    </div>
                  </div>
                  <div className='cars-componentss mt-5 max-w-[100%] felx items-center '>
                    <div className='car-cards relative '>
                      <div className="car-card-componentss   h-fit border rounded-lg shadow-sm">
                        <img src="../../src/assets/carmain9.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                          <div className='flex justify-between'>
                            <div >
                              <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                              <p className='text-[14px] font-bold text-gray-500'>Bmw cs model 2019</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>$100 </span>/ Day</p>
                            </div>
                          </div>
                          <div className='flex gap-3 mt-2  '>
                            <p className='flex gap-3 items-center'>
                              <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>5 seats
                              </span></p>
                            <p className='flex gap-3 items-center'>
                              <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>Automatic
                              </span></p>
                            <div className='flex gap-3 items-center'>
                              <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                              <p className='text-[12px] text-gray-600 font-bold'>disel</p>
                            </div>
                          </div>
                          <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                          <div>
                          </div>
                          <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                        </div>
                      </div>
                      <div className='contentdiv'>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[red]'><HighlightOffIcon /> Delete</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[#4c4cc5]'><RemoveRedEyeIcon/> View</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[green]'><BorderColorIcon/> Edit</button>
                      </div>
                    </div>
                    <div className='car-cards relative '>
                      <div className="car-card-componentss  h-fit border rounded-lg shadow-sm">
                        <img src="../../src/assets/carmain10.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                          <div className='flex justify-between'>
                            <div >
                              <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                              <p className='text-[14px] font-bold text-gray-500'>Bmw cs model 2019</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>$100 </span>/ Day</p>
                            </div>
                          </div>
                          <div className='flex gap-3 mt-2  '>
                            <p className='flex gap-3 items-center'>
                              <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>5 seats
                              </span></p>
                            <p className='flex gap-3 items-center'>
                              <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>Automatic
                              </span></p>
                            <div className='flex gap-3 items-center'>
                              <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                              <p className='text-[12px] text-gray-600 font-bold'>disel</p>
                            </div>
                          </div>
                          <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                          <div>
                          </div>
                          <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                        </div>
                      </div>
                      <div className='contentdiv'>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[red]'><HighlightOffIcon /> Delete</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[#4c4cc5]'><RemoveRedEyeIcon/> View</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[green]'><BorderColorIcon/> Edit</button>
                      </div>
                    </div>
                    <div className='car-cards relative '>
                      <div className="car-card-componentss  h-fit border rounded-lg shadow-sm">
                        <img src="../../src/assets/carmain12.jpg" alt="" className='h-full w-full rounded-tr-lg rounded-tl-lg object-cover' />
                        <div className='mt-2 p-2'>
                          <div className='flex justify-between'>
                            <div >
                              <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>Cars</p>
                              <p className='text-[14px] font-bold text-gray-500'>Bmw cs model 2019</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>$100 </span>/ Day</p>
                            </div>
                          </div>
                          <div className='flex gap-3 mt-2  '>
                            <p className='flex gap-3 items-center'>
                              <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>5 seats
                              </span></p>
                            <p className='flex gap-3 items-center'>
                              <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>Automatic
                              </span></p>
                            <div className='flex gap-3 items-center'>
                              <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                              <p className='text-[12px] text-gray-600 font-bold'>disel</p>
                            </div>
                          </div>
                          <p className='mt-1 flex justify-end items-center gap-1 text-[12px]'>Free cancellation <HelpIcon className="text-green-500" /></p>
                          <div>
                          </div>
                          <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon /> Agadir, Morocco</p></div>
                        </div>
                      </div>
                      <div className='contentdiv'>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[red]'><HighlightOffIcon /> Delete</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[#4c4cc5]'><RemoveRedEyeIcon/> View</button>
                        <button className='flex items-center gap-1 border rounded-lg pt-1 pb-1 pl-2 pr-2 text-[green]'><BorderColorIcon/> Edit</button>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='myReviewsinfo border rounded-xl p-3 h-[100%]'>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default Account;