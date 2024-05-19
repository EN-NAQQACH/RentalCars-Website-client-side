
import React, { useEffect, useState, useContext } from 'react'
import { Select, message, Input, Button } from 'antd';
const { Option } = Select;
import { useNavigate, Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import dayjs from 'dayjs';
import { photouser } from './Account';
import ClipLoader from "react-spinners/ClipLoader";
function Myreservations() {
    const [sort, setSort] = React.useState(null);
    const { photo, firstName, lastName } = useContext(photouser);
    const [search, setsearch] = React.useState('');
    const [reservations, setreservations] = useState([])
    const [loading, setloading] = useState(false)
    const fetchreservations = async () => {
        try {
            setloading(true)
            const queryParams = new URLSearchParams({
                sort: sort || '',
                carName: search || '',
            });
            const response = await fetch(`http://localhost:5600/api/user/myreservations?${queryParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('T_ID_Auth')}`
                }
            });
            const data = await response.json();
            if (data) {
                setloading(false)
                setreservations(data);
            }
        } catch (error) {
            setloading(false)
        }

    }
    const handleRemoveRese = async (id) => {
        try {
            const response = await fetch(`http://localhost:5600/api/reservation/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('T_ID_Auth')}`
                }
            });
            const data = await response.json();
            if (data) {
                message.success('Reservation removed successfully');
                fetchreservations();
            }
        } catch (error) {
            message.error('An unexpected error occurred');
        }
    }
    useEffect(() => {
        fetchreservations();
    }, [search, sort])
    return (
        <div>
            <div className='myBookinginfo border-gray-100  rounded-xl p-3 h-fit' >
                <p className='text-[18px] font-semibold text-gray-700'>My Reservations</p>
                <div>
                    <div className='flex justify-between items-center mb-3 mt-3'>

                        <div className='sort-component  w-[220px]'>
                            <Select className='w-[100%]' placeholder="Sort by" value={sort} onChange={(value) => setSort(value)}>
                                <Option key={1} value='Newest'>Newest</Option>
                                <Option key={2} value='Oldest'>Oldest</Option>
                            </Select>
                        </div>
                        <div>
                            <Input type="text" placeholder='Search' className='w-[300px] border outline-none p-1 text-[14px]' value={search} onChange={(e) => setsearch(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {reservations.length > 0 ?
                        (
                            <>
                                {reservations.map((res, index) => (
                                    <div className="collapse max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-7 border " key={index}>
                                        <input type="checkbox" />
                                        <div className='collapse-title'>
                                            <header className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
                                                <div className="flex items-center gap-2">
                                                    <div className={res.status === "pending" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400 px-3 py-1 rounded-md text-sm font-medium" : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 px-3 py-1 rounded-md text-sm font-medium"}>
                                                        {res.status}
                                                    </div>
                                                </div>

                                            </header>
                                            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                                <div className="grid gap-6">
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">

                                                        <img alt="Car" className="aspect-video object-cover rounded-md" height={200} src={res.car.imageUrls[0]} width={300} />


                                                        <img alt="Car" className="aspect-video object-cover rounded-md" height={200} src={res.car.imageUrls[1]} width={300} />

                                                        <img alt="Car" className="aspect-video object-cover rounded-md" height={200} src={res.car.imageUrls[2]} width={300} />

                                                    </div>
                                                    <div className="grid gap-2">
                                                        <h2 className="text-2xl font-bold">{res.car.year} {res.car.model} {res.car.make}</h2>
                                                        <div className="text-gray-500 dark:text-gray-400">{res.car.Type}</div>
                                                    </div>
                                                </div>
                                                <div className="grid gap-6">
                                                    <div className="grid gap-2">
                                                        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pickup</div>
                                                        <div className="grid gap-1">
                                                            <div className="font-medium">{dayjs(res.startDate).format('MMMM DD, YYYY')}</div>
                                                            <div className="text-gray-500 dark:text-gray-400">Morocco, {res.car.location}</div>
                                                        </div>
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Drop-off</div>
                                                        <div className="grid gap-1">
                                                            <div className="font-medium">{dayjs(res.endDate).format('MMMM DD, YYYY')}</div>
                                                            <div className="text-gray-500 dark:text-gray-400">Morocco, {res.car.location}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-2 md:my-2" />
                                        </div>
                                        <div className="collapse-content grid gap-6 md:gap-8">
                                            <div className="grid gap-2">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 mb-2">
                                                        <img alt="Car" src={photo} className='w-full h-full rounded-full' />

                                                    </div>
                                                    <div className="grid gap-0.5">
                                                        <div className="font-medium">{firstName} {lastName}</div>
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <div className="grid gap-6 md:gap-8">
                                                        <div className="grid gap-2">
                                                            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total</div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="font-medium text-2xl">{res.totalPrice} Dh</div>
                                                                <div className="text-gray-500 dark:text-gray-400 text-sm">Includes taxes and fees</div>
                                                            </div>
                                                        </div>
                                                        <div className="grid gap-1">
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-gray-500 dark:text-gray-400">Car</div>
                                                                <div>{res.car.make}</div>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-gray-500 dark:text-gray-400">Model</div>
                                                                <div>{res.car.model}</div>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-gray-500 dark:text-gray-400">Year</div>
                                                                <div>{res.car.year}</div>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-gray-500 dark:text-gray-400">Price</div>
                                                                <div>{res.car.price} /Dh per day</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="flex items-center gap-2">
                                                        <DirectionsCarFilledIcon className="w-5 h-5" />
                                                        <div className="font-medium">{res.car.year} {res.car.model} {res.car.make}</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <AccountBalanceWalletIcon className="w-5 h-5" />
                                                        <div className="font-medium">{res.car.price} /Dh per day</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <CalendarTodayIcon className="w-5 h-5" />
                                                        <div className="font-medium">7 days</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <AttachMoneyIcon className="w-5 h-5" />
                                                        <div className="font-medium">{res.totalPrice} Dh</div>
                                                    </div> */}
                                                </div>
                                                <div className='flex justify-end mt-3 '>
                                                    <button className="w-[20%] border rounded-lg p-2 m-0 hover:text-red-600 hover:border-red-500" variant="primary" onClick={() => handleRemoveRese(res.id)}>
                                                        Cancel Reservation
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                ))}
                            </>
                        ) : (
                            <div className='text-center text-gray-500 font-semibold h-[440px] flex justify-center items-center'>No reservations found</div>
                        )

                    }


                </div>
            </div>
        </div>
    )
}

export default Myreservations