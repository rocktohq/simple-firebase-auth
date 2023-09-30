// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK0FKpPFCwyt-uZHnjk_UpLDp47z6o8SA",
  authDomain: "simple-firebase-6b924.firebaseapp.com",
  projectId: "simple-firebase-6b924",
  storageBucket: "simple-firebase-6b924.appspot.com",
  messagingSenderId: "329524341060",
  appId: "1:329524341060:web:22d75bc729d46dcca3cf11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;