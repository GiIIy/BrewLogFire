// Import Firebase modules from firebase.js
import { app, db, auth } from "./firebase.js";

console.log("Firebase App:", app);
console.log("Firestore Database:", db);
console.log("Firebase Auth:", auth);

// Example: Check if Firebase is initialized
if (app) {
    console.log("✅ Firebase initialized successfully");
} else {
    console.error("❌ Firebase initialization failed");
}
