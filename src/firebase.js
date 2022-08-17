import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyCmj_L5C25aJLp7t41zhyjH2WFuHWgV3n8",
  authDomain: "paperman-4a7c4.firebaseapp.com",
  projectId: "paperman-4a7c4",
  storageBucket: "paperman-4a7c4.appspot.com",
  messagingSenderId: "1087300812276",
  appId: "1:1087300812276:web:648558a8f4bc1ab7108da1",
};

//init firebase app
initializeApp(firebaseConfig);

//get database
export const db = getFirestore();

//get auth
export const auth = getAuth();

//get collection ref
export const productsColRef = collection(db, "products");

//query for first set of document
export const first = query(productsColRef, limit(8));
