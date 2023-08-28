
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB3E3PMY4FLcy2kGQtMr9o3NHWe03euydo",
    authDomain: "clone-995d5.firebaseapp.com",
    projectId: "clone-995d5",
    storageBucket: "clone-995d5.appspot.com",
    messagingSenderId: "281321795733",
    appId: "1:281321795733:web:986c1f81fc3302db70eb9c",
    measurementId: "G-H27B14C0H1"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };