import React, { useEffect, useState, useContext } from 'react'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../cardeffect.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Table, Modal } from 'antd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';

function MyBooking() {
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
  const [modal, setmoda] = useState(false);
  const [selecteditem, setselecteditem] = useState(null);
  const handleselecteditem = (item) => {
    setselecteditem(item);
    setmoda(true);
  }
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      client: `Edward King`,
      email: `mohssineennaqqach@gmail.com`,
      status: <div className='pr-2 pl-2 bg-[#e6e0ffc2] rounded-lg w-fit flex justify-center'>pending</div>,
      car: `London, Park Lane no. ${i}`,
      action: <button type="primary" className="border pl-3 pr-3 rounded-md border-gray-300 flex items-center gap-1 pt-1 pb-1 text-[#3838af]" onClick={() => handleselecteditem(person)}><RemoveRedEyeOutlinedIcon/>View</button>,
    });
  }
  const closeModal = () => {
    setmoda(false);
  };
  return (
    <div className='myBookinginfo border-gray-100 border rounded-xl p-3 h-[100%]'>
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
                  <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>12</p>
                </div>
                <div>
                  <p className='font-bold text-[25px] '><MoreHorizOutlinedIcon className='mr-1  rounded-[50%] bg-yellow-300 text-white'/><span>12</span></p>
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
                  <p className='text-[13px]'>Confirmed <span>Reservations</span></p>
                  <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>12</p>
                </div>
                <div>
                  <p className='font-bold text-[25px]'><CheckOutlinedIcon className='mr-1 rounded-[50%] bg-green-500 text-white'/><span>12</span></p>
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
                  <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>12</p>
                </div>
                <div>
                  <p className='font-bold text-[25px]'><GroupOutlinedIcon className='mr-1  rounded-[50%] bg-[#b1b1ff] text-white'/><span>12</span></p>
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
                  <p className='border pl-2 pt-1 pb-1 pr-2 rounded-[50%] font-semibold bg-[#e3ddffa2]'>12</p>
                </div>
                <div>
                  <p className='font-bold text-[25px]'><TimeToLeaveOutlinedIcon className='mr-1 border rounded-[50%]'/><span>12</span></p>
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
            <Table.Column title="Email" dataIndex="email" key="email" sorter={(a, b) => a.email.localeCompare(b.email)}/>
            <Table.Column title="Status" dataIndex="status" key="status" sorter={(a, b) => a.status.props.children.localeCompare(b.status.props.children)}/>
            <Table.Column title="Car" dataIndex="car" key="car" sorter={(a, b) => a.car.localeCompare(b.car)} />
            <Table.Column title="Action" dataIndex="action" key="action" />
          </Table>
          <Modal
            title="View Item"
            visible={modal}
            onCancel={closeModal}
            footer={null}
          >
            {selecteditem && (
              <div>
                <p>Client: {selecteditem.name}</p>
                <p>Email: {selecteditem.age}</p>
                <p>Status: {selecteditem.job}</p>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default MyBooking