import React, { useEffect, useState, useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import { style, textAlign } from '@mui/system';
import { GiCarSeat } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loaderaccount from '../../utils/Loaderaccount';
import Authorisation from '../../utils/Authorisation';
import { StyleContext } from '../../Stylecontext';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
function Profile() {
    const { user } = useContext(StyleContext);
    const navigate = useNavigate()
    const [loading, setloading] = useState(true);
    const [firstName , setfirstname] = useState('');
    const [lastName, setlastname] = useState('')
    const [about , setabout]= useState('');
    const [email ,setemail] = useState('');
    const [userphoto , setuserphoto] = useState(null);
    const [number,setnumber] = useState('');
    const {userid} = useParams();
    const [cars,setcars] = useState([]);
    const fetchUserCarInfo = async () => {
        try {
            const response = await fetch(`http://localhost:5600/api/users/profile/${userid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await response.json();
          if (result) {
           setfirstname([result.user.firstName]);
           setlastname([result.user.lastName]);
           setnumber([result.user.number]);
           setemail([result.user.email]);
           setabout([result.user.about])
           setuserphoto([result.user.picture]);
           setcars(result.cars)
          }
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
        fetchUserCarInfo();
    }, [])
    return (
        <>
                <div className='min-h-[100vh]  text-black p-6'>
                    <div className=''>
                        <div className=' flex gap-[50px]'>
                            <div className='side-content w-[100%] m-auto'>
                                {/* <div className='container border p-5  flex flex-col justify-center items-center rounded-md'>
                                    <div className='w-[100px] h-[100px] mb-2'>
                                        <img src=".././src/assets/carmainn.jpg" alt="" className='w-full h-full object-center rounded-[50%]' />
                                    </div>
                                    <p className='font-semibold text-[18px]'>Mohssine E.</p>
                                    <p className='font-semibold text-[14px] text-gray-400'>mohssine@gmail.com</p>
                                    <p className='font-semibold text-[14px] text-gray-400'>+212603924555</p>
                                </div> */}
                                <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                                                <img
                                                    alt="User Avatar"
                                                    className="h-full w-full object-cover"
                                                    height={128}
                                                    src={userphoto}
                                                    style={{
                                                        aspectRatio: "128/128",
                                                        objectFit: "cover",
                                                    }}
                                                    width={128}
                                                />
                                            </div>
                                            <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
                                            <p className="text-gray-500">{email}</p>
                                            <p className="text-gray-500">+212 {number}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-4 text-gray-400">About</h3>
                                            <p className="text-gray-700 text-[12px] text-justify">
                                            {about}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h3 className=" font-bold mb-4 text-gray-400">Cars</h3>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                            {cars.map((car,index)=>(
                                            <Link to={`/car/car-rental/${car.make}/${car.model}/${car.year}/${car.id}`} key={index}>
                                            <div className=' w-[100%] h-[47vh] '>
                                                <div className=" w-[100%]  h-[100%] border rounded-lg shadow-sm">
                                                    <img src={car.imageUrls[0]} alt="" className='h-[150px] w-[100%] rounded-tr-lg rounded-tl-lg object-cover' />
                                                    <div className='mt-2 p-2'>
                                                        <div className='flex justify-between'>
                                                            <div >
                                                                <p className='text-[13px] tracking-[0.6px] font-bold text-gray-400 mb-1'>{car.Type}</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-gray-400 text-[12px] font-bold'><span className='font-bold text-[#937eff] text-[15px]'>{car.price}DH </span>/ Day</p>
                                                            </div>
                                                        </div>
                                                        <div className='overflow-hidden max-w-[90%]'>
              <p className='text-[14px] font-bold text-gray-500 truncate'>{car.make} {car.model} {car.year}</p>
            </div>
                                                        <div className='flex gap-3 mt-2  '>
                                                            <p className='flex gap-3 items-center'>
                                                                <AirlineSeatReclineNormalIcon /><span className='text-[12px] text-gray-600 font-bold'>{car.carSeats}seats
                                                                </span></p>
                                                            <p className='flex gap-3 items-center'>
                                                                <LocalGasStationIcon /><span className='text-[12px] text-gray-600 font-bold'>{car.transmission}
                                                                </span></p>
                                                            <div className='flex gap-3 items-center'>
                                                                <svg className="opacity-[0.7]" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" class="seo-pages-1b4ow2c-MediaObjectItem" role="img" version="1.1"><path fill="#121214" d="M11.936 19.52a.625.625 0 0 1-.625-.626v-4.726H9.05a.626.626 0 0 1 0-1.25h2.26V4.979a.625.625 0 0 1 1.25 0v7.939h2.259a.625.625 0 0 1 0 1.25h-2.26v4.726c0 .345-.28.625-.624.625Z"></path><path fill="#121214" fill-rule="evenodd" d="M19.204 22.902H4.725a.625.625 0 0 1-.625-.625V1.725c0-.344.28-.625.625-.625h14.479c.344 0 .625.281.625.625v20.552a.626.626 0 0 1-.625.625ZM5.35 21.652h13.229V2.35H5.35v19.302Z" clip-rule="evenodd"></path></svg>
                                                                <p className='text-[12px] text-gray-600 font-bold'>{car.fuel}</p>
                                                            </div>
                                                        </div>
                                                        <div className='mt-1 text-[12px] text-[#937eff] border-t-[1px] pt-1 font-semibold'><p><LocationOnIcon />{car.location} , Morocco</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    )
}

export default Profile;