// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpNTFmIK6L5qh8GR7_je2-6OV_Kri5P6c",
  authDomain: "vickey-project.firebaseapp.com",
  projectId: "vickey-project",
  storageBucket: "vickey-project.appspot.com",
  messagingSenderId: "264300195500",
  appId: "1:264300195500:web:f4c58e9d2afcf0b3aab909",
  measurementId: "G-NHWMEWPXYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app