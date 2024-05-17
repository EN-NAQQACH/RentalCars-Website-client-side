import React, { useState, useEffect, useRef, createContext, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiPicker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import '../cardeffect.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import { io } from 'socket.io-client';
export const LastMessageContext = createContext();
function MyNotifications() {
    const [socket, setsocket] = useState();
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastMessage, setlastmessage] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const currentuser = localStorage.getItem('T_ID_User')
    const [searchinput, setsearchinput] = useState('');
    const fetchChtasWithSearchOption = async (searchinput) => {
        try {
            const response = await fetch(`http://localhost:5600/api/chats/search/getUsers?searchinput=${searchinput}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                }
            });
            const data = await response.json();
            if (data) {
                setLoading(false);
                setChats(data);

            }
        } catch (error) {
            console.log(error)
            setLoading(false);
        }

    }
    const handleSearchInputChange = (e) => {
        setsearchinput(e.target.value);
        fetchChtasWithSearchOption(e.target.value);
        setLoading(true);
    };
    const fetchChats = async () => {
        try {

            const response = await fetch('http://localhost:5600/api/chats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                }
            });
            const data = await response.json();

            if (data) {
                setChats(data);
                setLoading(false);
                setlastmessage(data.lastMessage);
                console.log(data)
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };
    useEffect(() => {
        fetchChats();
    }, [lastMessage]);

    const handleChatClick = (index) => {
        setSelectedChat(index);
    };
    useEffect(() => {
        setsocket(io("http://localhost:4000/"));
    }, []);
    return (
        <div className='mynotifications  border border-transparent rounded-xl overflow-hidden min-h-[100vh] grid grid-cols-3 '>
            {chats.length > 0 ?
                (
                    <>
                        <div className='list-of-users bg-[#f7f9fc] h-[100%] p-3 '>
                            <div className=' m-auto border border-transparent rounded-2xl h-[100%] bg-[#ffffff] '>
                                <div className='bg-[#f4f6fb] flex pt-[5px] pl-3 pr-3 pb-[5px] m-auto w-[90%] rounded-[20px]  justify-center items-center top  border-none mt-5 shadow-sm'>
                                    <SearchIcon className='text-gray-400 mr-2' />
                                    <input type="text" placeholder='Search Chats...' className='bg-transparent outline-none text-[13px]' value={searchinput}
                                        onChange={handleSearchInputChange} />
                                </div>
                                <div className='flex flex-col gap-1 items-center mt-5'>
                                    {loading ?
                                        (
                                            <>
                                                {chats.map((index) => (
                                                    <Link className='Skaletones' key={index}>
                                                        <div className='center w-[100%]  flex items-center gap-3  cursor-pointer  p-3' >
                                                            <div className=''>
                                                                <div className='rounded-[50%] w-[40px] h-[40px] bg-gray-200 animate-pulse'></div>
                                                            </div>
                                                            <div className='flex flex-col gap-2'>
                                                                <div className='flex items-center justify-between gap-[90px] w-[190px]'>
                                                                    <div className='font-semibold text-[5px] h-[9px] w-[64px] bg-gray-200 animate-pulse rounded-md'></div>
                                                                    <div className='font-semibold text-[5px] h-[9px] w-[36px] bg-gray-200 animate-pulse rounded-md'></div>
                                                                </div>
                                                                <div className=''>
                                                                    <div className='font-semibold text-[5px] h-[9px]  bg-gray-200 animate-pulse max-w[140px] rounded-md'></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </>
                                        ) : (

                                            <>
                                                {chats && <>

                                                    {chats.map((chat, index) => (
                                                        <Link to={`chats/${chat.id}`} key={index} onClick={() => handleChatClick(chat.reseivedUser.id)} className={selectedChat == chat.reseivedUser.id ? "bg-[#f4f6fb] rounded-[2px] border-none" : "bg-white rounded-md border-none"}>
                                                            <div className='center w-[100%]  flex items-center gap-3  cursor-pointer  p-3' >
                                                                <div className=''>
                                                                    <img src={chat.reseivedUser.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover' />
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <div className='flex items-center justify-between gap-[90px]'>
                                                                        <p className='font-semibold text-[14px]'>{chat.reseivedUser.firstName}</p>
                                                                        <p className='truncate text-[10px] text-gray-700 font-semibold'>{chat.lastMessageHour}</p>
                                                                    </div>
                                                                    <div className=''>
                                                                        <p className='truncate text-[10px] text-gray-500 font-semibold max-w-[140px]'>{chat.lastMessage}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}

                                                </>
                                                }
                                            </>
                                        )}


                                </div>
                            </div>
                        </div>

                        <LastMessageContext.Provider value={{ lastMessage, setlastmessage, socket, setChats }}>
                            <Outlet />
                        </LastMessageContext.Provider>
                    </>
                ) :
                (
                    <>
                        <div className='messages-box  bg-[#f7f9fc] h-[100%] justify-center items-center flex col-start-1 col-end-4 relative' >
                            <p className='font-semibold text-[18px] text-gray-400'>there is no conversations yet</p>
                        </div>
                    </>


                )
            }



        </div >
    )
}

export default MyNotifications;