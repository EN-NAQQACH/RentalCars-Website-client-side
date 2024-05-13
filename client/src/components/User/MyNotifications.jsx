import React, { useState, useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiPicker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import '../cardeffect.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
function MyNotifications() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchChats = async () => {
        try {

            const response = await fetch('http://localhost:5600/api/chats');
            const data = await response.json();

            if (data) {
                setChats(data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchChats();
        setLoading(true)
    }, []);
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
    };
    return (
        <div className='mynotifications  border border-transparent rounded-xl overflow-hidden min-h-[100vh] grid grid-cols-3 '>
            <div className='list-of-users bg-[#f7f9fc] h-[100%] p-3 '>
                <div className=' m-auto border border-transparent rounded-2xl h-[100%] bg-[#ffffff] '>
                    <div className='bg-[#f4f6fb] flex pt-[5px] pl-3 pr-3 pb-[5px] m-auto w-[90%] rounded-[20px]  justify-center items-center top  border-none mt-5'>
                        <SearchIcon className='text-gray-400 mr-2' />
                        <input type="text" placeholder='Search Chats...' className='bg-transparent outline-none text-[13px]' />
                    </div>
                    <div className='flex flex-col items-center mt-5'>
                    
                                    {chats.map((chat, index) => (
                                        <Link to={`chats/${chat.id}`} key={index}>
                                            <div className='center w-[100%]  flex items-center gap-3 transition-all duration-700 cursor-pointer hover:bg-gray-100 hover:rounded-md p-3' >
                                                <div className=''>
                                                    <img src={chat.reseivedUser.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover' />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='flex items-center justify-between gap-[90px]'>
                                                        <p className='font-semibold text-[14px]'>{chat.reseivedUser.firstName}</p>
                                                        <p className='truncate text-[10px] text-gray-700 font-semibold'>{chat.lastMessageHour}</p>
                                                    </div>
                                                    <div>
                                                        <p className='truncate text-[10px] text-gray-500 font-semibold w-[80%]'>{chat.lastMessage}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                    </div>
                </div>
            </div>

            <Outlet />


        </div >
    )
}

export default MyNotifications;