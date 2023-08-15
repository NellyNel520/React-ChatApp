// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXBfoyxY01F1JKtsqdAoGTXbrJhctjk5A",
  authDomain: "chatterbox-27779.firebaseapp.com",
  projectId: "chatterbox-27779",
  storageBucket: "chatterbox-27779.appspot.com",
  messagingSenderId: "299923191847",
  appId: "1:299923191847:web:7f8a456d837c52354c3602"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
