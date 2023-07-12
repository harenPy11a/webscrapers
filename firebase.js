// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwkqvQxVjMGvHfu3v9syJqqZlp285Xc2w",
  authDomain: "webscrapers-df482.firebaseapp.com",
  projectId: "webscrapers-df482",
  storageBucket: "webscrapers-df482.appspot.com",
  messagingSenderId: "587451783071",
  appId: "1:587451783071:web:1195d11965058ed504cfaa",
  measurementId: "G-XNYNCSK6YX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
