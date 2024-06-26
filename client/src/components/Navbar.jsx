import { useState, useContext, useEffect } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import PolicyIcon from '@mui/icons-material/Policy';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { StyleContext } from '../Stylecontext'; // Import StyleContext as a named export
// import { GoogleLogin } from 'react-google-login';
import GoogleLoginButton from './googles';
import GoogleLoginButton2 from './googlel';
import { Helmet } from 'react-helmet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LoginIcon from '@mui/icons-material/Login';
import Dialog from '../utils/Loader';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { Button, message, Steps, theme, Radio, Input, Select, Checkbox, Modal, Form } from 'antd';
import CryptoJS from 'crypto-js';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Dropdown, Space } from 'antd';
import { Menu } from 'antd';
function Navbar() {

  const next = () => {
    form
      .validateFields()
      .then(() => {
        handleSignup();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  const nextt = () => {
    form2
      .validateFields()
      .then(() => {
        handeLogin();

      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  const nexttt = () => {
    form3
      .validateFields()
      .then(() => {
        resetPassword();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();
  const navigate = useNavigate();
  const [isuserauth, setUserauth] = useState(false)
  const [token, setToken] = useState((localStorage.getItem('T_ID_Auth')))
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [issignup, setsignup] = useState(false);
  const [error, seterror] = useState('');
  const [iserror, setiserror] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emaillogin, setEmaillogin] = useState('');
  const [passwordlogin, setpasswordlogin] = useState('');
  const [emailreset, setemailreset] = useState('')
  const [errorgoogle, seterrorgoogle] = useState('');
  const [iserrorgoogle, setiserrorgoogle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setphoto] = useState('');

  const [errorsignup, seterrorsignup] = useState('');
  const [iserrorsignup, setiserrorsignup] = useState(false);
  const [loadingsignup, setloadingsignup] = useState(false)

  const [errorsendpassword, seterrorsentpassword] = useState('');
  const [iserrorsendpassword, setiserrorsendpassword] = useState(false);
  const [loadingsendpassword, setloadingsendpassword] = useState(false)
  const [messageok, setmessageok] = useState('');
  const [messagesent, setmessagesent] = useState(false);

  const handleSignup = async () => {
    try {
      setloadingsignup(true);
      const response = await fetch('https://easlycars-server.vercel.app/api/account/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setsignup(true);
        setloadingsignup(false);
      } else {
        setiserrorsignup(true);
        seterrorsignup(data.error);
        setloadingsignup(false);
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  }
  const handeLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://easlycars-server.vercel.app/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emaillogin,
          password: passwordlogin,
        })
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        localStorage.setItem('T_ID_Auth', data.token);
        localStorage.setItem('T_ID_User', data.userId);
        setIsLoggedIn(true);
        window.location.href = "/account/personal_details"
        localStorage.setItem('photo', data.photo);
        localStorage.setItem('lastName', data.lastName);
      } else {
        setIsLoggedIn(false);
        setiserror(true);
        seterror(data.error);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  }
  const resetPassword = async () => {
    try {
      setloadingsendpassword(true);
      const response = await fetch('https://easlycars-server.vercel.app/api/users/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailreset
        })
      });
      const data = await response.json();
      if (response.ok) {
        setmessagesent(true);
        setmessageok(data.message);
        setloadingsendpassword(false);
      } else {
        setloadingsendpassword(false);
        setiserrorsendpassword(true);
        seterrorsentpassword(data.error);
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
      setloadingsendpassword(false);
    }
  }
  useEffect(() => {
    if (token) {
      setUserauth(true)
    }
  }, [])
  useEffect(() => {
    const getuserInfo = async () => {
      try {
        const reponse = await fetch('https://easlycars-server.vercel.app/api/users/info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
          }
        })
        const data = await reponse.json();
        if (data) {
          const fullName = {
            firstName: data.firstName,
            lastName: data.lastName
          }
          localStorage.setItem('fullName', JSON.stringify(fullName))
          setphoto(data.picture)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getuserInfo()
  }, [token])
  const [showPassword, setShowPassword] = React.useState(false);
  const style = useContext(StyleContext);
  const handleSignUpClick = (e) => {
    e.preventDefault();
    const modal3 = document.getElementById('my_modal_3');
    const modal4 = document.getElementById('my_modal_4');
    if (modal3 && modal4) {
      modal3.close(); // Hide modal 3
      modal4.showModal(); // Show modal 4
    }
    setiserror(false)
  };

  const handleLogInClick = (e) => {
    e.preventDefault();
    const modal3 = document.getElementById('my_modal_3');
    const modal4 = document.getElementById('my_modal_4');
    if (modal3 && modal4) {
      modal3.showModal(); // Show modal 3
      modal4.close(); // Hide modal 4
    }
    setiserror(false)
    setiserrorgoogle(false)
  }
  const handleforgetClick = (e) => {
    e.preventDefault();
    const modal3 = document.getElementById('my_modal_3');
    const modal5 = document.getElementById('my_modal_5');
    if (modal3 && modal5) {
      modal3.close(); // Hide modal 3
      modal5.showModal(); // Show modal 5
    }
    setiserror(false)

  }
  const handlewithemailnClick = (e) => {
    e.preventDefault();
    const modal6 = document.getElementById('my_modal_6');
    const modal4 = document.getElementById('my_modal_4');
    if (modal6 && modal4) {
      modal6.showModal(); // Show modal 3
      modal4.close(); // Hide modal 4
    }
    setiserrorgoogle(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('T_ID_Auth');
    localStorage.removeItem('image');
    setUserauth(false);
    navigate('/');
  };

  // const signupwithgoogle = () => {
  //   const client = google.accounts.oauth2.initCodeClient({
  //     client_id: '523454932051-3cgjaapd1ppuvap9rocq7hqcgbgo3ppa.apps.googleusercontent.com',
  //     scope: 'https://www.googleapis.com/auth/userinfo.profile',
  //     ux_mode: 'popup',
  //     callback: (response) => {
  //       if (response.code) {
  //         console.log(response.code);
  //       }
  //     },
  //   });
  //   client.requestCode();
  // }
  function showmodal3() {
    const modal3 = document.getElementById('my_modal_3');
    const modal4 = document.getElementById('my_modal_4');
    if (modal3 && modal4) {
      modal3.showModal(); // Show modal 3
      modal4.close(); // Hide modal 4
    }
  }
  const menu = (
    <Menu className='w-[250px]'>
      <Menu.Item className=''>
        <Link to="/account/my-Favorities" className='flex items-center gap-4'>
          <FavoriteBorderOutlinedIcon /> Favorites
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a href="/account/my-notifications" className='flex items-center gap-4'>
          <AllInboxIcon /> Inbox
        </a>
      </Menu.Item>
      <div className="divider p-0 m-0 mr-1 ml-1 mt-3 mb-3 bg-gray-200 h-[1px]"></div>
      <Menu.Item>
        <a href="/become_a_host" className='flex items-center gap-4'>
          <CarRentalOutlinedIcon /> Become a host
        </a>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Account" className='flex items-center gap-4'>
          <AccountCircleOutlinedIcon /> Account
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a href="/account/my-listing" className='flex items-center gap-4'>
          <PersonOutlineOutlinedIcon /> My Cars
        </a>
      </Menu.Item>
      <div className="divider p-0 m-0 mr-1 ml-1 mt-3 mb-3 bg-gray-200 h-[1px]"></div>
      <Menu.Item>
        <a href='/EaslyCars-Policies' className='flex items-center gap-4'>
          <PolicyIcon /> Policies
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href='/contactUs' className='flex items-center gap-4'>
          <EmailIcon /> Contact
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href='/carhome' className='flex items-center gap-4'>
          <DirectionsCarIcon /> Our cars
        </a>
      </Menu.Item>
      <Menu.Item onClick={handleLogout}>
        <a className='flex items-center gap-4'>
          <LoginIcon /> Log out
        </a>
      </Menu.Item>
    </Menu>
  );
  const [isAsideVisible, setIsAsideVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsAsideVisible(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {/* <Helmet>
        <script src="https://accounts.google.com/gsi/client" async defer />
      </Helmet> */}
      {/* modal log in */}

      <dialog id="my_modal_3" className="modal" >
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { form2.resetFields(); setiserror(false) }}>✕</button>
          </form>
          <div className="container mx-auto  flex items-center justify-center">
            <div className="w-full max-w-md p-4 bg-white rounded-lg ">
              <div className="text-center text-2xl font-bold mb-5">
                Sign in to your account
              </div>
              {iserror ? (
                <div className="flex flex-col border rounded-md justify-center m-auto p-2 items-center text-center mt-2  mb-5">
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                </div>
              ) : <></>}
              <form className="space-y-4">
                <div className="flex flex-col">
                  <Form form={form2} name="basic">
                    <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Email</label>
                    <Form.Item
                      className=''
                      name="email2"
                      rules={[
                        {
                          required: true,
                          message: 'you forgot your email',
                          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                        },
                      ]}
                    >
                      <Input type='email' placeholder="Email" className='rounded-[5px] p-2' value={emaillogin} onChange={(e) => { setEmaillogin(e.target.value); setiserror(false) }} />
                    </Form.Item>
                    <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Password</label>
                    <Form.Item
                      className=''
                      name="password2"
                      rules={[
                        {
                          required: true,
                          message: 'you forgot your password',
                        },
                      ]}
                    >
                      <Input.Password type='text' placeholder="password" className='rounded-[5px] p-2' value={passwordlogin} onChange={(e) => { setpasswordlogin(e.target.value); setiserror(false) }} />
                    </Form.Item>

                    {loading ? (<Button id="signupbtn" className='mt-2' onClick={() => nextt()} loading={true} >Sign in</Button>) : (<Button id="signupbtn" className='mt-2' onClick={() => nextt()}  >Sign In</Button>)}


                  </Form>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-end ">
                    <Link to={""} className="text-sm text-blue-500 hover:underline" onClick={handleforgetClick}>Rest password?</Link>
                  </div>

                </div>
              </form>
              <div className="flex items-center mt-6">
                <div className="h-px bg-gray-300 w-1/2"></div>
                <p className="px-3 text-sm text-gray-400">Or</p>
                <div className="h-px bg-gray-300 w-1/2"></div>
              </div>
              {/* <button onClick={signupwithgoogle}>si</button> */}
              <GoogleLoginButton2 userauth={setUserauth} />
              <div className="text-sm text-center mt-4">
                Not a member? <Link to={""} className="text-blue-500 hover:underline" onClick={handleSignUpClick}>Sign up</Link>
              </div>
              <div className="text-sm text-center mt-4">
                By logging in, you agree to EaslyCars.'s <a href="/termsofService" className="text-blue-500  hover:underline ">Terms of service </a>
              </div>
            </div>
          </div>
        </div >
      </dialog >

      {/* sign up modal */}
      <dialog dialog id="my_modal_4" className="modal " >
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="container mx-auto h-50 flex items-center justify-center">
            <div className="w-full max-w-md p-4 bg-white rounded-lg ">
              <div className="text-center text-2xl font-bold mb-8">
                Welcome to CarEntal
              </div>
              <GoogleLoginButton setiserrorgoogle={setiserrorgoogle} seterrorgoogle={seterrorgoogle} />
              <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 ">
                <a href="#" className="inline-block px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center" onClick={handlewithemailnClick}><img src="./src/assets/letter.png" alt="" width={"25px"} className='mr-5' />Continue with Email</a>
              </div>
              <div className="flex items-center mt-6">
                <div className="h-px bg-gray-300 w-1/2"></div>
                <p className="px-3 text-sm text-gray-400">Or</p>
                <div className="h-px bg-gray-300 w-1/2"></div>
              </div>
              {iserrorgoogle ? (
                <div className="flex flex-col border rounded-md justify-center m-auto p-2 items-center text-center mt-2  mb-5">
                  <p className="text-sm text-red-600 font-medium">{errorgoogle}</p>
                </div>
              ) : <></>}
              <div className='mt-20'>
                <div className="text-sm text-center mt-4">
                  Already have an Account? <a href="" className="text-black-500  text-blue-500  hover:underline " onClick={handleLogInClick}>Log in</a>
                </div>
                <div className="text-sm text-center mt-4">
                  By logging in, you agree to EaslyCars.'s <a href="/termsofService" className="text-blue-500  hover:underline ">Terms of service </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog >

      {/* forget password modal */}
      <dialog dialog id="my_modal_5" className="modal " >
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => form3.resetFields()}>✕</button>
          </form>
          <div className="container mx-auto h-50 flex items-center justify-center">
            <div className="w-full max-w-md p-4 bg-white rounded-lg ">
              <div className="text-center text-2xl font-bold mb-6">
                Welcome to CarEntal
              </div>
              {iserrorsendpassword ? (
                <div className="flex flex-col border rounded-md justify-center m-auto p-2 items-center text-center mt-2  mb-5">
                  <p className="text-sm text-red-600 font-medium">{errorsendpassword}</p>
                </div>
              ) : <></>}
              {messagesent && (
                <div className="flex flex-col border rounded-md justify-center m-auto p-2 items-center text-center mt-2  mb-5">
                  <p className="text-sm text-green-600 font-medium">{messageok}</p>
                </div>
              )}
              <form className="space-y-4">
                <div className="flex flex-col">
                  <Form form={form3} name="basic">
                    <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Email</label>
                    <Form.Item
                      className=''
                      name="emailrestpassword"
                      rules={[
                        {
                          required: true,
                          message: 'you forgot your email',
                          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                        },
                      ]}
                    >
                      <Input type='email' placeholder="Email" className='rounded-[5px] p-2' value={emailreset} onChange={(e) => { setemailreset(e.target.value); setiserrorsendpassword(false) }} />
                    </Form.Item>
                    {loadingsendpassword ? (<Button id="signupbtn" className='mt-2' onClick={() => nexttt()} loading={true} >Continue</Button>) : (<Button id="signupbtn" className='mt-2' onClick={() => { nexttt() }}  >Continue</Button>)}
                  </Form>
                </div>              </form>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400 hover:underline">We'll send the password to your email .</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-sm text-blue-500 hover:underline" onClick={() => { document.getElementById('my_modal_3').showModal(); document.getElementById('my_modal_5').close(); form3.resetFields(); setiserrorsendpassword(false); setmessagesent(false) }}>Back</a>
              </div>

            </div>
          </div>
        </div>
      </dialog >

      {/* password reseted */}

      {/* <dialog dialog id="my_modal_5" className="modal " >
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => form4.resetFields()}>✕</button>
          </form>
          <div className="container mx-auto h-50 flex items-center justify-center">
            <div className="w-full max-w-md p-4 bg-white rounded-lg ">
              <div className="text-center text-2xl font-bold mb-6">
                Welcome to CarEntal
              </div>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <Form form={form4} name="basic">
                    <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Email</label>
                    <Form.Item
                      className=''
                      name="newpassword"
                      rules={[
                        {
                          required: true,
                          message: 'you forgot your email',

                        },
                      ]}
                    >
                      <Input.Password type='text' placeholder="password" className='rounded-[5px] p-2' value={emaillogin} onChange={(e) => setEmaillogin(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                      className=''
                      name="confirmpassword"
                      rules={[
                        {
                          required: true,
                          message: 'you forgot your password',

                        },
                      ]}
                    >
                      <Input.Password type='text' placeholder="password" className='rounded-[5px] p-2' value={passwordlogin} onChange={(e) => setpasswordlogin(e.target.value)} />
                    </Form.Item>
                  </Form>
                </div>
                <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700">Continue</button>
              </form>
              <div className="text-center mt-6">
                <p href="#" className="text-sm text-gray-400 hover:underline">We'll send the password to your email .</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-sm text-blue-500 hover:underline" onClick={() => { document.getElementById('my_modal_3').showModal(); document.getElementById('my_modal_5').close(); form3.resetFields() }}>Back</a>
              </div>

            </div>
          </div>
        </div>
      </dialog > */}

      {/* sign up modal with email */}
      {
        issignup ? (
          showmodal3()
        ) : (
          <dialog id="my_modal_6" className="modal" >
            <div className="modal-box bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { form.resetFields(); setiserrorsignup(false) }}>✕</button>
              </form>
              <div className="container mx-auto  flex items-center justify-center">
                <div className="w-full max-w-md p-4 bg-white rounded-lg ">
                  <div className="text-center text-2xl font-bold mb-5">
                    Sign in to your account
                  </div>
                  {iserrorsignup ? (
                    <div className="flex flex-col border rounded-md justify-center m-auto p-2 items-center text-center mt-2  mb-5">
                      <p className="text-sm text-red-600 font-medium">{errorsignup}</p>
                    </div>
                  ) : <></>}
                  <form className="space-y-4">
                    {/* <div className="flex flex-col">
                    <label htmlFor="firstname" className="text-sm font-medium mb-2">firstName</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstname(e.target.value)} id="firstname" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                  </div> */}
                    <Form form={form} name="basic">
                      <label htmlFor="" className="block mb-1 text-[14px] font-semibold">firstName</label>
                      <Form.Item
                        className=''
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: 'you forgot your firstname',
                          },
                        ]}
                      >
                        <Input type='text' placeholder="Firstname" className='rounded-[5px] p-2' value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                      </Form.Item>

                      <label htmlFor="" className="block mb-1 text-[14px] font-semibold">lastName</label>
                      <Form.Item
                        className=''
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: 'you forgot your lastname',
                          },
                        ]}
                      >
                        <Input type='text' placeholder="Lastname" className='rounded-[5px] p-2 ' value={lastName} onChange={(e) => setLastname(e.target.value)} />
                      </Form.Item>

                      <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Email</label>
                      <Form.Item
                        className=''
                        name="email"

                        rules={[
                          {
                            required: true,
                            message: 'you forgot your email',
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          },
                        ]}
                      >
                        <Input type='email' placeholder="Email" className='rounded-[5px] p-2 ' value={email} onChange={(e) => { setEmail(e.target.value); setiserrorsignup(false) }} />
                      </Form.Item>

                      <label htmlFor="" className="block mb-1 text-[14px] font-semibold">Password</label>
                      <Form.Item
                        className=''
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'you forgot your password',
                          },
                        ]}
                      >
                        <Input.Password type='text' placeholder="Password" className='rounded-[5px] p-2 ' value={password} onChange={(e) => setpassword(e.target.value)} />
                      </Form.Item>
                      {loadingsignup ? (<Button id="signupbtn" className='mt-2' onClick={() => { next() }} loading={true} >Sign up</Button>) : (<Button id="signupbtn" className='mt-2' onClick={() => { next(); setiserrorsignup(false) }}  >Sign up</Button>)}

                    </Form>

                    {/* <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-medium mb-2">LastName</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastname(e.target.value)} id="lastName" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email1" className="text-sm font-medium mb-2">Email address</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email1" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={(e) => setpassword(e.target.value)} id="password" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                  </div> */}

                    {/* <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700" onClick={(e) => handleSignup(e)}>Sign in</button> */}
                  </form>
                  <div className="flex items-center justify-center mt-4">
                    <a href="#" className="text-sm text-blue-500 hover:underline" onClick={() => { document.getElementById('my_modal_3').showModal(); document.getElementById('my_modal_6').close(); form.resetFields(); form2.resetFields(); setiserrorsignup(false) }}>Back</a>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )
      }

      {
        isuserauth ? (

          <div className="navbar bg-base-100 sticky z-20 " style={{ fontFamily: style.fontFamily, fontWeight: style.fontWeight, letterSpacing: style.LetterSpacing }}>
            <div className="navbar-start">
             

            <a href="/">
                <img src='/easlycarslogo2.png' className=" btn btn-ghost text-xl"   />
              </a>
             

            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a href='/carhome'>Our Cars</a></li>
                <li><a href='/#destinations'>Our Destinations</a></li>
                <li><a href='/contactUs'>Contact us</a></li>
              </ul>
            </div>
            <div className="navbar-end flex justify-end">

              <Space direction="vertical">
                <Space wrap>
                  <Dropdown overlay={menu} placement="bottomRight" arrow >
                    <Tooltip >

                      <IconButton

                        size="small"
                        sx={{ ml: 2, }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        {photo ? (
                          <Avatar sx={{ width: 39, height: 39, }} className='shadow-lg'><img src={photo} alt="" className='w-full h-full object-cover ' />
                          </Avatar>
                        ) : <Avatar src="/broken-image.jpg" />}
                      </IconButton>
                    </Tooltip>
                  </Dropdown>
                </Space>
              </Space>
            </div>

          </div>

        ) : (
          <div className="navbar bg-base-100 relative z-20" style={{ fontFamily: style.fontFamily, fontWeight: style.fontWeight, letterSpacing: style.LetterSpacing }}>
            <div className="navbar-start">
              <a href="/">
                <img src='/easlycarslogo2.png' className=" btn btn-ghost text-xl"   />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a href='/carhome'>Our Cars</a></li>
                <li><a href='#destinations'>Our Destinations</a></li>
                <li><a href='/contactUs'>Contact us</a></li>
              </ul>
            </div>
            <div className="navbar-end ">
              {isAsideVisible ? (<>
                <div className="dropdown dropdown-hover dropdown-end ">
                  <div tabIndex={0} role="button" className="= border  m-1 p-1  bg-gray-900 text-white transition duration-500 hover:text-black hover:bg-white hover:border border-black shadow-md">
                    <MenuIcon />
                    <AccountCircleIcon />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box min-w-80 mt-1">
                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px] ' > <button onClick={() => document.getElementById('my_modal_3').showModal()} >Log in</button></li>
                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px]'><button onClick={() => document.getElementById('my_modal_4').showModal()} >Sign up</button></li>
                    <div className="divider p-0 m-0 mr-1 ml-1 mt-3 mb-3 bg-gray-200 h-[1px]"></div>

                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px]'><a href='/EaslyCars-Policies'><PolicyIcon />Policies</a></li>
                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px]'><a href='/contactUs'><EmailIcon />Contact</a></li>
                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px]'><a href='/carhome'><DirectionsCarIcon />Our cars</a></li>
                    <li className='transition duration-300 hover:bg-gray-100 hover:rounded-[6px]'><a href='#destinations'><LocationOnIcon />Our destinations</a></li>
                  </ul>
                </div>


              </>) : (

                <>
                  <div className='flex gap-2'>
                    <button className='pl-5 pr-5 pt-[6px] pb-[6px] border rounded-2xl text-[13px] bg-white text-[black]' onClick={() => document.getElementById('my_modal_3').showModal()}>Log In</button>
                    <button className='pl-5 pr-5 pt-[6px] pb-[6px] border rounded-2xl text-[13px] bg-black text-[white]' onClick={() => document.getElementById('my_modal_4').showModal()}>Sign Up</button>
                  </div>
                </>
              )}




            </div>
          </div>

        )
      }
    </>
  )
}

export default Navbar