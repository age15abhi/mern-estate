// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// we can import .env data in the multiple ways
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d1cb5.firebaseapp.com",
  projectId: "mern-estate-d1cb5",
  storageBucket: "mern-estate-d1cb5.appspot.com",
  messagingSenderId: "810032473047",
  appId: "1:810032473047:web:3a89f408f92dd2211fe192",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
