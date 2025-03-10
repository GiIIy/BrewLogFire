  // Toggle Sidebar for Mobile
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
  }
  // Toggle Dark Mode and Save Preference
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
  });
  // Feedback Popup Functions
  function openFeedback() {
    document.getElementById('feedbackOverlay').style.display = 'block';
    document.getElementById('feedbackPopup').style.display = 'block';
  }
  function closeFeedback() {
    document.getElementById('feedbackOverlay').style.display = 'none';
    document.getElementById('feedbackPopup').style.display = 'none';
  }
  // Coming Soon Popup Functions
  function showComingSoon() {
    document.getElementById('comingSoonOverlay').style.display = 'flex';
    document.getElementById('comingSoonPopup').style.display = 'block';
  }
  function closeComingSoon() {
    document.getElementById('comingSoonOverlay').style.display = 'none';
    document.getElementById('comingSoonPopup').style.display = 'none';
  }
  