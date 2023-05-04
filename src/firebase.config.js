import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSZF1Z89m1Hk01Db-xJ0qjO9at8jePxi8",
  authDomain: "house-market-32883.firebaseapp.com",
  projectId: "house-market-32883",
  storageBucket: "house-market-32883.appspot.com",
  messagingSenderId: "622449214942",
  appId: "1:622449214942:web:bee596b18abab54fd5894f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore()