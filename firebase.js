import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgX-85X2FdIkcQm3x0j9CQ-8Zio6NggE8",
  authDomain: "pdf-solutions-takehome.firebaseapp.com",
  projectId: "pdf-solutions-takehome",
  storageBucket: "pdf-solutions-takehome.appspot.com",
  messagingSenderId: "64146954861",
  appId: "1:64146954861:web:785de15f524ea2349f7d64",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
export default db;
