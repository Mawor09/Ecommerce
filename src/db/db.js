import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNh32K87vhGNm6pUpo-uhj0lvTgnp9UeA",
  authDomain: "ecommercecoder-3e9b7.firebaseapp.com",
  projectId: "ecommercecoder-3e9b7",
  storageBucket: "ecommercecoder-3e9b7.appspot.com",
  messagingSenderId: "453338745845",
  appId: "1:453338745845:web:dae539c05206e0f4cc2ebc"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;