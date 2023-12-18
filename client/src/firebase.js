// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1a152.firebaseapp.com",
  projectId: "mern-estate-1a152",
  storageBucket: "mern-estate-1a152.appspot.com",
  messagingSenderId: "806251147789",
  appId: "1:806251147789:web:970030ac17a1d7816b1b44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);