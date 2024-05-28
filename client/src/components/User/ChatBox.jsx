// import React from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'


// function ChatBox({ chat, index, currentuser, lastmessage }) {
//     const navigate = useNavigate()
//     const [isLoading, setIsLoading] = useState(false);

//     const [selectedChat, setSelectedChat] = React.useState(null)

//     const handleChatClick = (index) => {
//         setSelectedChat(index);
//         setIsLoading(true);
//     };


//     // console.log("this is last message")
//     // console.log(lastmessage)
//     const seen = chat?.seenBy?.includes(currentuser)
//     //                            <p className={seen ? 'truncate text-[10px] text-green-600 font-semibold max-w-[140px]':'truncate text-[10px] text-red-500 font-semibold max-w-[140px]'}>{lastmessage?.content}</p>

//     //className={selectedChat == chat.reseivedUser.id ? "bg-[#f4f6fb] rounded-[10px] border-none" : "bg-white rounded-md border-none"}

//     return (
//         <>
//             <Link to={`chats/${chat.id}`} key={index} onClick={() => handleChatClick(chat.reseivedUser.id)}
//                 className='center w-[100%]  flex items-center gap-3  cursor-pointer  p-3 hover:bg-slate-100'
//             >
//                 <div className='flex items-center justify-between w-[100%]'>
//                     <div className='  flex items-center gap-3' >
//                         <div className=''>
//                             <img src={chat.reseivedUser.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover' />
//                         </div>
//                         <div className='flex flex-col'>
//                             <div className='flex items-center justify-between w-[100%]'>
//                                 <p className='font-semibold text-[14px]'>{chat.reseivedUser.firstName}</p>
//                             </div>
//                             <div className=''>
//                             <p className={seen ? 'truncate text-[10px] text-gray-400 font-semibold max-w-[140px]':'truncate text-[10px] text-black font-bold max-w-[140px]'}>{lastmessage?.content}</p>                            </div>
//                         </div>

//                     </div>
//                     <div>
//                         <p className='truncate text-[10px] text-gray-700 font-semibold'>{lastmessage?.hour}</p>

//                     </div>
//                 </div>

//             </Link>

//         </>
//     )
// }

// export default ChatBox


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { format } from 'timeago.js';


function ChatBox({ chat, index, currentuser, lastmessage, setcount }) {
    const navigate = useNavigate()
    const [selectedChat, setSelectedChat] = React.useState(null)
    const [chatt, setChatt] = useState(null);

    const handleChatClick = async (chatId, reseivedUser) => {
        const response = await fetch(`https://easlycars-server.vercel.app/api/chats/${chatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
            }
        });
        setChatt({ ...response.data, reseivedUser });
        setcount(
            (prev) => prev + 1
        )

    }
    //


    // console.log("this is last message")
    // console.log(lastmessage)
    const seen = chat?.seenBy?.includes(currentuser)



    return (
        <>
            <Link to={`chats/${chat.id}`} key={index} className='w-[100%] hover:bg-[#f0f0f0] pt-2 pr-1 pl-1 pb-2 rounded-[5px]' onClick={() => handleChatClick(chat.id, chat.reseivedUser)

            }
            // className='center w-[100%]  flex items-center gap-3  cursor-pointer  p-3 hover:bg-slate-100'

            // style={{
            //     backgroundColor:
            //       chat.seenBy.includes(currentuser) || chatt?.id === chat.id
            //         ? "white"
            //         : "#fecd514e",
            //   }}
            >
                <div className='scroll-smooth flex items-center justify-between w-[100%]'>
                    <div className='  flex items-center gap-3' >
                        <div className=''>
                            <img src={chat.reseivedUser.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center justify-between w-[100%]'>
                                <p className='font-semibold text-[14px]'>{chat.reseivedUser.firstName}</p>
                            </div>
                            <div className=''>
                                <p className={seen ? 'truncate text-[10px] text-gray-400 font-semibold max-w-[140px]' : 'truncate text-[11px] text-black font-bold max-w-[140px]'}>{lastmessage?.content ? lastmessage?.content : `photo sended`}</p>                            </div>
                        </div>

                    </div>
                    <div>
                        {!seen ? (<>

                            <div className="h-2 w-2 rounded-full bg-[#5862ee]" />
                        </>) : (

                            <>
                                <p className='truncate text-[10px] text-gray-400 font-semibold'>{lastmessage?.hour}</p>

                            </>
                        )}

                    </div>
                </div>
            </Link>
        </>
    )
}

export default ChatBox

