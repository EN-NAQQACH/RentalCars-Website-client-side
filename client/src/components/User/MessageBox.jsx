
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { format } from 'timeago.js';


function MessageBox({ message, receiver, sender, index, currentuserId, handleRemoveMessage, image }) {
    return (
        <div>
            {message.userId === currentuserId ? (
                <div className='chat-room p-3 flex justify-end ' key={index}>
                    <div className='flex items-end gap-3'>
                        <div className='flex flex-col max-w-[350px]'>
                            <div className='flex gap-2'>
                                <Tooltip title={
                                    <>
                                        <div className='cursor-pointer' onClick={() => handleRemoveMessage(message.id)}>
                                            <DeleteIcon className='text-red-400' />
                                        </div>
                                    </>
                                }>
                                    <MoreHorizIcon className='text-gray-400 cursor-pointer' />
                                </Tooltip>
                                {message.content &&
                                    <p className='text-[11px] border-none shadow-sm p-2 rounded-tr-xl rounded-tl-xl rounded-bl-xl mb-[6px] overflow-hidden text-justify bg-[#2681ea] text-white'>
                                        {message.content}
                                    </p>
                                }

                            </div>
                            {message.photo &&
                                <div className='mb-2 h-[160px] w-[280px]'>
                                    <img src={message.photo} alt="" className='object-cover rounded-md h-full w-full' />
                                </div>
                            }

                            
                            <p className='text-[9px] mt-[-2px] font-semibold text-gray-500 flex justify-end'>{format(message.time)}</p>
                        </div>
                        <div>
                            {/* {chat.users[0].id == currentuserId ? <img src={chat.users[0].picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' /> : <img src={chat.users[1].picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' /> } */}
                            <img src={sender.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='chat-room p-3'>
                    <div className='flex items-end gap-3'>
                        <div>
                            {/* {chat.users[1].id != currentuserId ? <img src={chat.users[1].picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' /> : <img src={chat.users[0].picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' /> } */}
                            <img src={receiver.picture} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover shadow-md' />
                        </div>
                        <div className='flex flex-col max-w-[350px]'>
                        {message.content &&
                            <p className='text-[11px] border-none shadow-sm p-2 rounded-tr-xl rounded-tl-xl rounded-br-xl mb-2 overflow-hidden text-justify bg-[white] text-gray-600'>
                                {message.content}
                            </p>}
                            {message.photo &&
                            <div className='mb-2 h-[160px] w-[280px]'>
                                <img src={message.photo } alt="" className='object-cover rounded-md w-full h-full' />
                            </div>}
                            <p className='text-[9px] mt-[-2px] font-semibold text-gray-500'>{format(message.time)}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MessageBox

