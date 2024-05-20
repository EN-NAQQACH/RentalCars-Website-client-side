import React, { useEffect, useState, useContext, createContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link, Outlet } from 'react-router-dom';
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
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const { Option } = Select;
export const photouser = createContext();
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
  const [photo, setphoto] = useState('');
  const [googleid, setgoogleid] = useState(false);
  const [reservation, setreservations] = useState([])
  const [loading, setloading] = useState(false);

  const fetchuser = async () => {
    try {
      setloading(true);
      const res = await fetch('https://rentalcars-website-server-side.onrender.com/api/users/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
        }
      })
      const data = await res.json()
      if (res.ok) {
        const { firstName, lastName, about, number, email, googleId, reservations } = data;
        setfirsname(firstName);
        setlastname(lastName);
        setabout(about);
        setnumber(number);
        setemail(email);
        setphoto(data.picture)
        setreservations(reservations)
        if (googleId) {
          setgoogleid(true)
        }
        setloading(false);
      }
      if (data.error) {
        setloading(false);
        console.log(data.error)
      }
    } catch (err) {
      setloading(false);
      console.log(err)
    }
  }
  const updateuserinfo = async () => {
    try {
      const res = await fetch('https://rentalcars-website-server-side.onrender.com/api/users/update', {
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
  const [togglestate, settogglestate] = useState("");
  const toggle = (index) => {
    settogglestate(index);
  }
  const fullName = JSON.parse(localStorage.getItem('fullName'));


  return (
    <>
      {!token ? <Authorisation /> : (
        <div className=' text-black mb-[20px] min-h-[140vh]' >
          <div className='profile-section ml-[80px] mt-[20px]  mr-[80px]'>
            {loading ? (<>
              <div className="asideprofile h-fit border rounded-xl shadow-sm">
                <div className='aside-content p-4 pt-2'>
                  <div className='image h-[150px] flex justify-center m-auto flex-col items-center '>
                    {/* {loading ? (<>
                    <div  alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%] bg-gray-300 animate-pulse' />

                  </>) : (<>
                    <img src={photo} alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%]' />
                  </>)} */}
                    <div alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%] bg-gray-300 animate-pulse' />
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
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 animate-pulse h-[11px]' />
                    </div>
                    <div className='flex flex-col gap-9 mt-10'>
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                      <div className='font-semibold w-[70%] rounded-lg text-[17px] text-gray-800 bg-gray-300 text-left p-1 animate-pulse h-[11px]' />
                    </div>
                  </div>
                </div>
              </div>

            </>) : (<>

              <div className="asideprofile h-fit border rounded-xl shadow-sm">
                <div className='aside-content p-4 pt-2'>
                  <div className='image h-[150px] flex justify-center m-auto flex-col items-center '>
                    {/* {loading ? (<>
                    <div  alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%] bg-gray-300 animate-pulse' />

                  </>) : (<>
                    <img src={photo} alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%]' />
                  </>)} */}
                    <img src={photo} alt="" className=' h-[100px] w-[100px] object-cover rounded-[50%]' />

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
                      <p className='font-semibold text-[17px] text-gray-800'>{firstName} {lastName}</p>
                    </div>
                    <div className='flex flex-col gap-2 '>
                      <Link to="personal_details" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>Personal Details</Link>
                      <Link to="my-Favorities" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>My Favorities</Link>
                      <Link to="my-notifications" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>Notifications</Link>
                      <Link to="my-listing" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>My cars</Link>
                      <Link to="my-booking" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>My booking</Link>
                      <Link to="my-reservations" className='text-gray-500 text-left font-bold text-[14px] border-transparent p-2 rounded-lg bg-transparent'>My reservations</Link>
                    </div>
                  </div>
                </div>
              </div>


            </>)}

            <div className="main h-[100%] ">
              <div className='main-content h-[100%]' id>
                <photouser.Provider value={{ photo, firstName, lastName }}>
                  <Outlet />
                </photouser.Provider>
              </div>
            </div>
          </div>
        </div >
      )
      }

    </>
  )
}

export default Account;