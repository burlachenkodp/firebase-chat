import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaRXydHqa7tNNkXEaDlSplYBUFhvO99fI",
  authDomain: "chat-675c6.firebaseapp.com",
  projectId: "chat-675c6",
  storageBucket: "chat-675c6.appspot.com",
  messagingSenderId: "1081052492251",
  appId: "1:1081052492251:web:4d6e8bcb84fba40fdbb7fe",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
