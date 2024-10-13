// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZvLeT5BKgZ4XvL85DwqwPeLro1DzcGM",
  authDomain: "dashboard-1206d.firebaseapp.com",
  projectId: "dashboard-1206d",
  storageBucket: "dashboard-1206d.appspot.com",
  messagingSenderId: "449478852755",
  appId: "1:449478852755:web:5c76a8ba8471b794944d66",
  measurementId: "G-BTQQ5HF5SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


 export const auth=getAuth()