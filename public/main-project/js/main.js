// Import Firebase services from firebase.js
import { auth, db } from "./firebase.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


// 📌 Email/Password Login
document.getElementById("login-email-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Logged in:", userCredential.user);
        // go to dashboard
        window.location.href = "../dashboard.html";
    } catch (error) {
        document.getElementById("incorrect").style.display = "block";
        console.error("❌ Login failed:", error.message);
       
    }
});

// 📌 Register New User
document.getElementById("register-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        const tooShortText = document.getElementById("tooShort");
        tooShortText.style.display = "block";
        return;
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // After registration, show the profile completion form
        document.getElementById("registration-section").style.display = "block"; 
        // Hide the input group
        document.getElementById("login-box").style.display = "none";
        console.log("✅ User registered:", userCredential.user);
        
       

        

    } catch (error) {
        console.error("❌ Registration failed:", error.message);
    }
});



// 📌 Submit Profile Data after Registration
document.getElementById("submit-profile-btn").addEventListener("click", async () => {
    const firstName = document.getElementById("first-name").value;
    const country = document.getElementById("country").value;
    const about = document.getElementById("about").value;

    const user = auth.currentUser;
    if (user) {
        const userProfile = {
            name: firstName,
            email: user.email,
            country: country,
            about: about || "",
            memberSince: new Date().toLocaleDateString("en-GB")
        };

        // Save the user's profile data to Firestore
        await setDoc(doc(db, "users", user.email), userProfile);
        
        // Redirect to dashboard after profile completion
        window.location.href = "../dashboard.html";
    }
});

// 📌 Logout
document.getElementById("logout-btn").addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("✅ User logged out");
        window.location.href = ""; // Redirect to login page after logout
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
        document.getElementById("email").style.display = "none";
        document.getElementById("password").style.display = "none";
    } else {
        document.getElementById("user-info").textContent = "";
        document.getElementById("logout-btn").style.display = "none";
        document.getElementById("login-email-btn").style.display = "block";
        document.getElementById("register-btn").style.display = "block";
        document.getElementById("email").style.display = "block";
        document.getElementById("password").style.display = "block";
    }
});