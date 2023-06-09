import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyb3EBmzQEJZM8CRcowCti72wCIO4d_aw",
  authDomain: "coderhouse-43220.firebaseapp.com",
  projectId: "coderhouse-43220",
  storageBucket: "coderhouse-43220.appspot.com",
  messagingSenderId: "188639667543",
  appId: "1:188639667543:web:74cd0ed5756667159f4a12"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
