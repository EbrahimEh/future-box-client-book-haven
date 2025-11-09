// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-Z-LvDiBXQ5FrDpGj_KTP-lRLFcrETc",
  authDomain: "book-haven-57fb6.firebaseapp.com",
  projectId: "book-haven-57fb6",
  storageBucket: "book-haven-57fb6.firebasestorage.app",
  messagingSenderId: "793871289849",
  appId: "1:793871289849:web:55c47bc3a63a9cdcf9c128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);