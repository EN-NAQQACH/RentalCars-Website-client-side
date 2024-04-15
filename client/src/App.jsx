import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { gapi } from "gapi-script";
import Home from './components/home'
import Rentalcar from './components/Rentalcar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: "*****.apps.googleusercontent.com",
        plugin_name: "chat",
      });
    });
  }, []);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Rentalcar />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
