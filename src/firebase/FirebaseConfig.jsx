import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGn53tfnKoq1XmVqDxi-ENrdHeEDrHXgg",
  authDomain: "maanshop-41cfd.firebaseapp.com",
  projectId: "maanshop-41cfd",
  storageBucket: "maanshop-41cfd.firebasestorage.app",
  messagingSenderId: "755632690486",
  appId: "1:755632690486:web:b99e8d5c469d27bd050f97",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
