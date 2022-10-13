import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD8Rk47z4c6_xLk1qOXsJfduPP7eZBZI6c",
    authDomain: "authantication-99618.firebaseapp.com",
    projectId: "authantication-99618",
    storageBucket: "authantication-99618.appspot.com",
    messagingSenderId: "110886292592",
    appId: "1:110886292592:web:6e4c32a895dde4b4a138b5",
    measurementId: "G-SBELDE6CWM"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)