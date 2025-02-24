    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('visible');
    }

    // Open Feedback Popup
    function openFeedback() {
      document.getElementById('feedbackOverlay').style.display = 'flex';
      document.getElementById('feedbackPopup').style.display = 'block';
    }
    // Close Feedback Popup
    function closeFeedback() {
      document.getElementById('feedbackOverlay').style.display = 'none';
      document.getElementById('feedbackPopup').style.display = 'none';
    }
  
    // Add event listeners for Tasting buttons
    document.addEventListener("DOMContentLoaded", function () {
      const addNewTastingBtn = document.getElementById('addNewTasting');
      if (addNewTastingBtn) {
        addNewTastingBtn.addEventListener('click', function () {
          window.location.href = 'html/addTasting.html';
        });
      }

      const addmyTastingsBtn = document.getElementById('myTastings');
      if (addmyTastingsBtn) {
        addmyTastingsBtn.addEventListener('click', function () {
          window.location.href = 'html/myTastings.html';
        });
      }

      const addCoffeeMapBtn = document.getElementById('coffeeMap');
      if (addCoffeeMapBtn) {
        addCoffeeMapBtn.addEventListener('click', function () {
          window.location.href = 'html/coffeeMap.html';
        });
      }
  
      if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
      }
    });
  
    function toggleTheme() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
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
