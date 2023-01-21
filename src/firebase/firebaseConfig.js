import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBHBPKGPL1y6iNfEW5Obzo6ccM6UX6oJ_E",
    authDomain: "larq-458c5.firebaseapp.com",
    projectId: "larq-458c5",
    storageBucket: "larq-458c5.appspot.com",
    messagingSenderId: "901571636530",
    appId: "1:901571636530:web:09817387e94fbc0c7b7b2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

export default app