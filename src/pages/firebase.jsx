import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcmziXcY8KlWvtfAjmi1nHsVOf9K2mprg",
  authDomain: "the-notebook-aj.firebaseapp.com",
  projectId: "the-notebook-aj",
  storageBucket: "the-notebook-aj.appspot.com",
  messagingSenderId: "728891228592",
  appId: "1:728891228592:web:90470017fc5c8434a9d675",
  measurementId: "G-NYL85BDKZH"
};

firebase.initializeApp(firebaseConfig);