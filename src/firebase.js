// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW4hOnxfhPih6Nu9mL8qhqdKCyBu_Sg_0",
    authDomain: "challenge-87137.firebaseapp.com",
    databaseURL: "https://challenge-87137.firebaseio.com",
    projectId: "challenge-87137",
    storageBucket: "challenge-87137.appspot.com",
    messagingSenderId: "39111110967",
    appId: "1:39111110967:web:375d5e3d7cb5e567036ab2",
    measurementId: "G-NE0GJMQMMN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth }; 