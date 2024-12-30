import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // Replace these with your Firebase config values
  apiKey: "AIzaSyAygaN8xClJsZ8j5xt2tL-ccu1H6xvm73U",
  authDomain: "portfolio-1798b.firebaseapp.com",
  projectId: "portfolio-1798b",
  storageBucket: "portfolio-1798b.firebasestorage.app",
  messagingSenderId: "666127018384",
  appId: "1:666127018384:web:680bd22e125543b9232b15",
  measurementId: "G-FNYWVN4QBD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
