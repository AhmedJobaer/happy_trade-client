// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYSXHlmg09evp6pinzODC8mI-MYJH_aY8",
    authDomain: "happy-trade-client.firebaseapp.com",
    projectId: "happy-trade-client",
    storageBucket: "happy-trade-client.appspot.com",
    messagingSenderId: "185080392160",
    appId: "1:185080392160:web:1ae0df61f9710d85086385"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);