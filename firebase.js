// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgX-85X2FdIkcQm3x0j9CQ-8Zio6NggE8",
  authDomain: "pdf-solutions-takehome.firebaseapp.com",
  projectId: "pdf-solutions-takehome",
  storageBucket: "pdf-solutions-takehome.appspot.com",
  messagingSenderId: "64146954861",
  appId: "1:64146954861:web:785de15f524ea2349f7d64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database();
