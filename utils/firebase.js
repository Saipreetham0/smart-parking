import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { Database } from "firebase/database";
import { getDatabase, ref, onValue, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQI6SfVHGxwLGwAvxojy4JSsdTfFE9zYg",
  authDomain: "smart-parking-a7052.firebaseapp.com",
  projectId: "smart-parking-a7052",
  storageBucket: "smart-parking-a7052.appspot.com",
  messagingSenderId: "940128217121",
  appId: "1:940128217121:web:7800d7910a7538bde71b60",
  measurementId: "G-PH8DB4X5RG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

const database = getDatabase(app);

// export

export const storage = getStorage(app);

export default app;
