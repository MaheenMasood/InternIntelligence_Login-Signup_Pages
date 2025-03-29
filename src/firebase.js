import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKZJ6w_0JyJA0dyZFa-jJLeo62JitlFp8",
  authDomain: "fir-auth-36200.firebaseapp.com",
  projectId: "fir-auth-36200",
  storageBucket: "fir-auth-36200.firebasestorage.app",
  messagingSenderId: "327251692460",
  appId: "1:327251692460:web:75e6a567be0c2310874809",
  measurementId: "G-ZQSTSH70FG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;