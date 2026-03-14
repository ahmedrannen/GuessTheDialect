import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBY5r0n3Ue5lcb1K9PtjzlyhG4M_Od6coM",
  authDomain: "guess-the-dialect.firebaseapp.com",
  projectId: "guess-the-dialect",
  storageBucket: "guess-the-dialect.firebasestorage.app",
  messagingSenderId: "273434726849",
  appId: "1:273434726849:web:d315f5f75114ec36c85f40",
  measurementId: "G-433RKE69CD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider, signInWithPopup, signOut };