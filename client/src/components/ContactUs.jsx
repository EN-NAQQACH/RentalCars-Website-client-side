import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { message,Button } from 'antd';

function ContactUs() {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        messagee: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setloading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        const { Name, email, messagee } = formData;
        if (!Name || !email || !messagee) {
            message.error('All fields are required');
            return;
        }

        try {
            setloading(true);
            const response = await fetch('https://rentalcars-website-server-side.onrender.com/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name, email, messagee })
            });
            const data = await response.json();
            if (response.ok) {
                setloading(false);
                message.success(data.message);
                setFormData({ Name: '', email: '', messagee: '' });
            } else {
                setloading(false);
                setError('Error sending message');
            }
        } catch (error) {
            setError('Error sending message');
        }
    };
    return (
        <div>

            <div class="container my-24 mx-auto md:px-6">

                <section class="mb-32">
                    <div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
                    <div class="container px-6 md:px-12">
                        <div
                            class="block rounded-lg bg-[#fcfcfc] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div class="flex flex-wrap">
                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                    <form>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <label htmlFor="">Name</label>
                                            <input type="text"

                                                name="Name"
                                                value={formData.Name}
                                                onChange={handleChange}
                                                class="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput90" placeholder="Name" />
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <label htmlFor="">Email</label>
                                            <input type="email"

                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                class="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput91" placeholder="Email address" />

                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <label htmlFor="">Subject</label>

                                            <textarea

                                                name="messagee"
                                                value={formData.messagee}
                                                onChange={handleChange}
                                                class="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>

                                        </div>
                                        {loading ? (<Button id="signupbtn" className='mt-2' onClick={handleSubmit} loading={true} >Sent</Button>) : (<Button id="signupbtn" className='mt-2' onClick={handleSubmit}  >Sent</Button>)}

                                    </form>
                                </div>
                                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div class="flex flex-wrap">
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" class="h-6 w-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="ml-6 grow">
                                                    <p class="mb-2 font-bold dark:text-white">
                                                        Technical support
                                                    </p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        +212 5288-20175
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" class="h-6 w-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="ml-6 grow">
                                                    <p class="mb-2 font-bold dark:text-white">
                                                        Email Us
                                                    </p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        easlycars@gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div class="align-start flex">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        <LocationOnIcon />
                                                    </div>
                                                </div>
                                                <div class="ml-6 grow">
                                                    <p class="mb-2 font-bold dark:text-white">Adress</p>
                                                    <p class="text-neutral-500 dark:text-neutral-200">
                                                        IMM N° 88, Av. Laayoune, Agadir 80000
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default ContactUs