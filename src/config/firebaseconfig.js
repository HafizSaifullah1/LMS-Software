// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi79KpU18RDX97zc_x-zHUzq9P4-nS-3E",
    authDomain: "smit-test-f26c1.firebaseapp.com",
    projectId: "smit-test-f26c1",
    storageBucket: "smit-test-f26c1.firebasestorage.app",
    messagingSenderId: "93267537361",
    appId: "1:93267537361:web:67b63028c9884369f404f0",
    measurementId: "G-JPR37N3JEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };