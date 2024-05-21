import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = ({setiserrorgoogle,seterrorgoogle}) => {
  const navigate = useNavigate();
  const responseGooglesu = async (response) => {
    console.log(response.googleId);

    try {
      const res = await fetch('https://easlycars-server.vercel.app/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          email: response.profileObj.email,
          picture: response.profileObj.imageUrl,
          googleId: response.profileObj.googleId,
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

  return (
    <GoogleLogin
      clientId="523454932051-3cgjaapd1ppuvap9rocq7hqcgbgo3ppa.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGooglesu}
      onFailure={responsegooglefai}
      cookiePolicy={'single_host_origin'}

      render={renderProps => (
        <>
          <div className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 " onClick={renderProps.onClick} disabled={renderProps.disabled} >
            <a href="#" className=" px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
          </div>
        </>

      )}
    />
  );
};

export default GoogleLoginButton;
