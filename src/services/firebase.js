import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIuZluNslme5-n4LPk9kOQHYnWYhwR4X4",
  authDomain: "scheduling-event-af65f.firebaseapp.com",
  projectId: "scheduling-event-af65f",
  storageBucket: "scheduling-event-af65f.appspot.com",
  messagingSenderId: "954130364514",
  appId: "1:954130364514:web:82c8145587c509f0a0793b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

