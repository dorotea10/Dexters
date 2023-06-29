
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyByjXVCNVAv8vQ68QEnZt9J8KP8OJLWcSI",
  authDomain: "foodapp-27193.firebaseapp.com",
  projectId: "foodapp-27193",
  storageBucket: "foodapp-27193.appspot.com",
  messagingSenderId: "264660022341",
  appId: "1:264660022341:web:14248fddcf201285e19f2c",
  measurementId: "G-0ZWGHVVJXV"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);