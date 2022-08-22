//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARevvAbS4ztt81x6kLSxukQpBYQ-XAKb0",
  authDomain: "foodify-d5cd3.firebaseapp.com",
  projectId: "foodify-d5cd3",
  storageBucket: "foodify-d5cd3.appspot.com",
  messagingSenderId: "958656085738",
  appId: "1:958656085738:web:c52b2d898147b2ae9ee193",
  measurementId: "G-JF1KW9EW9Z"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const fs = firebase.firestore()
const analytics = getAnalytics(firebaseApp);

export default firebaseApp