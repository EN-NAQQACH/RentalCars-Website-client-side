import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import CarpageBymake from './components/Car/CarpageBymake';
import CarpageBydestination from './components/Car/CarpageBydestination';
import CarsListing from './components/Car/CarsListing';
import CarsListingBysearch from './components/Car/CarsListingBysearch';
import MyNotifications from './components/User/MyNotifications';
import ChatRoom from './components/User/ChatRoom';
import ChatHome from './components/User/ChatHome';
import TermsofService from './components/TermsofService';
import PolicyPrivacy from './components/PolicyPrivacy';
import ContactUs from './components/ContactUs';
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: "*****.apps.googleusercontent.com",
        plugin_name: "chat",
      });
    });
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {

    if (location.pathname === '/carhome/search' && location.search === '') {
      const lastquerySearch = localStorage.getItem('lastquerySearch');
      if (lastquerySearch) {
        const lastquerySearchParsed = JSON.parse(lastquerySearch);
        navigate(`carhome/search?where=${lastquerySearchParsed.location}&startdate=${lastquerySearchParsed.startdate}&enddate=${lastquerySearchParsed.enddate}&days=${lastquerySearchParsed.days}`);
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Rentalcar/>} />
        <Route path='/termsofService' element={<TermsofService />} />
        <Route path='/EaslyCars-Policies' element={<PolicyPrivacy />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/profile/:firstName/:lastName/:userid' element={<Profile />} />
        <Route path='/account' element={<Account />} >
          <Route index element={<PersonalDetails />} />
          <Route path='personal_details' element={<PersonalDetails />} />
          <Route path='my-listing' element={<MyListing />} />
          <Route path='my-Favorities' element={<Myfavorite />} />
          <Route path='my-notifications' element={<MyNotifications />}>
            <Route index element={<ChatHome />} />
            <Route path='chats/:chatId' element={<ChatRoom />} />
          </Route>
          <Route path='my-listing/edit-your-car/:carId' element={<EditYourCar />} />
          <Route path='my-booking' element={<MyBooking />} />
        </Route>
        <Route path='/car-rental/cars/search/bymake/:make' element={<CarpageBymake />} />
        <Route path='/car-rental/cars/search/bydestination/:destination' element={<CarpageBydestination />} />
        <Route path='/accounttoUser' element={<AccounttoUser />} />
        <Route path='/my_listing' element={<MyListing />} />
        <Route path='/become_a_host' >
          <Route index element={<Listyourcar />} />
          <Route path='list-your-car' element={<List />} />
        </Route>
        <Route path='/car/car-rental/:make/:model/:year/:carId' element={<CarPage />} />
        {/* <Route path='/carhome' element={<CarHome />} /> */}
        <Route path='/carhome' element={<CarHome />}>
          <Route index element={<CarsListing />} />
          <Route path="search" element={<CarsListing />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
