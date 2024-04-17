import React from 'react'
import { useContext } from 'react';
import StyleContext from '../Stylecontext'
import './cardeffect.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterResponsiveMobile from '../utils/footerResponsiveMobile';

function Footer() {
    const style  = useContext(StyleContext);
    return (

            // <footer className='footer1 pl-[150px] pr-[150px] pt-[50px] pb-[20px] bg-white border' style={{ fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing }} id='footer1'>
            //     <footer className="footer grid-rows-2 gap-x-[0px] gap-y-[20px] grid-cols-3 bg-neutral text-neutral-content mb-[20px] ">
            //         <aside>
            //             <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            //             <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            //         </aside>
            //         <nav>
            //             <h6 className="">Services</h6>
            //             <a className="link link-hover">Branding</a>
            //             <a className="link link-hover">Design</a>
            //             <a className="link link-hover">Marketing</a>
            //             <a className="link link-hover">Advertisement</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Company</h6>
            //             <a className="link link-hover">About us</a>
            //             <a className="link link-hover">Contact</a>
            //             <a className="link link-hover">Jobs</a>
            //             <a className="link link-hover">Press kit</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Legal</h6>
            //             <a className="link link-hover">Terms of use</a>
            //             <a className="link link-hover">Privacy policy</a>
            //             <a className="link link-hover">Cookie policy</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Social</h6>
            //             <a className="link link-hover">Twitter</a>
            //             <a className="link link-hover">Instagram</a>
            //             <a className="link link-hover">Facebook</a>
            //             <a className="link link-hover">Github</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Explore</h6>
            //             <a className="link link-hover">Features</a>
            //             <a className="link link-hover">Enterprise</a>
            //             <a className="link link-hover">Security</a>
            //             <a className="link link-hover">Pricing</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Apps</h6>
            //             <a className="link link-hover">Mac</a>
            //             <a className="link link-hover">Windows</a>
            //             <a className="link link-hover">iPhone</a>
            //             <a className="link link-hover">Android</a>
            //         </nav>
            //         <nav>
            //             <h6 className=" ">Social</h6>
            //             <div className="socialmedia grid grid-flow-col gap-4 cursor-pointer">
            //                 <a> <FacebookIcon /> </a>
            //                 <a> <XIcon /> </a>
            //                 <a> <InstagramIcon /></a>
            //             </div>
            //         </nav>
            //     </footer>
            //     <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            //         <aside>
            //             <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            //         </aside>
            //     </footer>
            // </footer>
            <FooterResponsiveMobile />

    )
}

export default Footer