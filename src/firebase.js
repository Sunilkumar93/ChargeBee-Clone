// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "./firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgoRcVSwzjUX_9cPgN81p8md2UAGYQgbY",
  authDomain: "e-mail-auth-chargebee.firebaseapp.com",
  projectId: "e-mail-auth-chargebee",
  storageBucket: "e-mail-auth-chargebee.appspot.com",
  messagingSenderId: "525054354823",
  appId: "1:525054354823:web:dbccc62224cf9097f2df22",
  measurementId: "G-0MQM25JGLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = firebase.auth()
export default app