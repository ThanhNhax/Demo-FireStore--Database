// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDW-S1cJh5V3S-jvAR1oxVdJjZl1GHFqNI",
    authDomain: "fir-frirebase-4f84e.firebaseapp.com",
    projectId: "fir-frirebase-4f84e",
    storageBucket: "fir-frirebase-4f84e.appspot.com",
    messagingSenderId: "236753569393",
    appId: "1:236753569393:web:64e9539f88bf07d0bbfdd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);