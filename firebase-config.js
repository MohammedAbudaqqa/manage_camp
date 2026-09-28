// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3KHqxksAbuvI8pNlEPB11Hs62F02WtSs",
  authDomain: "camp-6af6e.firebaseapp.com",
  projectId: "camp-6af6e",
  storageBucket: "camp-6af6e.firebasestorage.app",
  messagingSenderId: "171927320665",
  appId: "1:171927320665:web:e4bcdd274293148962d948",
  measurementId: "G-B6C8BXD0M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
