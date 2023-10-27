// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCc3aZOMivfcO7nNjgFsclxyXTwAxX8vlA",
  authDomain: "max-event-app.firebaseapp.com",
  projectId: "max-event-app",
  storageBucket: "max-event-app.appspot.com",
  messagingSenderId: "581224417732",
  appId: "1:581224417732:web:841c14d5b65d6fe46b7c91",
  measurementId: "G-4D25HECGQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}