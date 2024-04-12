import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import StyleContext from './Stylecontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StyleContext.Provider value={{fontFamily: '"Josefin Slab", serif',fontWeight: '700',LetterSpacing: '1px'}}>
    <Navbar />
    <Hero />
    <Main />
    </StyleContext.Provider>
      
    </>
  )
}

export default App
