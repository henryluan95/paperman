import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
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

//get collection ref
export const productsColRef = collection(db, "products");
