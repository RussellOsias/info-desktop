import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZD0FiX_dTO8iojw4R1W95Ybk75V0sIag",
  authDomain: "info-efb6b.firebaseapp.com",
  projectId: "info-efb6b",
  storageBucket: "info-efb6b.appspot.com",
  messagingSenderId: "8141133981",
  appId: "1:8141133981:web:6e5dd63af5bb7b8d199c74",
  measurementId: "G-BWFYWQ319L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };