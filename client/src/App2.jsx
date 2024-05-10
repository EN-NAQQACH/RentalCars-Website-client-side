// import React, { useState,useEffect } from 'react';
// const featuresList = [
//   "Cruise Control",
//   "Airbags",
//   "Leather Seats",
//   "Navigation/GPS System",
//   "Air Conditioning",
//   "Sunroof",
//   "Remote Central Locking",
// ];
// function tabs() {
//   const [selectedFeatures, setSelectedFeatures] = useState([]);

//   useEffect(() => {
//     // Simulate fetching data from the backend
//     // Replace this with your actual API call
//     const fetchDataFromBackend = () => {
//       // Assume the data fetched is an array of selected features
//       const dataFromBackend = ["Cruise Control", "Airbags", "Leather Seats"];
//       setSelectedFeatures(dataFromBackend);
//     };

//     fetchDataFromBackend();
//   }, []);

//   const handleCheckboxChange = (feature) => {
//     if (selectedFeatures.includes(feature)) {
//       setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
//     } else {
//       setSelectedFeatures([...selectedFeatures, feature]);
//     }
//   };

//   const handleSave = () => {
//     console.log('Selected Features:', selectedFeatures);
//     // Here you can send selectedFeatures to your backend
//   };

//   return (
//     <div>
//     <h1>Car Features</h1>
//     {featuresList.map((feature) => (
//       <div key={feature}>
//         <label>
//           <input
//             type="checkbox"
//             checked={selectedFeatures.includes(feature)}
//             onChange={() => handleCheckboxChange(feature)}
//           />
//           {feature}
//         </label>
//       </div>
//     ))}
//     <button onClick={handleSave}>Save Selected Features</button>
//   </div>
// );
// }

// export default tabs;
// import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import '../src/components/cardeffect.css'
  // <div>
  //   <GooglePlacesAutocomplete
  //     apiKey="AIzaSyCRTYISKkcIwOQg8dKdy0-KDXLq8bOG8sM"
  //   />
  // </div>
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={5}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
