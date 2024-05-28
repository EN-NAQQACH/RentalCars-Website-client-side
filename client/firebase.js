// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5y2Sws70vvPGl4RGD2hFEDS6R7MNZHgk",
  authDomain: "easlycarswebsite.firebaseapp.com",
  projectId: "easlycarswebsite",
  storageBucket: "easlycarswebsite.appspot.com",
  messagingSenderId: "301875949158",
  appId: "1:301875949158:web:60726d9709faf36df287a7",
  measurementId: "G-CK2R28ZSCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);