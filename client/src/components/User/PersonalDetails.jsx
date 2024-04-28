import React from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const longText = `
Tell hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience. Feel free to include links to your LinkedIn, Twitter, or Facebook profiles so they get to know you even better.
`;

function PersonalDetails() {
    const handeleeditbtn = () => {
        const firstname = document.getElementById('Firstname');
        const lastname = document.getElementById('Lastname');
        const emaill = document.getElementById('emaill');
        const number = document.getElementById('number');
        const about = document.getElementById('aboutme');
    
        if (firstname.disabled) {
          firstname.disabled = false;
          firstname.style.border = '1px solid gray';
    
          lastname.disabled = false;
          lastname.style.border = '1px solid gray';
    
          emaill.disabled = false;
          emaill.style.border = '1px solid gray';
    
          number.disabled = false;
          number.style.border = '1px solid gray';
    
          about.disabled = false;
          about.style.border = '1px solid gray';
        }
        const editbtn = document.getElementById('editbtn');
        editbtn.style.display = 'none'
        const savebtn = document.getElementById('updatebtn');
        savebtn.style.display = 'flex'
    
      }
    
    return (
        <div className='myprofileinfo border rounded-xl p-3 h-[100%]'>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-[18px] font-semibold text-gray-700'>My Profile</p>
                <button className='border pl-3 pr-3 pt-1 pb-1 flex items-center gap-2 rounded-2xl font-semibold text-[#9682ff] hover:text-[#5c3cfc]' onClick={handeleeditbtn} id='editbtn' > <BorderColorIcon />Edit</button>
                <button className='border pl-3 pr-3 pt-1 pb-1  items-center gap-2 rounded-2xl font-semibold text-[#9682ff] hover:text-[#5c3cfc] hidden' onClick={handeleeditbtn} id='updatebtn'> <BorderColorIcon />Update</button>
            </div>
            <div id='Myprofile'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'> First Name</label>
                    <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine"} id='Firstname' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400' >Last Name</label>
                    <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine"} id='Lastname' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Last Name</label>
                    <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"En-naqqach"} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Phone Number</label>
                    <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"0645039244"} id='number' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[13px] font-semibold mb-2 text-gray-400'>Email</label>
                    <input type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-800' disabled value={"Mohssine@gmail.com"} id='emaill' />
                </div>
            </div>
            <div className='mt-7'>
                <div className=''>
                    <p className='text-[18px] flex items-center gap-3 font-semibold text-gray-700 mb-3'>About Me <div>
                        <Tooltip title={longText}>
                            <HelpIcon className='cursor-pointer text-[#cac0ff]' />
                        </Tooltip>
                    </div></p>
                </div>
                <div className='flex flex-col'>
                    <textarea type="text" className='border-none p-2 rounded-lg font-semibold text-[14px] text-gray-400 min-h-[100px]' disabled id='aboutme' />
                </div>
            </div>
        </div>

    )
}

export default PersonalDetails