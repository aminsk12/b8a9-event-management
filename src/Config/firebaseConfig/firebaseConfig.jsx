// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 


const firebaseConfig = {
  apiKey: "AIzaSyBNjItzHlSBYjhIZoCOqJSAx97fX9ELxPc",
  authDomain: "social-event-301b2.firebaseapp.com",
  projectId: "social-event-301b2",
  storageBucket: "social-event-301b2.appspot.com",
  messagingSenderId: "731145405680",
  appId: "1:731145405680:web:b2f4ababba9ede8ffcee35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
