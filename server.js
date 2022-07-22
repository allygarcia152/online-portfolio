// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTo3rd-tBhJOrYFU4HAR3TCTGWfIKnCT0",
  authDomain: "online-portfolio-690be.firebaseapp.com",
  projectId: "online-portfolio-690be",
  storageBucket: "online-portfolio-690be.appspot.com",
  messagingSenderId: "462123605961",
  appId: "1:462123605961:web:0b1ad39b575a74fade5218",
  measurementId: "G-HFYPD3WFN3"
};

const db = getFirestore(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);