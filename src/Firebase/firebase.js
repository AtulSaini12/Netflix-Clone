import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDiJkgc1GrHDC2oACd8ZraDkS6tcGqYHo",
  authDomain: "netflix-a22.firebaseapp.com",
  projectId: "netflix-a22",
  storageBucket: "netflix-a22.appspot.com",
  messagingSenderId: "650409898076",
  appId: "1:650409898076:web:942df0acffb737492c3699",
  measurementId: "G-2QJFQ47XEH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
