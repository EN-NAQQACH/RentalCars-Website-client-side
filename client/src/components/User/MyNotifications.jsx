import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiPicker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import '../cardeffect.css'
function MyNotifications() {
    const [showPicker, setShowPicker] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const emojiPickerRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the emoji picker
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                // Click occurred outside the emoji picker, close it
                setShowPicker(false);
            }
        };

        // Add event listener to detect clicks outside the emoji picker
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleEmojiClick = (event) => {
        // Prevent button click from triggering parent element's click event
        event.stopPropagation();
        setShowPicker(!showPicker);
    };

    const handleEmojiSelect = (emoji) => {
        setChosenEmoji(emoji);
        // Close the emoji picker
        setShowPicker(false);
    };

    return (
        <div className='mynotifications  border rounded-xl overflow-hidden h-[100%] grid grid-cols-3'>
            <div className='list-of-users bg-[#ffffff] h-[100%] border-r-[1px]'>
                <div className=' mt-2 m-auto '>
                    <div className='flex pt-1 pl-3 pr-3 pb-1 m-auto rounded-md w-fit justify-center items-center top  border mt-5'>
                        <SearchIcon className='text-gray-400 mr-2' />
                        <input type="text" placeholder='Search Chats...' className='bg-transparent outline-none text-[13px]' />
                    </div>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='center  flex items-center gap-3 transition-all duration-700 cursor-pointer hover:bg-gray-100 hover:rounded-md p-3'>
                            <div className=''>
                                <img src="/carmain9.jpg" alt="" className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-[70px]'>
                                    <p className='font-semibold text-[14px]'>Mohssine</p>
                                    <p className='truncate text-[10px] text-gray-700 font-semibold'>11:30 PM</p>
                                </div>
                                <div>
                                    <p className='truncate text-[11px] text-gray-500 font-semibold w-[80%]'>Hello my name is mohssine</p>
                                </div>
                            </div>
                        </div>
                        <div className='center  flex items-center gap-3 transition-all duration-700 cursor-pointer hover:bg-gray-100 hover:rounded-md p-3'>
                            <div className=''>
                                <img src="/carmain9.jpg" alt="" className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-[70px]'>
                                    <p className='font-semibold text-[14px]'>Mohssine</p>
                                    <p className='truncate text-[10px] text-gray-700 font-semibold'>11:30 PM</p>
                                </div>
                                <div className='max-w-[100%] overflow-hidden'>
                                    <p className='truncate text-[11px] text-gray-500 font-semibold max-w-[80%] overflow-hidden '>Hello my name is mohssine jjj</p>
                                </div>
                            </div>
                        </div>
                        <div className='center  flex items-center gap-3 transition-all duration-700 cursor-pointer hover:bg-gray-100 hover:rounded-md p-3'>
                            <div className=''>
                                <img src="/carmain9.jpg" alt="" className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-[70px]'>
                                    <p className='font-semibold text-[14px]'>Mohssine</p>
                                    <p className='truncate text-[10px] text-gray-700 font-semibold'>11:30 PM</p>
                                </div>
                                <div>
                                    <p className='truncate text-[11px] text-gray-500 font-semibold w-[80%]'>Hello my name is mohssine</p>
                                </div>
                            </div>
                        </div>
                        <div className='center  flex items-center gap-3 transition-all duration-700 cursor-pointer hover:bg-gray-100 hover:rounded-md p-3'>
                            <div className=''>
                                <img src="/carmain9.jpg" alt="" className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between gap-[70px]'>
                                    <p className='font-semibold text-[14px]'>Mohssine</p>
                                    <p className='truncate text-[10px] text-gray-700 font-semibold'>11:30 PM</p>
                                </div>
                                <div>
                                    <p className='truncate text-[11px] text-gray-500 font-semibold w-[80%]'>Hello my name is mohssine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='messages-box bg-[#ffffff] h-[100%] col-start-2 col-end-4 relative'>
                <div className='top max-h-[60px] border-b-[1px] border-[#f1f2ff] flex items-center justify-between p-2'>
                    <div className='flex items-center gap-3'>
                        <div className=''>
                            <img src="/carmain9.jpg" alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                        </div>
                        <div>
                            <p className='text-[12px] font-semibold'>Mohssine</p>
                        </div>
                    </div>
                    <div>
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className='bottom h-[60px] absolute bottom-0 border-t-[1px] w-[100%]'>
                    <button onClick={handleEmojiClick}><TagFacesIcon /></button>
                    {showPicker && (
                        <div ref={emojiPickerRef} style={{ position: 'absolute', bottom: '70px', left: '10px',scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent'}}>
                            <EmojiPicker onEmojiClick={handleEmojiSelect} emojiStyle={{ width: '10px', height: '10px' }} />
                        </div>
                    )}
                    {/* {chosenEmoji && (
                        <div>
                            Selected Emoji: {chosenEmoji.emoji}
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default MyNotifications;