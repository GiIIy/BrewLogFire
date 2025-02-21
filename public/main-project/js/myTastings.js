
document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-btn");
  const tastingCards = document.querySelectorAll(".tasting-card");

  function filterTastings() {
    const query = searchBar.value.toLowerCase();
    tastingCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const method = card.querySelector(".brew-method").textContent.toLowerCase();
      if (title.includes(query) || method.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", filterTastings);
  searchBar.addEventListener("input", filterTastings);

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

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

// Open Feedback Popup
function openFeedback() {
  document.getElementById('feedbackOverlay').style.display = 'block';
  document.getElementById('feedbackPopup').style.display = 'block';
}

// Close Feedback Popup
function closeFeedback() {
  document.getElementById('feedbackOverlay').style.display = 'none';
  document.getElementById('feedbackPopup').style.display = 'none';
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
