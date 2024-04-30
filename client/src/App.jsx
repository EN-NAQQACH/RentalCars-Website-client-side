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
import CarPage from './components/Car/CarPage';
import CarHome from './components/Car/CarHome';
import PersonalDetails from './components/User/PersonalDetails';
import MyListing from './components/User/MyListing';
import Myfavorite from './components/User/Myfavorite';
import AccounttoUser from './components/User/AccounttoUser';
import EditYourCar from './components/Car/EditYourCar';
import Page404 from '../public/Page';
import MyBooking from './components/User/MyBooking';

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
        <Route path='/account' element={<Account />} >
          <Route index element={<PersonalDetails />} />
          <Route path='personal_details' element={<PersonalDetails />} />
          <Route path='my-listing' element={<MyListing />} />
          <Route path='my-Favorities' element={<Myfavorite />} />
          <Route path='my-listing/edit-your-car' element={<EditYourCar />} />
          <Route path='my-booking' element={<MyBooking />} />
        </Route>
        <Route path='/accounttoUser' element={<AccounttoUser />} />
        <Route path='/my_listing' element={<MyListing />} />
        <Route path='/become_a_host' >
          <Route path='list-your-car' element={<Listyourcar />} />
          <Route path='list-your-car/list' element={<List />} />
        </Route>
        <Route path='/carpage' element={<CarPage />} />
        <Route path='/carhome' element={<CarHome />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
