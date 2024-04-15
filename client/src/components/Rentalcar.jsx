import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Main from './Main'
import StyleContext from '../Stylecontext'
import Footer from './Footer'

function Rentalcar() {
    return (
        <>
            <StyleContext.Provider value={{ fontFamily: '"Josefin Slab", serif', fontWeight: '700', LetterSpacing: '1px' }}>
                <Hero />
                <Main />
            </StyleContext.Provider>
        </>
    )
}

export default Rentalcar