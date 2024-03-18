// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5NErnIn5JAVxuZ8a72e8hy4pMc-Xm0_8",
  authDomain: "mysubito-5e792.firebaseapp.com",
  projectId: "mysubito-5e792",
  storageBucket: "mysubito-5e792.appspot.com",
  messagingSenderId: "529678982710",
  appId: "1:529678982710:web:0bce0e5f6e0cb5aed90297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);