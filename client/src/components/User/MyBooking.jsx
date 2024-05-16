import React, { useEffect, useState, useContext } from 'react'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../cardeffect.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Table, Modal,Select } from 'antd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const {Option} = Select;
function MyBooking() {
  const [reservations, setreservations] = useState([])
  const [reservations2, setreservations2] = useState([])
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectdCarsreserved, setselectedCarsreserved] = useState(null);
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 30,
    job: 'Developer'
  });
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5, // Number of items per page
  });
  const [loading, setLoading] = useState(false);
  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };
  const [modal, setmodal] = useState(false);
  const [selecteditem, setselecteditem] = useState(null);
  const handleselecteditem = (reservation) => {
    setSelectedUser(reservation.user);// Set selected user
    setselectedCarsreserved(reservation.reservations);
    setmodal(true);
  }
  // const data = [];
  // for (let i = 0; i < 10; i++) {
  //   data.push({
  //     key: i,
  //     client: `Edward King`,
  //     email: `mohssineennaqqach@gmail.com`,
  //     status: <div className='pr-2 pl-2 bg-[#e6e0ffc2] rounded-lg w-fit flex justify-center'>pending</div>,
  //     car: `London, Park Lane no. ${i}`,
  //     action: <button type="primary" className="border pl-3 pr-3 rounded-md border-gray-300 flex items-center gap-1 pt-1 pb-1 text-[#3838af]" onClick={() => handleselecteditem(person)}><RemoveRedEyeOutlinedIcon />View</button>,
  //   });
  // }
  const closeModal = () => {
    setmodal(false);
  };

  useEffect(() => {
    const getAllReservation = async () => {
      try {
        const response = await fetch("http://localhost:5600/api/reservation/getAllReservations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem('T_ID_Auth'),
          },
        });
        const data = await response.json();
        if (response.ok) {
          setreservations(data);
          setreservations2(data.reservationsByUser);
        } else {
          setreservations(null);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getAllReservation();
  }, [])
  useEffect(() => {
    const newData = reservations2.map((reservation, index) => ({
      key: index,
      client: `${reservation.user.firstName} ${reservation.user.lastName}`,
      email: reservation.user.email,
      TotalsCars: <div className='pr-2 pl-2 bg-yellow-300 rounded-lg w-fit flex justify-center'>{reservations.totalCars}</div>,
      action: (
        <button type="primary" className="border pl-3 pr-3 rounded-md border-gray-300 flex items-center gap-1 pt-1 pb-1 text-[#3838af]" onClick={() => handleselecteditem(reservation)}>
          <RemoveRedEyeOutlinedIcon />View
        </button>
      ),
    }));
    setData(newData);
  }, [reservations2]);
  return (
    <>
      {reservations ?
        (<div className='myBookinginfo border-gray-100 border rounded-xl p-3 h-[100%]' >
          <div>
            <div className='flex justify-between items-center mb-3'>
              <p className='text-[18px] font-semibold text-gray-700'>Mohssine’s Booking</p>
            </div>
            <div className='Booking-componentss mt-5 max-w-[100%] felx items-center '>
              <div className='Booking-cards   '>
                <div className="Booking-card-componentss h-fit border shadow-sm rounded-md p-2 ">
                  <div className='p-2 flex flex-col gap-3'>
                    <div className='flex justify-between items-center'>
                      <p className='text-[13px]'>Pending Reservations</p>
                      <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>{reservations.totalPendingReservations}</p>
                    </div>
                    <div>
                      <p className='font-bold text-[25px] flex items-center'><MoreHorizOutlinedIcon className='mr-1  rounded-[50%] bg-yellow-300 text-white' /><span>{reservations.totalPendingReservations}</span></p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <div className='Booking-cards '>
                <div className="Booking-card-componentss h-fit border shadow-sm rounded-md p-2">
                  <div className='p-2 flex flex-col gap-3'>
                    <div className='flex  gap-2 justify-between items-center'>
                      <p className='text-[13px] truncate'>Confirmed <span>Reservations</span></p>
                      <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>{reservations.totalConfirmedReservations}</p>
                    </div>
                    <div>
                      <p className='font-bold text-[25px] flex items-center'><CheckOutlinedIcon className='mr-1 rounded-[50%] bg-green-500 text-white' /><span>{reservations.totalConfirmedReservations}</span></p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <div className='Booking-cards  '>
                <div className="Booking-card-componentss h-fit border shadow-sm rounded-md p-2">
                  <div className='p-2 flex flex-col gap-3'>
                    <div className='flex justify-between items-center'>
                      <p className='text-[13px]'>Total Clients</p>
                      <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>{reservations.totalUsersReserved}</p>
                    </div>
                    <div>
                      <p className='font-bold text-[25px] flex items-center'><GroupOutlinedIcon className='mr-1  rounded-[50%] bg-[#b1b1ff] text-white' /><span>{reservations.totalUsersReserved}</span></p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <div className='Booking-cards '>
                <div className="Booking-card-componentss h-fit border shadow-sm rounded-md p-2">
                  <div className='p-2 flex flex-col gap-3'>
                    <div className='flex justify-between items-center'>
                      <p className='text-[13px]'>Total Cars</p>
                      <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>{reservations.totalCars}</p>
                    </div>
                    <div>
                      <p className='font-bold text-[25px] flex items-center'><TimeToLeaveOutlinedIcon className='mr-1 border rounded-[50%]' /><span>{reservations.totalCars}</span></p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className='border mt-2 rounded-md' >
            <div>
              <Table dataSource={data} className='p-3' pagination={pagination} onChange={handleTableChange} loading={loading}>
                <Table.Column title="Client" dataIndex="client" key="client" sorter={(a, b) => a.client.localeCompare(b.client)} />
                <Table.Column title="Email" dataIndex="email" key="email" sorter={(a, b) => a.email.localeCompare(b.email)} />
                <Table.Column title="Totals Cars" dataIndex="TotalsCars" key="TotalsCars" sorter={(a, b) => a.TotalsCars.props.children.localeCompare(b.TotalsCars.props.children)} />
                <Table.Column title="Car" dataIndex="car" key="car" sorter={(a, b) => a.car.localeCompare(b.car)} />
                <Table.Column title="Action" dataIndex="action" key="action" />
              </Table>
              <Modal
                title="Reservation Details"
                visible={modal}
                onCancel={closeModal}
                footer={null}
                style={
                  {
                    minWidth: "80%",
                  }
                }
              >
                {selectedUser && (
                  <div>
                    {/* <p>Name: {selectedUser.firstName} {selectedUser.lastName}</p>
                    <p>Email: {selectedUser.email}</p>
                    Display other user information  */}
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='user-side bg-white  rounded-md mt-5'>
                        <div className='p-3 mt-3'>
                          <div className='user-info flex flex-col items-center'>
                            <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                              <img
                                alt="User Avatar"
                                className="h-full w-full object-cover"
                                height={128}
                                src={selectedUser.picture}
                                style={{
                                  aspectRatio: "128/128",
                                  objectFit: "cover",
                                }}
                                width={128}
                              />
                            </div>
                            <h2 className="text-2xl font-bold mb-1">{selectedUser.firstName} {selectedUser.lastName}</h2>
                            <p className="text-gray-500 mb-1">{selectedUser.email}</p>
                            <p className="text-gray-500">+212 {selectedUser.number}</p>
                            <Link to={`/profile/${selectedUser.firstName}/${selectedUser.lastName}/${selectedUser.id}`} className='pt-1 pb-1 pl-5 pr-5 rounded-md border  mt-3'>View Profile</Link>
                          </div>
                        </div>
                      </div>
                      <div className='cars-side bg-white  col-start-2 col-end-6 rounded-md'>
                        <div className='cars-side'>
                          <div>
                            <div className='car-info max-h-[70vh] overflow-y-scroll'>
                              <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
                                <h1 className="text-2xl font-bold mb-6">Your Car Rental Reservations</h1>
                                <div className="grid gap-6">

                                  {selectdCarsreserved &&

                                    <>
                                      {selectdCarsreserved.map((res, index) => (


                                        <div className=" card-question collapse  bg-white text-black  rounded-lg shadow-md">
                                          <input type="checkbox" />
                                          <div className="collapse-title bg-white  rounded-lg  border-gray-200 dark:border-gray-800 overflow-hidden" key={res.id}>
                                            <div className="grid md:grid-cols-[200px_1fr] gap-6">
                                              <img
                                                alt="Car Image"
                                                className="w-full h-full object-cover"
                                                height={150}
                                                src={res.car.imageUrls[0]}
                                                style={{
                                                  aspectRatio: "200/150",
                                                  objectFit: "cover",
                                                }}
                                                width={200}
                                              />
                                              <div className="p-4 md:p-6 flex flex-col justify-between">
                                                <div className='flex items-center justify-between'>
                                                  <div>
                                                    <h2 className="text-lg font-semibold">{res.car.make} {res.car.model} {res.car.year}</h2>
                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">{res.car.Type}</div>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                                    {res.status}
                                                  </div>
                                                </div>

                                                <div className="grid gap-2 mt-4">
                                                  <div className="flex justify-between">
                                                    <div className="text-gray-500 dark:text-gray-400">Pick-up Date</div>
                                                    <div>{res.startDate}</div>
                                                  </div>
                                                  <div className="flex justify-between">
                                                    <div className="text-gray-500 dark:text-gray-400">Drop-off Date</div>
                                                    <div>{res.endDate}</div>
                                                  </div>
                                                  <div className="flex justify-between">
                                                    <div className="text-gray-500 dark:text-gray-400">Total</div>
                                                    <div className="font-semibold">{res.totalPrice} Dh</div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="collapse-content">
                                            <div className='mt-2'>
                                            {/* value={sort} onChange={(value) => setSort(value)} */}
                                              <div className='flex items-center justify-between'>
                                                <button className='pl-5 pt-1 pb-1 pr-5 border hover:text-red-600 rounded-md'> <div className='flex justify-between gap-2 mt-[0.5px]'><DeleteOutlineOutlinedIcon /><span>Cancel</span></div></button>
                                                <Select className='w-[150px]  ' placeholder="Status" >
                                                  <Option key={1} value='Pending'>
                                                  <div className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                                    pending
                                                  </div>
                                                  </Option>
                                                  <Option key={2} value='Confirmed'>
                                                  <div className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-green-600" />
                                                    Confirmed
                                                  </div>
                                                  </Option>
                                                </Select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>


                                      ))}


                                    </>

                                  }

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Modal>

            </div>
          </div>
        </div>) : <div>Loading...</div>
      }
    </>

  )
}

export default MyBooking