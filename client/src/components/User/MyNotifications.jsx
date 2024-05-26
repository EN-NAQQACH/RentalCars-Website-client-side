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
import ClipLoader from "react-spinners/ClipLoader";
import ChatBox from './ChatBox';
import Pusher from 'pusher-js';
import { message } from 'antd';
export const LastMessageContext = createContext();
function MyNotifications() {
    const [socket, setsocket] = useState();
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setloading2] = useState(false);
    const [lastMessage, setlastmessage] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const currentuser = localStorage.getItem('T_ID_User')
    const [searchinput, setsearchinput] = useState('');
    const [count, setcount] = useState(0)
    const fetchChtasWithSearchOption = async (searchinput) => {
        try {
            const response = await fetch(`https://easlycars-server.vercel.app/api/chats/search/getUsers?searchinput=${searchinput}`, {
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

            const response = await fetch('http://localhost:4000/api/chats', {
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
                setloading2(false)

            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };
    useEffect(() => {
        if (currentuser) {
            fetchChats();
        }
    }, [currentuser,lastMessage,count]);
    useEffect(() => {
        setloading2(true);
    }, []);

    useEffect(() => {
        const pusher = new Pusher('e212b43b22cb99b53a5e', {
            cluster: 'eu'
        });
        console.log(`Subscribing to channel: ${currentuser}`);
        const channel = pusher.subscribe(currentuser);
        const  handlechatupdate = (updateddata) => {
            setChats((allchats) => allchats.map((chat) => {
                    if (chat.id === updateddata.id) {
                        return {...chat, messages: updateddata.message
                        }
                    }else{
                        return chat;
                    }
                    
                }))
            }
                
        channel.bind('chatupdate',handlechatupdate)
        return () => {
            channel.unsubscribe(currentuser)
            channel.unbind('chatupdate', handlechatupdate);
        }
    }, [currentuser])
    // useEffect(() => {
    //     const newSocket = io("https://rentalcars-website-socket-io.onrender.com/", {
    //         transports: ['websocket'],
    //         withCredentials: true,
    //     });
    //     setsocket(newSocket);

    //     return () => {
    //         newSocket.close();
    //     };
    // }, []);
    return (
        <div className='mynotifications   border-transparent rounded-xl  min-h-[100vh] grid grid-cols-3 max-[734px]:flex  max-[734px]:flex-col max-[734px]:min-h-[100%]  max-[734px]:justify-center   '>
            {loading2 ? (<>
                <div className='messages-box border rounded-xl bg-[#fcfdff] h-[100%] justify-center items-center flex col-start-1 col-end-4 ' >
                    <ClipLoader
                        color="#5c3cfc"
                        size={35}
                        speedMultiplier={0.3}

                    />
                </div>

            </>) : (<>

                {chats ?
                    (
                        <>
                            <div className='list-of-users bg-[#f7f9fc] h-[100%] p-3 '>
                                <div className=' m-auto border border-transparent rounded-2xl h-[100%] bg-[#ffffff] max-[734px]:p-[10px] '>
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
                                                            <ChatBox chat={chat} index={index}  currentuser={currentuser} lastmessage={chat?.messages?.length > 0 && chat?.messages[chat?.messages.length-1]} setcount={setcount} />
                                                        ))}

                                                    </>
                                                    }
                                                </>
                                            )}


                                    </div>
                                </div>
                            </div>

                            <LastMessageContext.Provider value={{ lastMessage, setlastmessage, setChats }}>
                                <Outlet />
                            </LastMessageContext.Provider>
                        </>
                    ) :
                    (
                        <>
                            <div className='messages-box border rounded-xl bg-[#fcfdff] h-[100%] justify-center items-center flex col-start-1 col-end-4 ' >
                                <p className='font-semibold text-[18px] text-gray-400'>there is no conversations yet</p>
                            </div>

                        </>


                    )
                }


            </>)}




        </div >
    )
}

export default MyNotifications;

