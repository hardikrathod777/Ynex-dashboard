import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBFlp_C0TP4oOdHICne3NPTAd3YVlXaGtg",
    authDomain: "ynex-172cd.firebaseapp.com",
    projectId: "ynex-172cd",
    storageBucket: "ynex-172cd.appspot.com",
    messagingSenderId: "929548406710",
    appId: "1:929548406710:web:924f29dbb38ffbdb29bb17"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth service
const db = getFirestore(app); // Initialize Firestore service (if needed)
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { app, auth, db , signInWithGoogle};