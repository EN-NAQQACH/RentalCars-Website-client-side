import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { gapi } from "gapi-script";
import Profile from './components/User/Profile';
import Rentalcar from './components/Rentalcar'; 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Account from './components/User/Account';
import Listyourcar from './components/Car/Listyourcar';
import List from './components/Car/List';


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
        <Route path='/profile' element={<Profile />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/become_a_host' >
        <Route path='list-your-car' element={<Listyourcar />} />
        <Route path='list-your-car/list' element={<List />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
