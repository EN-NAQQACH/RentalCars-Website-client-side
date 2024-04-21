import React, { useEffect, useState, useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
import { useNavigate } from 'react-router-dom';
import { StyleContext } from '../../Stylecontext';

function Account() {
  const navigate = useNavigate()
  const [selectedoption, setSelectedoption] = useState('');
  const token = localStorage.getItem('T_ID_Auth');
  const [firstName, setfirsname] = useState('');
  const [lastName, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [about, setabout] = useState('');
  const [googleid,setgoogleid] = useState(false);

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
        const { firstName, lastName, about, number, email,googleId } = data;
        setfirsname(firstName);
        setlastname(lastName);
        setabout(about);
        setnumber(number);
        setemail(email);
        if(googleId){
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

  return (
    <>
      {!token ? <Authorisation /> : (
        <div className='h-[100%] bg-[rgba(249,248,248,255)] text-black p-6 flex justify-center '>
          <div className='profile-section'>
            <div className='profile-content flex gap-[50px]'>
              <div className='side-content'>
                <div className='container border p-5 w-[250px] flex flex-col justify-center items-center gap-2 bg-white rounded-md'>
                  <div className='w-[80px] h-[75px] '>
                    <img src=".././src/assets/carmainn.jpg" alt="" className='w-full h-full rounded-[50%]' />
                  </div>
                  <div className='flex flex-col justify-center items-center gap-1'>
                    <p className='text-[18px]'>{firstName + ' ' + lastName.charAt(0)}.</p>
                    <Link to="/Profile" className='border p-2 bg-[rgba(249,248,248,255)] rounded-[5px] text-[14px]' >Profile</Link>
                    <p>rates</p>
                    <div>
                      <StarIcon className='text-yellow-500' />
                      <StarIcon className='text-yellow-500' />
                      <StarIcon className='text-yellow-500' />
                      <StarIcon className='text-gray-200' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='center-content'>
                <div className='container-center '>
                  <div className=' w-fit '>
                    <div className='header bg-white p-3 rounded-[5px] w-fit '>
                      <ul className='flex gap-[25px]'>
                        <li onClick={(e) => handleoptionClick('Account', e)} className='cursor-pointer'>
                          Account
                        </li>
                        <li onClick={(e) => handleoptionClick('Reviews', e)} className='cursor-pointer'>
                          Reviews
                        </li>
                      </ul>
                    </div>
                    {selectedoption === 'Account' || selectedoption === "" ? (
                      <div className='content-profile bg-white mt-5 h-[fit-content] w-[550px] rounded-[5px] p-2'>
                        <div className='flex flex-col gap-3'>
                          <div>
                            <p>About {firstName}</p>
                            <textarea name="" id="" className='border border-[rgba(249,248,248,255)] text-gray-500 w-[100%]  text-[13px] h-[100px] p-2 mt-2' placeholder='hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience.' value={about} onChange={(e) => setabout(e.target.value)}>
                            </textarea>
                          </div>
                          <div>
                            <p>Email</p>
                            {googleid ? (
                            <input id="emailid" type="text" placeholder='example@gmail.com' className='w-[50%] border p-2 rounded-[0px] border-[rgba(249,248,248,255)] text-gray-500' value={email} onChange={(e) => setemail(e.target.value)} disabled/>
                            ) : 
                            (<input id="emailid" type="text" placeholder='example@gmail.com' className='w-[50%] border p-2 rounded-[0px] border-[rgba(249,248,248,255)] text-gray-500' value={email} onChange={(e) => setemail(e.target.value)} />
                          )}
                          </div>
                          <div>
                            <p>FirstName</p>
                            <input type="text" placeholder='example@gmail.com' className='w-[50%] border p-2 rounded-[0px] border-[rgba(249,248,248,255)] text-gray-500' value={firstName} onChange={(e) => setfirsname(e.target.value)} />
                          </div>
                          <div>
                            <p>LastName</p>
                            <input type="text" placeholder='example@gmail.com' className='w-[50%] border p-2 rounded-[0px] border-[rgba(249,248,248,255)] text-gray-500' value={lastName} onChange={(e) => setlastname(e.target.value)} />
                          </div>
                          <div>
                            <p>Number</p>
                            <input type="text" placeholder='ex: +212645039244' className='w-[50%] border p-2 rounded-[0px] border-[rgba(249,248,248,255)] text-gray-500' value={number} onChange={(e) => setnumber(e.target.value)} />
                          </div>
                          <div className='flex justify-end mb-2'>
                            <button className='border border-black p-1 w-[100px] bg-black text-white text-center' onClick={updateuserinfo}>
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='content-reviews bg-white mt-5 h-[fit-content] w-[550px] rounded-[5px] p-2'>
                        <div className='flex flex-col gap-4'>
                          <div class="reviews flex flex-col border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center mb-2">
                              <div class="text-yellow-400 font-bold">
                                <img src=".././src/assets/carmainn.jpg" alt="" className='w-[50px] h-[50px] object-center rounded-[50%]' />
                              </div>
                              <div className='flex flex-col ml-[20px]'>
                                <div class="text-sm font-medium">Yousef S.</div>
                                <div class="text-gray-400 text-xs ml-1">February 20, 2024</div>
                              </div>
                            </div>
                            <div className='ml-[70px]'>
                              <p class="text-gray-700">Amazing car and great experience. Very easy pick up and drop off.</p>
                            </div>
                          </div>
                          <div class="reviews flex flex-col border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center mb-2">
                              <div class="text-yellow-400 font-bold">
                                <img src=".././src/assets/carmain.jpg" alt="" className='w-[50px] h-[50px] object-center rounded-[50%]' />
                              </div>
                              <div className='flex flex-col ml-[20px]'>
                                <div class="text-sm font-medium">Yousef S.</div>
                                <div class="text-gray-400 text-xs ml-1">February 20, 2024</div>
                              </div>
                            </div>
                            <div className='ml-[70px]'>
                              <p class="text-gray-700">Amazing car and great experience. Very easy pick up and drop off.</p>
                            </div>
                          </div>
                          <div class="reviews flex flex-col border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center mb-2">
                              <div class="text-yellow-400 font-bold">
                                <img src=".././src/assets/carmain3.jpg" alt="" className='w-[50px] h-[50px] object-center rounded-[50%]' />
                              </div>
                              <div className='flex flex-col ml-[20px]'>
                                <div class="text-sm font-medium">Yousef S.</div>
                                <div class="text-gray-400 text-xs ml-1">February 20, 2024</div>
                              </div>
                            </div>
                            <div className='ml-[70px]'>
                              <p className="text-gray-700">Amazing car and great experience. Very easy pick up and drop off.</p>
                            </div>
                          </div>
                          <div className="reviews flex flex-col border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <div className="text-yellow-400 font-bold">
                                <img src=".././src/assets/carmainn.jpg" alt="" className='w-[50px] h-[50px] object-center rounded-[50%]' />
                              </div>
                              <div className='flex flex-col ml-[20px]'>
                                <div className="text-sm font-medium">Yousef S.</div>
                                <div className="text-gray-400 text-xs ml-1">February 20, 2024</div>
                              </div>
                            </div>
                            <div className='ml-[70px]'>
                              <p className="text-gray-700">Amazing car and great experience. Very easy pick up and drop off.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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