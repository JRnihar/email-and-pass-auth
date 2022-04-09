// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASKdI5JwtF73-xMjAwo1pUvRSL-UtRTU4",
    authDomain: "simple-firebase-authntiocation.firebaseapp.com",
    projectId: "simple-firebase-authntiocation",
    storageBucket: "simple-firebase-authntiocation.appspot.com",
    messagingSenderId: "604450015591",
    appId: "1:604450015591:web:1e90f940b2b1d4c24e47c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app