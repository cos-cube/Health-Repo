// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore,collection, getDocs } from 'firebase/firestore/lite';
import {getFirestore as getDB} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9Z_-EmLVqOBwOZ9N72ekf2e9h7hNrEz8",
    authDomain: "timepass-b7e2d.firebaseapp.com",
    projectId: "timepass-b7e2d",
    storageBucket: "timepass-b7e2d.appspot.com",
    messagingSenderId: "518429091745",
    appId: "1:518429091745:web:e43d7d630683f0aaf58de0",
    measurementId: "G-30FD6FE6KN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let firebaseAppDefined = false

setInterval(() => {
  if (!firebaseAppDefined) {
    if (firebase.app()) {
      // Your code here
        console.log("Horay !");
      firebaseAppDefined = true
    }
  }
}, 100)
const db = getFirestore(app);
const firestore = getDB(app);


export {db, firestore};