// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-fY0tEm9I4wYF2ALbhLGEv3iIzpazgKg",
    authDomain: "brewlog-534f3.firebaseapp.com",
    projectId: "brewlog-534f3",
    storageBucket: "brewlog-534f3.appspot.com",
    messagingSenderId: "304855129922",
    appId: "1:304855129922:web:6f6dd0f8cdf6be8a5ab2db",
    measurementId: "G-6WWQWC6ED4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services
export { app, db, auth };
