// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvPqF6FnygSv2byr1GNnjy31yFogLK53k",
  authDomain: "roomie-fi.firebaseapp.com",
  projectId: "roomie-fi",
  storageBucket: "roomie-fi.firebasestorage.app",
  messagingSenderId: "737872409773",
  appId: "1:737872409773:web:9815c733416b84043d8224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app