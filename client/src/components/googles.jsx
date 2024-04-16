import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
    const responseGooglesu = async (response) => {
        console.log(response.googleId);

        try {
            const res = await fetch('http://localhost:5600/api/auth/google', {
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
            } else {
              console.error(data.error);
            }
          } catch (error) {
            console.error('Error occurred while submitting the form:', error);
          }
        if (response.tokenId) {
            localStorage.setItem('token', response.tokenId);
            localStorage.setItem('image', response.profileObj.imageUrl);
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
                
                <div  className="flex justify-center  space-x-4 mt-4 rounded-lg border border-black hover:bg-slate-50 " onClick={renderProps.onClick} disabled={renderProps.disabled} >
                    <a href="#" className=" px-3 py-2 text-center bg-white-400 text-black font-medium  w-full flex justify-center items-center"><img src="./src/assets/Gmail.png" alt="" width={"25px"} className='mr-5' />Continue with Google</a>
                </div>
            )}
        />
    );
};

export default GoogleLoginButton;