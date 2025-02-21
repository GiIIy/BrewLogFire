// Import Firebase services from firebase.js
import { auth } from "./firebase.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const googleProvider = new GoogleAuthProvider();

// 📌 Email/Password Login
document.getElementById("login-email-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Logged in:", userCredential.user);
    } catch (error) {
        console.error("❌ Login failed:", error.message);
    }
});

// 📌 Register New User
document.getElementById("register-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ User registered:", userCredential.user);
    } catch (error) {
        console.error("❌ Registration failed:", error.message);
    }
});

// 📌 Google Login
document.getElementById("login-google-btn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("✅ Google Login Success:", result.user);
    } catch (error) {
        console.error("❌ Google Login Failed:", error.message);
    }
});

// 📌 Logout
document.getElementById("logout-btn").addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("✅ User logged out");
    } catch (error) {
        console.error("❌ Logout failed:", error.message);
    }
});

// 📌 Auth State Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-info").textContent = `Logged in as: ${user.email || user.displayName}`;
        document.getElementById("logout-btn").style.display = "block";
        document.getElementById("login-email-btn").style.display = "none";
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("login-google-btn").style.display = "none";
    } else {
        document.getElementById("user-info").textContent = "";
        document.getElementById("logout-btn").style.display = "none";
        document.getElementById("login-email-btn").style.display = "block";
        document.getElementById("register-btn").style.display = "block";
        document.getElementById("login-google-btn").style.display = "block";
    }
});
