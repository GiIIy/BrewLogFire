// Toggle Sidebar Menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.get
  sidebar.classList.toggle('visible');

}

// Toggle Dark Mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  
  // Tab switching functionality
  document.querySelectorAll('.tab-button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-button').forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      var tabId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(function(content) {
        content.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Feedback Form Submission
  document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("feedbackName").value;
    const email = document.getElementById("feedbackEmail").value;
    const type = document.getElementById("feedbackType").value;
    const message = document.getElementById("feedbackMessage").value;
    console.log("Feedback Submitted:", { name, email, type, message });
    alert("Thank you for your feedback!");
    document.getElementById("feedbackForm").reset();
    closeFeedback();
  });
});

// Feedback Popup Functions
function openFeedback() {
  document.getElementById("feedbackOverlay").style.display = "block";
  document.getElementById("feedbackPopup").style.display = "block";
}
function closeFeedback() {
  document.getElementById("feedbackOverlay").style.display = "none";
  document.getElementById("feedbackPopup").style.display = "none";
}


// New functions for the Coming Soon popup
function showComingSoon() {
  document.getElementById('comingSoonOverlay').style.display = 'flex';
  document.getElementById('comingSoonPopup').style.display = 'block';
}

function closeComingSoon() {
  document.getElementById('comingSoonOverlay').style.display = 'none';
  document.getElementById('comingSoonPopup').style.display = 'none';
}
