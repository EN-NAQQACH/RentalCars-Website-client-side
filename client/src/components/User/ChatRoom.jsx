import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiPicker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import '../cardeffect.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
function ChatRoom() {
    const [showPicker, setShowPicker] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const emojiPickerRef = useRef(null);
    const fileInputRef = useRef(null);
    const {chatId} = useParams();
    const [chat, setChat] = useState(null);
    const [picturesender,setpicturesender] = useState()
    const [picturereceiver,setpicturereceiver] = useState()
    const [firstnamereceiver, setfirstnamereceiver] = useState()
    const [lastNamereceiver , setLastnamereceiver] = useState();

    async function fetchChat() {
        try {
            const response = await fetch(`http://localhost:5600/api/chats/${chatId}`);
            const data = await response.json();
            if(data){
                setChat(data);
                setpicturesender(data.users[0].picture)
                setpicturereceiver(data.users[1].picture)
                setfirstnamereceiver(data.users[1].firstName)
                setLastnamereceiver(data.users[1].lastName)
            }
        } catch (error) {
            console.error('Error fetching chat:', error);
        }
    }
    useEffect(() => {
        fetchChat();
    }, [chatId]);
console.log(chat);

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
        // Insert the selected emoji into the input value
        setInputValue((prevValue) => prevValue + emoji.emoji);
        // Close the emoji picker
        setShowPicker(false);
    };

    const handleChange = (event) => {
        // Update the input value with the text content of the input field
        setInputValue(event.target.value);
    };
    const handleAttachmentClick = () => {
        // Trigger click event on file input when AttachmentIcon is clicked
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Handle file selection and do something with the selected file
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);
    };
    return (
        <div className='messages-box bg-[#f7f9fc] h-[100%] col-start-2 col-end-4 relative' >
            <div className='pr-2 pt-2 '>
                <div className='top max-h-[60px]  flex items-center justify-between pt-[30px] pb-[30px] pl-[10px] pr-[10px] border rounded-xl bg-[#f0f2f6] border-transparent '>
                    <div className='flex items-center gap-3'>
                        <div className=''>
                            <img src={picturereceiver} alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                        </div>
                        <div>
                            <p className='text-[12px] font-semibold'>{firstnamereceiver} {lastNamereceiver}</p>
                        </div>
                    </div>
                    <div className='border-none pl-1 pr-1 pt-[1px] pb-[1px] rounded-[50%] bg-[#e9eef7] text-[blue]'>
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
            <div className='center-box-messages max-h-[76vh] overflow-y-scroll   bg-[#f7f9fc] mt-2 mr-3 ' id='message-box'>
                <div className='flex flex-col '>
                    <div className='chat-room p-3 '>
                        <div className='flex items-end gap-3'>
                            <div>
                                <img src="/carmain9.jpg" alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col max-w-[350px]'>
                                <p className='text-[11px]  border p-2 rounded-tr-xl rounded-tl-xl rounded-br-xl mb-3 overflow-hidden text-justify bg-[#2681ea] text-white'>
                                    have to  sine it is a ni sine it is a ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b
                                </p>
                                <p className='text-[10px] mt-[-2px]'>11:30 pm</p>
                            </div>

                        </div>
                    </div>
                    <div className='chat-room p-3 flex justify-end '>
                        <div className='flex items-end gap-3'>
                            <div className='flex flex-col max-w-[350px]'>
                                <p className='text-[11px]  border p-2 rounded-tr-xl rounded-tl-xl rounded-bl-xl mb-3 overflow-hidden text-justify bg-[#2681ea] text-white'>
                                    have to  sine it is a ni sine it is a ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b
                                </p>
                                <p className='text-[10px] mt-[-2px] flex justify-end'>11:30 pm</p>
                            </div>
                            <div>
                                <img src="/carmain9.jpg" alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                            </div>

                        </div>
                    </div>
                    <div className='chat-room p-3 '>
                        <div className='flex items-end gap-3'>
                            <div>
                                <img src="/carmain9.jpg" alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                            </div>
                            <div className='flex flex-col max-w-[350px]'>
                                <p className='text-[11px]  border p-2 rounded-tr-xl rounded-tl-xl rounded-br-xl mb-3 overflow-hidden text-justify bg-[#2681ea] text-white'>
                                    have to  sine it is a ni sine it is a ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b
                                </p>
                                <p className='text-[10px] mt-[-2px]'>11:30 pm</p>
                            </div>

                        </div>
                    </div>
                    <div className='chat-room p-3 flex justify-end '>
                        <div className='flex items-end gap-3'>
                            <div className='flex flex-col max-w-[350px]'>
                                <p className='text-[11px]  border p-2 rounded-tr-xl rounded-tl-xl rounded-bl-xl mb-3 overflow-hidden text-justify bg-[#2681ea] text-white'>
                                    have to  sine it is a ni sine it is a ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine ni sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b e to  sine it is a nice man b
                                </p>
                                <p className='text-[10px] mt-[-2px] flex justify-end'>11:30 pm</p>
                            </div>
                            <div>
                                <img src="/carmain9.jpg" alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom h-[50px] absolute bottom-3 w-[100%]'>
                <div className='pr-3 w-[100%]'>
                    <div className='flex gap-3 w-[100%] items-center justify-between border-none rounded-3xl pt-2 pl-3 pr-3 pb-2 h-[100%] bg-white'>
                        <div className='flex items-center gap-4'>
                            <AttachmentIcon onClick={handleAttachmentClick} className='cursor-pointer ' />
                            <div className=''>
                                <input
                                    type="text"
                                    placeholder='Type a message...'
                                    className='bg-transparent outline-none text-[13px] w-[450px] '
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='flex items-center gap-5'>
                            <button onClick={handleEmojiClick}><TagFacesIcon /></button>
                            {showPicker && (
                                <div ref={emojiPickerRef} style={{ position: 'absolute', bottom: '70px', left: '10px', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
                                    <EmojiPicker onEmojiClick={handleEmojiSelect} emojiStyle={{ width: '10px', height: '10px' }} />
                                </div>
                            )}
                            <div className='pl-[6px] flex justify-center pt-[6px] pb-[6px] pr-[6px] bg-[#2681ea] text-white rounded-[50%]'>
                                <SendIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;