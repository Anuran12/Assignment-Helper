// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcACY9LfkTJ1FBmspDQ-2UPFxHXgj2wVU",
  authDomain: "assignment-helper-2a8d2.firebaseapp.com",
  projectId: "assignment-helper-2a8d2",
  storageBucket: "assignment-helper-2a8d2.appspot.com",
  messagingSenderId: "63530309654",
  appId: "1:63530309654:web:f8ed913f8209c04a32bd37",
  measurementId: "G-F42JQ50EYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()


export {auth, provider}