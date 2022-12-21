import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzgQL-4-wfw7SGItri0RbCWYqBY2RZNQw",
    authDomain: "sultanproba-7fc68.firebaseapp.com",
    projectId: "sultanproba-7fc68",
    storageBucket: "sultanproba-7fc68.appspot.com",
    messagingSenderId: "126105102294",
    appId: "1:126105102294:web:6bab1cf29ac7fadcad2677",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
