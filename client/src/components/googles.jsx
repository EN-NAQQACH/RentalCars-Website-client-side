import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = ({ setiserrorgoogle, seterrorgoogle }) => {
  const navigate = useNavigate();
  const onsucces = (response) => {
    console.log(response);
  }
  const responseGooglesu = async (response) => {

    try {
      const res = await fetch('https://easlycars-server.vercel.app/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: response.given_name,
          lastName: response.family_name,
          email: response.email,
          picture: response.picture,
          googleId: response.id,
        })
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data.message);
        localStorage.setItem('T_ID_Auth', data.token);
        localStorage.setItem('T_ID_User', data.userId);
        window.location.href = "/"
      } else {
        setiserrorgoogle(true);
        seterrorgoogle(data.error);
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  }

  const responsegooglefai = (error) => {
    console.log(error);
    console.log("fail");
  }
  const signup = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const { access_token } = tokenResponse;

      try {
        const profileResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          responseGooglesu(profileData)
        } else {
          console.error('Failed to fetch user profile:', profileResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
    onError: error => {
      console.error('Google login error:', error);
    }
  });
  return (
    // <GoogleLogin
    //   clientId="523454932051-3cgjaapd1ppuvap9rocq7hqcgbgo3ppa.apps.googleusercontent.com"
    //   buttonText="Login with Google"
    //   onSuccess={responseGooglesu}
    //   onFailure={responsegooglefai}
    //   cookiePolicy={'single_host_origin'}

    //   render={renderProps => (
    //     <>
    //       <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 " onClick={renderProps.onClick} disabled={renderProps.disabled} >
    //         <a href="#" className=" px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
    //       </div>
    //     </>

    //   )}
    // />
    // <GoogleLogin
    //   clientId="YOUR_GOOGLE_CLIENT_ID"
    //   onSuccess={responseGooglesu}
    //   onFailure={responsegooglefai}
    //   cookiePolicy={'single_host_origin'}
    //   render={renderProps => (
    //     <>
    //       <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex justify-center space-x-2 mt-4 rounded-lg border border-black hover:bg-slate-50 px-3 py-2">
    //         <img src="/Gmail.png" alt="" width={"25px"} className='mr-2' />
    //         <span>Sign in with Google</span>
    //       </button>
    //     </>
    //   )}
    // />
    <div className="flex justify-center space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50" onClick={() => signup()}>
      <a href="#" className="px-3 py-2 text-center bg-white-400 text-black font-medium w-full flex justify-center items-center">
        <img src="/Gmail.png" alt="" width={"25px"} className='mr-5' />
        Sign up with Google
      </a>
    </div>


  );
};

export default GoogleLoginButton;
