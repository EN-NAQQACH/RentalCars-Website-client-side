// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3U-jjqacTjzkmYHsFiWmIRuuKQWGOygY",
  authDomain: "easlycars-b59f0.firebaseapp.com",
  projectId: "easlycars-b59f0",
  storageBucket: "easlycars-b59f0.appspot.com",
  messagingSenderId: "332920749634",
  appId: "1:332920749634:web:f294f2039a941d980ab7db",
  measurementId: "G-Z5PW052FZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);