// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-project-57856.firebaseapp.com",
  projectId: "mern-project-57856",
  storageBucket: "mern-project-57856.appspot.com",
  messagingSenderId: "927425697957",
  appId: "1:927425697957:web:1aef0ba7caee39b340954c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);