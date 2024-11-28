// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOxBLw2hFi-32R6RqRDIj5am7GQD1MCfA",
  authDomain: "career-aspiro.firebaseapp.com",
  projectId: "career-aspiro",
  storageBucket: "career-aspiro.firebasestorage.app",
  messagingSenderId: "604139718938",
  appId: "1:604139718938:web:a2d5f0da49073a6151c4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;