import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC88C77I6RIekeuMgsEAWXEDedb3TWQ554",
    authDomain: "practise-project-e19e9.firebaseapp.com",
    projectId: "practise-project-e19e9",
    storageBucket: "practise-project-e19e9.appspot.com",
    messagingSenderId: "914181576830",
    appId: "1:914181576830:web:11f05b256ed342c2c9602f",
  };

  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
