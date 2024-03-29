// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhBaWpUzqiKHJyhXjLt_YL7_DzfFHAsOg",
  authDomain: "go-to-hell-d63eb.firebaseapp.com",
  projectId: "go-to-hell-d63eb",
  storageBucket: "go-to-hell-d63eb.appspot.com",
  messagingSenderId: "603966112026",
  appId: "1:603966112026:web:2100c9e311d4e9ee35eca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();


export {auth,provider};
