
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD7mbvmoAjkJN_SQc69Dx7L--Vh9qnbVi0",
    authDomain: "osr-portfolio.firebaseapp.com",
    projectId: "osr-portfolio",
    storageBucket: "osr-portfolio.appspot.com",
    messagingSenderId: "988356471401",
    appId: "1:988356471401:web:d3ba4e19273e6d81f890f8",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);