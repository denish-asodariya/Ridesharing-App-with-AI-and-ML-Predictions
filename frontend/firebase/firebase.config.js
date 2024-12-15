// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkz5h1y3Dl-KH5dNaYqbgIlbWxXTY2IJI",
    authDomain: "uml-project-18ca9.firebaseapp.com",
    databaseURL: "https://uml-project-18ca9-default-rtdb.firebaseio.com",
    projectId: "uml-project-18ca9",
    storageBucket: "uml-project-18ca9.appspot.com",
    messagingSenderId: "636503731650",
    appId: "1:636503731650:web:4e3f6e44ec71757155ba5b",
    measurementId: "G-MYJ403ZCP8"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);