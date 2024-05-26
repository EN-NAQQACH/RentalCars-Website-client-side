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


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function ChatBox({ chat, index, currentuser, lastmessage,setcount }) {
    const navigate = useNavigate()
    const [selectedChat, setSelectedChat] = React.useState(null)

    const handleChatClick = (index) => {
        setSelectedChat(index);
        setcount(
            (prev) => prev + 1
    )
    };


    // console.log("this is last message")
    // console.log(lastmessage)
    const seen = chat?.seenBy?.includes(currentuser)



    return (
        <>
            <Link to={`chats/${chat.id}`} key={index} onClick={() => handleChatClick(chat.reseivedUser.id)}
                className='center w-[100%]  flex items-center gap-3  cursor-pointer  p-3 hover:bg-slate-100'
             >
            <div className='flex items-center justify-between w-[100%]'>
                     <div className='  flex items-center gap-3' >
                         <div className=''>
                             <img src={chat.reseivedUser.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover' />
                         </div>
                         <div className='flex flex-col'>
                             <div className='flex items-center justify-between w-[100%]'>
                                 <p className='font-semibold text-[14px]'>{chat.reseivedUser.firstName}</p>
                             </div>
                             <div className=''>
                             <p className={seen ? 'truncate text-[10px] text-gray-400 font-semibold max-w-[140px]':'truncate text-[10px] text-black font-bold max-w-[140px]'}>{lastmessage?.content ? lastmessage?.content: `photo sended` }</p>                            </div>
                         </div>

                     </div>
                     <div>
                         <p className='truncate text-[10px] text-gray-700 font-semibold'>{lastmessage?.hour}</p>

                     </div>
                </div>
            </Link>
        </>
    )
}

export default ChatBox

