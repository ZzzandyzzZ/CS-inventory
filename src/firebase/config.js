// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzwIfbXHdSj4FnvxNrmC2FH9340bMXB0",
  authDomain: "mindful-fuze-366323.firebaseapp.com",
  projectId: "mindful-fuze-366323",
  storageBucket: "mindful-fuze-366323.appspot.com",
  messagingSenderId: "832440690389",
  appId: "1:832440690389:web:335d9971b1852d03b8a45c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)