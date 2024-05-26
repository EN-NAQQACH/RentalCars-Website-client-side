import React from 'react'
import '../components/cardeffect.css';

function FooterResponsiveMobile() {
    return (
        <>
            <div className='frequently-content-card flex  flex-col items-start gap-3  pl-[0.5px] pr-[0.5px] w-[100%]'>
                <div className='flex flex-col gap-2 mt-3 w-[100%]'>
                    <div className="collapse collapse-arrow bg-white text-black  rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                            Makes
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>

                               <li><a href={`/carhome/search?make=Audi`} className="link link-hover">Audi car rental</a></li> 
                                <li><a href={`/carhome/search?make=Bmw`} className="link link-hover">Bmw car rental</a></li>
                                <li><a href={`/carhome/search?make=Mercedes`} className="link link-hover">Mercedes car rental</a></li>
                                <li><a href={`/carhome/search?make=Toyota`} className="link link-hover">Toyota car rental</a></li>
                                <li><a href={`/carhome/search?make=Jeep`} className="link link-hover">Jeep car rental</a></li>
                                <li><a href={`/carhome/search?make=Ford`} className="link link-hover">Ford car rental</a></li>

                            </nav>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-white text-black  rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                        Destination
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                            <a href={`/carhome/search?where=Agadir`} className="link link-hover">Agadir</a>
                                    <a href={`/carhome/search?where=Casablanca`} className="link link-hover">Casablanca</a>
                                    <a href={`/carhome/search?where=Essaouira`} className="link link-hover">Essaouira</a>
                                    <a href={`/carhome/search?where=Rabat`} className="link link-hover">Rabat</a>
                            </nav>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white text-black  rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                        Vehicule
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                            <a href={`/carhome/search?type=Suv`} className="link link-hover">Suv car rental</a>
                                    <a href={`/carhome/search?type=Coupe`} className="link link-hover">Coupe car rental</a>
                                    <a href={`/carhome/search?type=Cars`} className="link link-hover">Cars car rental</a>
                                    <a href={`/carhome/search?type=Sedan`} className="link link-hover">Sedan car rental</a>
                            </nav>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white text-black  rounded-[0px] w-[100%]">
                        <input type="checkbox" />
                        <div className="collapse-title text-[17px] font-medium">
                        Legal
                        </div>
                        <div className="collapse-content">
                            <nav className='flex flex-col gap-2'>
                            <a href='/termsofService' className="link link-hover">Terms of Services</a>
                                    <a href="/EaslyCars-Policies" className="link link-hover">Privacy policy</a>
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