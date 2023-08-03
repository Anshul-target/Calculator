import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyBlSmmJuyzgVemTD65mphw3pArN-rnFSso",
    authDomain: "movie-ticket-8782a.firebaseapp.com",
    projectId: "movie-ticket-8782a",
    storageBucket: "movie-ticket-8782a.appspot.com",
    messagingSenderId: "577475221889",
    appId: "1:577475221889:web:fc6fa3401f81695baeb080",
    measurementId: "G-WYQC9KLEER"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
