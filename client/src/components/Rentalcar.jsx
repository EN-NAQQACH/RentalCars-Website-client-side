import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Main from './Main'
import Profile from './User/Profile'
import Account from './User/Account'
import { StyleContextProvider } from '../Stylecontext' // Import StyleContextProvider instead of StyleContext
import Footer from './Footer'

function Rentalcar() {
    return (
        <StyleContextProvider>
            <div className='!scroll-smooth bg-[white]'>
                <Hero />
                <Main />
            </div>

        </StyleContextProvider>
    )
}

export default Rentalcar
