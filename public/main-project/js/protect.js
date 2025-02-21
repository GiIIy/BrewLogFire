import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Store the attempted URL before redirecting
        sessionStorage.setItem("redirectAfterLogin", window.location.href);

        // Get base path dynamically
        const basePath = window.location.pathname.includes("/main-project/") 
            ? "/main-project/html/login.html" 
            : "/html/login.html"; 
        
        window.location.href = basePath;
    }
});
