// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blogger.firebaseapp.com",
  projectId: "mern-blogger",
  storageBucket: "mern-blogger.appspot.com",
  messagingSenderId: "325539621987",
  appId: "1:325539621987:web:d1c44606348671c39b5c56"
};

// Initialize Firebase
 console.log(import.meta.env.VITE_FIREBASE_APIKEY)
 export const app = initializeApp(firebaseConfig);
  console.log(app)




