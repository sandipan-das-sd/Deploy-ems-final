// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPhoneNumber as signInWithPhoneNumberBase } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBNZD9-WbW1_5Z5rt18cdxNQZ68Cc6GCuo",
  authDomain: "ems-3240a.firebaseapp.com",
  projectId: "ems-3240a",
  storageBucket: "ems-3240a.appspot.com",
  messagingSenderId: "316843241768",
  appId: "1:316843241768:web:9c8a6d0ba1426547f5a01d",
  measurementId: "G-S904LF5QJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


const signInWithPhoneNumber = async (phoneNumber) => {
  try {
    // Your implementation for signInWithPhoneNumber
    const confirmationResult = await signInWithPhoneNumberBase(auth, phoneNumber);
    return confirmationResult;
  } catch (error) {
    console.error('Error initiating phone authentication:', error.message);
    throw error;
  }
};



export { app, auth, provider, FacebookAuthProvider, GithubAuthProvider, signInWithPhoneNumber };
