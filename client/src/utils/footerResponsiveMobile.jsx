import React from 'react'
import '../components/cardeffect.css';

function FooterResponsiveMobile() {
    return (
        <>
            <div className='frequently-content-card flex  flex-col items-start gap-3 border-t-2 pl-[0.5px] pr-[0.5px] w-[100%]'>
                <div className='flex flex-col gap-2 mt-3 w-[100%]'>
                    <div className="collapse collapse-arrow bg-white text-black border-b-[1px] rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                            Services
                        </div>
                        <div className="collapse-content">
                            <nav  className='flex flex-col gap-2'>
                                <a className="link link-hover">Branding</a>
                                <a className="link link-hover">Design</a>
                                <a className="link link-hover">Marketing</a>
                                <a className="link link-hover">Advertisement</a>
                            </nav>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-white text-black border-b-[1px] rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                            Company
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                                <a className="link link-hover">About us</a>
                                <a className="link link-hover">Contact</a>
                                <a className="link link-hover">Jobs</a>
                                <a className="link link-hover">Press kit</a>
                            </nav>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white text-black border-b-[1px] rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                            Legal
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                                <a className="link link-hover">Terms of use</a>
                                <a className="link link-hover">Privacy policy</a>
                                <a className="link link-hover">Cookie policy</a>
                            </nav>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white text-black border-b-[1px] rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                            Social
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                                <a className="link link-hover">Twitter</a>
                                <a className="link link-hover">Instagram</a>
                                <a className="link link-hover">Facebook</a>
                                <a className="link link-hover">Github</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <aside>
                        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                        <p>Morocco.</p>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default FooterResponsiveMobile;