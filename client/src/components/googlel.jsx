import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';



const GoogleLoginButton2 = (props) => {

  const navigate = useNavigate();
  // const onsucces = (response) => {
  //   console.log(response);
  //   const token = response?.credential;
  //   const decodedToken = jwtDecode(token);
  // }
  const responseGooglesu = async (response) => {
    // const token = response?.credential;
    // const decodedToken = jwtDecode(token);
    // console.log(decodedToken);
    try {
      const res = await fetch('https://easlycars-server.vercel.app/api/auth/googlelogin', {
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
        localStorage.setItem('image', response.picture);
        props.userauth(true)
        window.location.pathname = '/account/personal_details';
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  }

  const responsegooglefai = (error) => {
    console.log(error);
    console.log("fail");
  }
  const login = useGoogleLogin({
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
          responseGooglesu(profileData);
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
    //     clientId="523454932051-3cgjaapd1ppuvap9rocq7hqcgbgo3ppa.apps.googleusercontent.com"
    //     buttonText="Login with Google"
    //     onSuccess={responseGooglesu}
    //     onFailure={responsegooglefai}
    //     cookiePolicy={'single_host_origin'}

    //     render={renderProps => (

    //         <div  className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 " onClick={renderProps.onClick} disabled={renderProps.disabled} >
    //             <a href="#" className=" px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
    //         </div>
    //     )}
    // />
    //   <GoogleLogin
    //   buttonText="Sign In with Google" // Customize the button text here
    //   onSuccess={responseGooglesu}
    //   onFailure={responsegooglefai}
    //   render={({ signIn }) => (
    //    
    //   )}
    // />
    <>
      <div className="flex justify-center space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50" onClick={() => login()}>
        <a href="#" className="px-3 py-2 text-center bg-white-400 text-black font-medium w-full flex justify-center items-center">
          <img src="/Gmail.png" alt="" width={"25px"} className='mr-5' />
          Sign In with Google
        </a>
      </div>
    </>
  );
};

export default GoogleLoginButton2;
