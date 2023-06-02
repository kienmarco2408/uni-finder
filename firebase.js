// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSHig2ytmY68XXgzHGUKJGvC9OmpKBaKE",
  authDomain: "uni-finder-2023.firebaseapp.com",
  projectId: "uni-finder-2023",
  storageBucket: "uni-finder-2023.appspot.com",
  messagingSenderId: "691143252990",
  appId: "1:691143252990:web:b4c274e9d19a99af93feaf",
  measurementId: "G-B1S2C0VQRD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
