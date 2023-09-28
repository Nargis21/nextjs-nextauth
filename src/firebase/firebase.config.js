// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdhUfurexYecUEv2QVU7hEXqGobGIwsZs",
    authDomain: "nextauth-400405.firebaseapp.com",
    projectId: "nextauth-400405",
    storageBucket: "nextauth-400405.appspot.com",
    messagingSenderId: "704583915878",
    appId: "1:704583915878:web:bea6847776109e7b6950a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app