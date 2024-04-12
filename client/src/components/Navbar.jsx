import { useState, useContext } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import PolicyIcon from '@mui/icons-material/Policy';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StyleContext from '../Stylecontext'


function Navbar() {
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
  };

  const handleLogInClick = (e) => {
    e.preventDefault();

    const modal3 = document.getElementById('my_modal_3');
    const modal4 = document.getElementById('my_modal_4');

    if (modal3 && modal4) {
      modal3.showModal(); // Show modal 3
      modal4.close(); // Hide modal 4
    }
  }

  const handleforgetClick = (e) => {
    e.preventDefault();

    const modal3 = document.getElementById('my_modal_3');
    const modal5 = document.getElementById('my_modal_5');

    if (modal3 && modal5) {
      modal3.close(); // Hide modal 3
      modal5.showModal(); // Show modal 5
    }
  }
  return (
    <>
      {/* modal log in */}
      <dialog id="my_modal_3" className="modal" >
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div class="container mx-auto  flex items-center justify-center">
            <div class="w-full max-w-md p-4 bg-white rounded-lg ">
              <div class="text-center text-2xl font-bold mb-5">
                Sign in to your account
              </div>
              <form class="space-y-4">
                <div class="flex flex-col">
                  <label for="email" class="text-sm font-medium mb-2">Email address</label>
                  <input type="email" name="email" id="email" class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                </div>
                <div class="flex flex-col">
                  <label for="password" class="text-sm font-medium mb-2">Password</label>
                  <input type={showPassword ? 'text' : 'password'} name="password" id="password" class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center">
                      <input type="checkbox" name="remember" id="remember" class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500" />
                      <label for="remember" class="text-sm ml-2">Remember me</label>
                    </div>
                    <Link to={"/"} class="text-sm text-blue-500 hover:underline" onClick={handleforgetClick}>Forgot password?</Link>
                  </div>
                </div>
                <button type="submit" class="block w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700">Sign in</button>
              </form>
              <div class="flex items-center mt-6">
                <div class="h-px bg-gray-300 w-1/2"></div>
                <p class="px-3 text-sm text-gray-400">Or</p>
                <div class="h-px bg-gray-300 w-1/2"></div>
              </div>
              <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 ">
                <a href="#" className="inline-block px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="./src/assets/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
              </div>
              <div class="text-sm text-center mt-4">
                Not a member? <a href="" class="text-blue-500 hover:underline" onClick={handleSignUpClick}>Sign up</a>
              </div>
              <div class="text-sm text-center mt-4">
                By logging in, you agree to Carental Inc.'s <a href="" class="text-blue-500  hover:underline ">Terms of service </a>
              </div>
            </div>
          </div>

        </div>
      </dialog>


      {/* sign up modal */}
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div class="container mx-auto h-50 flex items-center justify-center">
            <div class="w-full max-w-md p-4 bg-white rounded-lg ">
              <div class="text-center text-2xl font-bold mb-8">
                Welcome to CarEntal
              </div>
              <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 ">
                <a href="#" className="inline-block px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="./src/assets/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
              </div>
              <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 ">
                <a href="#" className="inline-block px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="./src/assets/letter.png" alt="" width={"25px"} className='mr-5' />Continue with Email</a>
              </div>
              <div class="flex items-center mt-6">
                <div class="h-px bg-gray-300 w-1/2"></div>
                <p class="px-3 text-sm text-gray-400">Or</p>
                <div class="h-px bg-gray-300 w-1/2"></div>
              </div>
              <div className='mt-20'>
                <div class="text-sm text-center mt-4">
                  Already have an Account? <a href="" class="text-black-500  text-blue-500  hover:underline " onClick={handleLogInClick}>Log in</a>
                </div>
                <div class="text-sm text-center mt-4">
                  By logging in, you agree to Carental Inc.'s <a href="" class="text-blue-500  hover:underline ">Terms of service </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* forget password modal */}

      <dialog id="my_modal_5" className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div class="container mx-auto h-50 flex items-center justify-center">
            <div class="w-full max-w-md p-4 bg-white rounded-lg ">
              <div class="text-center text-2xl font-bold mb-6">
                Welcome to CarEntal
              </div>
              <form class="space-y-4">
                <div class="flex flex-col">
                  <label for="email" class="text-sm font-medium mb-2">Email address</label>
                  <input type="email" name="email" id="email" class="px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:ring-1" required />
                </div>
                <button type="submit" class="block w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700">Continue</button>
              </form>
              <div class="text-center mt-6">
                <a href="#" class="text-sm text-gray-400 hover:underline">We'll email you a code to confirm your email.</a>
              </div>
              <div class="flex items-center justify-center mt-4">
                <a href="#" class="text-sm text-blue-500 hover:underline" onClick={() => { document.getElementById('my_modal_3').showModal(); document.getElementById('my_modal_5').close() }}>Back</a>
              </div>

            </div>
          </div>
        </div>
      </dialog>


      <div className="navbar bg-base-100 sticky z-20" style={{fontFamily: style.fontFamily,fontWeight:style.fontWeight,letterSpacing:style.LetterSpacing}}>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Our Cars</a></li>
            <li><a>Our Locations</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-hover dropdown-end ">
            <div tabIndex={0} role="button" className="= border m-1 p-2  bg-gray-900 text-white transition duration-500 hover:text-black hover:bg-white hover:border border-black ">
              <MenuIcon />
              <AccountCircleIcon />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box min-w-80 mt-1">
              <li className='transition duration-300 hover:bg-slate-100 ' > <Link to="" onClick={() => document.getElementById('my_modal_3').showModal()} >Log in</Link></li>
              <li className='transition duration-300 hover:bg-slate-100'><Link to="" onClick={() => document.getElementById('my_modal_4').showModal()} >Sign up</Link></li>
              <div className="divider p-0 m-0 mr-1 ml-1"></div>
              <li className='transition duration-300 hover:bg-slate-100'><a><PolicyIcon />Policies</a></li>
              <li className='transition duration-300 hover:bg-slate-100'><a><EmailIcon />Contact</a></li>
              <li className='transition duration-300 hover:bg-slate-100'><a><DirectionsCarIcon />Our cars</a></li>
              <li className='transition duration-300 hover:bg-slate-100'><a><LocationOnIcon />Our locations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar