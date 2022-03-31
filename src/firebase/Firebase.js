import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4jIDrsUWEP604kawAccWPFm58kvogFmU",
    authDomain: "addfuel-app.firebaseapp.com",
    projectId: "addfuel-app",
    storageBucket: "addfuel-app.appspot.com",
    messagingSenderId: "779823569184",
    appId: "1:779823569184:web:b94f6b7e806e2fc3299f45"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, 'products')