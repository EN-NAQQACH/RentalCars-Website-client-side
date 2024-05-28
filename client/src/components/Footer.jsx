import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { StyleContext } from '../Stylecontext'; // Import StyleContext as a named export

import './cardeffect.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterResponsiveMobile from '../utils/footerResponsiveMobile';
import { Link } from 'react-router-dom';

function Footer() {
    const style = useContext(StyleContext);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 800);
    useEffect(
        () => {
            const handleResize = () => {
                setIsWideScreen(window.innerWidth >= 800);
            };
            window.addEventListener('resize', handleResize);
        }
        , [])
    return (
        <>
            {
                isWideScreen ? (
                    <>
                        <footer className='footer1 pl-[150px] pr-[150px] pt-[50px] h-lvh pb-[20px] bg-[#f4f4f4] text-[black] ' style={{
                            fontFamily: style.fontFamily, letterSpacing: style.LetterSpacing
                        }} id='footer1' >
                            <footer className="footer p-10 bg-base-200 text-base-content">
                                <aside>
                                   <img src="/easlycarslogo.png" alt="" width={50} height={50} />
                                   <p className='font-semibold'>EaslyCars</p>
                                   <p className='text-[11px] w-3/4'>IMM N° 88, Av. Laayoune, Agadir 80000</p>
                                </aside>
                                <nav>
                                    <h6 className="footer-title text-[black]">Makes</h6>
                                    <a href={`/carhome/search?make=Audi`} className="link link-hover font-semibold">Audi car rental</a>
                                    <a href={`/carhome/search?make=Bmw`} className="link link-hover font-semibold">Bmw car rental</a>
                                    <a href={`/carhome/search?make=Mercedes`} className="link link-hover font-semibold">Mercedes car rental</a>
                                    <a href={`/carhome/search?make=Toyota`} className="link link-hover font-semibold">Toyota car rental</a>
                                    <a href={`/carhome/search?make=Jeep`} className="link link-hover font-semibold">Jeep car rental</a>
                                    <a href={`/carhome/search?make=Ford`} className="link link-hover font-semibold">Ford car rental</a>

                                </nav>
                                <nav>
                                    <h6 className="footer-title text-[black]">Destination</h6>
                                    <a href={`/carhome/search?where=Agadir`} className="link link-hover font-semibold">Agadir</a>
                                    <a href={`/carhome/search?where=Casablanca`} className="link link-hover font-semibold">Casablanca</a>
                                    <a href={`/carhome/search?where=Essaouira`} className="link link-hover font-semibold">Essaouira</a>
                                    <a href={`/carhome/search?where=Rabat`} className="link link-hover font-semibold">Rabat</a>
                                </nav>
                                <nav>
                                    <h6 className="footer-title text-[black]">Vehicule</h6>
                                    <a href={`/carhome/search?type=Suv`} className="link link-hover font-semibold">Suv car rental</a>
                                    <a href={`/carhome/search?type=Coupe`} className="link link-hover font-semibold">Coupe car rental</a>
                                    <a href={`/carhome/search?type=Cars`} className="link link-hover font-semibold">Cars car rental</a>
                                    <a href={`/carhome/search?type=Sedan`} className="link link-hover font-semibold">Sedan car rental</a>
                                </nav>
                                <nav>
                                    <h6 className="footer-title text-[black]">Legal</h6>
                                    <a href='/termsofService' className="link link-hover font-semibold">Terms of Services</a>
                                    <a href="/EaslyCars-Policies" className="link link-hover font-semibold">Privacy policy</a>
                                </nav>
                                
                            </footer>
                            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                                <nav className="grid grid-flow-col gap-4">
                                    <a href='/carhome' className="link link-hover font-semibold">Our  Cars</a>
                                </nav>
                                <nav>
                                    <div className="grid grid-flow-col gap-4">
                                        <a href='https://ma.linkedin.com/company/easly-informatique'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg></a>
                                        <a href='https://x.com/'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 30 30">
<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
</svg></a>
                                        <a href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                    </div>
                                </nav>
                                <aside>
                                    <p>Copyright © 2024 - All right reserved by <span className='font-bold underline'>EaslyCars</span></p>
                                </aside>
                            </footer>
                        </footer >
                    </>
                ) : (
                    <FooterResponsiveMobile />
                )}
        </>
    )
}

export default Footer