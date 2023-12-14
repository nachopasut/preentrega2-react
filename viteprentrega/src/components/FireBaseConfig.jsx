import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZ9L4KIJ4UEb4J5SdUoKR84dqJQek7sFU",
    authDomain: "entrega-final-3cdb1.firebaseapp.com",
    projectId: "entrega-final-3cdb1",
    storageBucket: "entrega-final-3cdb1.appspot.com",
    messagingSenderId: "624672405477",
    appId: "1:624672405477:web:8b338f242a74d61d52610c",
    measurementId: "G-E1E6VFXPN6"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db, Timestamp };