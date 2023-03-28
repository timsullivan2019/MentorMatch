// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLWBRRWOfaRmslcqnf4mMHqxWCDe1F1sY",
  authDomain: "mentormatch-43f8e.firebaseapp.com",
  projectId: "mentormatch-43f8e",
  storageBucket: "mentormatch-43f8e.appspot.com",
  messagingSenderId: "901338875595",
  appId: "1:901338875595:web:4039b0b993af953e53bd4e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();