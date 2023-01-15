import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIRE_APIKEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIRE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIRE_PROJECTID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIRE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIRE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_REACT_APP_FIRE_APPID
    };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
