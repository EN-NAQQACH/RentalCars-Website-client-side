// import * as socket from 'socket.io'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, useOutlet, useOutletContext, useParams } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiPicker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import '../cardeffect.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { LastMessageContext } from './MyNotifications';
import DeleteIcon from '@mui/icons-material/Delete';
import Pusher from 'pusher-js';
import MessageBox from './MessageBox';

function ChatRoom() {
    const { setlastmessage } = useContext(LastMessageContext);
    // const { socket } = useContext(LastMessageContext)
    const [showPicker, setShowPicker] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const emojiPickerRef = useRef(null);
    const fileInputRef = useRef(null);
    const { chatId } = useParams();
    const [chat, setChat] = useState(null);
    const [message, setMessage] = useState([]);
    const [currentuserId, setcurrentuserId] = useState('');
    const userId = localStorage.getItem('T_ID_User')
    const messageEndRef = useRef();
    const [receiver, setreceiver] = useState(null);
    const [sender, setsender] = useState(null);
    const currentuser = localStorage.getItem('T_ID_User')
    const [msg, setmsg] = useState();

    useEffect(() => {
        console.log('Initializing Pusher...');
        const pusher = new Pusher('e212b43b22cb99b53a5e', {
            cluster: 'eu'
        });
        console.log(`Subscribing to channel: ${chatId}`);
        const channel = pusher.subscribe(chatId);

        channel.bind('new-message', async (data) => {
            console.log('New message received:', data);
            {data.photo ? setlastmessage(data.photo): setlastmessage(data.content); }
            setChat((prev) => {
                if (!prev.messages.find(msg => msg.id === data.id)) {
                    return { ...prev, messages: [...prev.messages, data] };
                }
                return prev;
            });
        });

        channel.bind('message-removed', async ({ messageId, lastMessage }) => {
            console.log('Message removed:', messageId);
            setChat((prev) => ({
                ...prev,
                messages: prev.messages.filter((m) => m.id !== messageId),
                lastMessage: lastMessage
            }));
            setlastmessage(lastMessage);
        });

        return () => {
            // Unsubscribe from Pusher channel
            console.log(`Unsubscribing from channel: ${chatId}`);
            channel.unbind_all();
            channel.unsubscribe(chatId);
        };
    }, [chatId]);

    useEffect(() => {
        const messageBox = document.getElementById('message-box');
        if (messageBox) {
            const scrollHeight = messageBox.scrollHeight;
            messageBox.scrollTo({
                top: scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [chat]);
    useEffect(() => {
        async function fetchChat() {
            try {
                const response = await fetch(`http://localhost:4000/api/chats/${chatId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                    }
                });
                const data = await response.json();
                if (data) {
                    setChat(data.chat);
                    setsender(data.userSender)
                    setreceiver(data.userReceiver)
                    setcurrentuserId(userId);
                }
            } catch (error) {
                console.error('Error fetching chat:', error);
            }
        }
        fetchChat();
    }, [chatId]);
    const read = async () => {
        const response = await fetch(`http://localhost:4000/api/chats/${chatId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
            },
        });
    }
    const handleSubmitMessage = async () => {

        if (!inputValue) return;
        try {
            const response = await fetch(`http://localhost:4000/api/Messages/${chatId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                },
                body: JSON.stringify({ content: inputValue }),
            });
            const data = await response.json();
            if (!data) {
                throw new Error('Failed to send message');
            }
            console.log(data)
            // setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }))
            // socket.emit('sendmessage', {
            //     data: data,
            //     chatId: chatId,
            //     sender: sender,
            //     receiver: receiver.id,
            // });
            // setlastmessage(data.content)
            setInputValue('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    const handleRemoveMessage = async (messageId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/Messages/${messageId}/${chatId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                },
            });
            const data = await response.json();
            if (!data) {
                throw new Error('Failed to remove message');
            }
            setlastmessage(data.chat.lastMessage);
            setChat((prev) => ({ ...prev, messages: prev.messages.filter((m) => m.id !== messageId) }));
            setMessage(message.filter((m) => m.id !== messageId));
            // socket.emit('deletemessage', {
            //     messageId: messageId,
            //     receiver: receiver.id,
            //     lastMessage: data.chat.lastMessage
            // });
        } catch (error) {
            console.error('Error removing message:', error);
        }
    };
    // const handleSubmitPicture = async (e) => {
    //     e.preventDefault();
    //     const file = e.target.picture.files[0];
    //     const formData = new FormData();
    //     formData.append('picture', file);
    //     try {
    //         const response = await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${chatId}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
    //             },
    //             body: formData,
    //         });
    //         const data = await response.json();
    //         if (!data) {
    //             throw new Error('Failed to send message');
    //         }
    //         setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }))
    //         socket.emit('sendmessage', {
    //             data: data,})
    //         }catch{

    //         }
    //     }
    const preset_key = "mohssine";
    const cloudName = "diqpy4zmv";
    const folderName = "Messages";
    const [image, setimage] = useState();

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
        setInputValue(event.target.value);
    };

    const handleAttachmentClick = () => {
        // Trigger click event on file input when AttachmentIcon is clicked
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', preset_key);
        formData.append('folder', folderName);  // Corrected key name

        // Send the file to the server
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            const res = await response.json();
            if (!res) {
                console.log('Failed to send message');
            } else {
                try {
                    const respons = await fetch(`http://localhost:4000/api/Messages/${chatId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                        },
                        body: JSON.stringify({ photoUrl: res.secure_url }),
                    });
                    const data = await respons.json();
                    if (!data) {
                        throw new Error('Failed to send message');
                    }
                    console.log(data)
                } catch (error) {
                    console.error('Error sending message:', error);
                }
            }
            // console.log(data.secure_url);
            // setimage(data.secure_url);
        } catch (e) {
            console.log(e);
        }
    };

    const updateSeenBy = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/Messages/seenby/${chatId}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('T_ID_Auth'),
                },
            })
            const data = await res.json();
            if (data) {
                console.log(data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        updateSeenBy()
    }, [chatId, currentuser])

    // useEffect(() => {
    //     currentuser && socket?.emit("newuser", currentuser);
    // }, [receiver])
    // useEffect(() => {

    //     if (chat && socket) {
    //         socket.on('getmessage', (data) => {
    //             if (chat.id === data.chatId) {
    //                 setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
    //                 read()
    //                 setlastmessage(data.content)
    //             }
    //         });
    //         socket.on('removemessage', (messageId,lastMessage) => {
    //             setMessage((prevMessages) => prevMessages.filter((m) => m.id !== messageId));
    //             setlastmessage(lastMessage)
    //             setChat((prev) => ({ ...prev, messages: prev.messages.filter((m) => m.id !== messageId) }));
    //         });
    //     }
    //     return () => {
    //         socket?.off('getmessage');
    //         socket?.off('removemessage');
    //     };

    // }, [socket, chat])

    return (
        <div className='messages-box  bg-[#f7f9fc] h-[100%] col-start-2 col-end-4 relative' >
            <div className='pr-2 pt-2 max-[734px]:pr-0 max-[734px]:m-5 '>
                <div className='top max-h-[60px]  flex items-center justify-between pt-[30px] pb-[30px] pl-[10px] pr-[10px] border rounded-xl bg-[#f0f2f6] border-transparent shadow-sm'>
                    <div className='flex items-center gap-3'>
                        {chat && (
                            <>
                                <div className=''>
                                    <img src={receiver.picture} alt="" className='w-[45px] h-[45px] rounded-[50%] object-cover' />
                                </div>
                                <div>
                                    <p className='text-[12px] font-semibold'>{receiver.firstName} {receiver.lastName}</p>
                                </div>
                            </>

                        )}

                    </div>
                    {chat && (
                        <div className='border-none pl-1 pr-1 pt-[1px] pb-[1px] rounded-[50%] bg-[#e9eef7] text-[blue]'>

                        </div>
                    )}

                </div>
            </div>
            <div className='center-box-messages max-[734px]:pr-0 max-[734px]:m-5  max-h-[76vh] overflow-y-scroll bg-[#f7f9fc] mt-2 mr-3 ' id='message-box'>
                <div className='flex flex-col '>
                    {chat && (
                        <>
                            {chat.messages.map((message, index) => (
                                <>
                                    <MessageBox message={message} index={index} currentuserId={currentuserId} sender={sender} receiver={receiver} handleRemoveMessage={handleRemoveMessage} image={image} />
                                </>
                            ))}
                        </>

                    )}
                </div>
                <div ref={messageEndRef}></div>
            </div>

            <div className='bottom h-[50px]  bottom-3 w-[100%]  max-[734px]:mr-5 max-[734px]:ml-1 '>
                <div className='pr-3'>
                    <div className='flex gap-3 w-[100%] items-center justify-between border-none rounded-3xl pt-2 pl-3 pr-3 pb-2 h-[100%] bg-white shadow-md'>
                        <div className='flex items-center gap-4 grow'>
                            <AttachmentIcon onClick={handleAttachmentClick} className='cursor-pointer ' />
                            <div className=' grow '>
                                <input
                                    type="text"
                                    name='message'

                                    placeholder='Type a message...'
                                    className='bg-transparent outline-none text-[13px] w-[100%]'
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                multiple={false}
                            />
                        </div>
                        <div className='flex items-center gap-4'>
                            <button onClick={handleEmojiClick}><TagFacesIcon /></button>
                            {showPicker && (
                                <div ref={emojiPickerRef} style={{ position: 'absolute', bottom: '70px', left: '10px', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
                                    <EmojiPicker onEmojiClick={handleEmojiSelect} emojiStyle={{ width: '10px', height: '10px' }} />
                                </div>
                            )}
                            <div className='pl-[6px] flex justify-center pt-[6px] pb-[6px] pr-[6px] cursor-pointer bg-[#2681ea] text-white rounded-[50%]' onClick={handleSubmitMessage}>
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
