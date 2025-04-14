
    // Toggle Sidebar Menu
    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
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

      const beans = document.querySelectorAll('#ratingSys .bean');
      beans.forEach(bean => {
        bean.addEventListener('click', function() {
          const rating = parseInt(this.getAttribute('data-value'));
          document.getElementById('ratingValue').value = rating;
          beans.forEach(b => {
            const bValue = parseInt(b.getAttribute('data-value'));
            if(bValue <= rating) {
              b.classList.add('on');
              b.classList.remove('off');
            } else {
              b.classList.add('off');
              b.classList.remove('on');
            }
          });
        });
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

    // Mode Toggle Functionality
    function toggleMode() {
      var container = document.getElementById('addTastingContainer');
      var toggleButton = document.getElementById('toggleModeButton');
      if (container.classList.contains('advanced-mode')) {
        container.classList.remove('advanced-mode');
        toggleButton.innerText = "Switch to Advanced Mode";
      } else {
        container.classList.add('advanced-mode');
        toggleButton.innerText = "Switch to Simple Mode";
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
    let stepCount = 3;
    function addStep() {
      stepCount++;
      const stepsContainer = document.getElementById("stepsContainer");
      const stepDiv = document.createElement("div");
      stepDiv.classList.add("form-group", "step");
      stepDiv.innerHTML = `<label>Step ${stepCount}</label><input type="text" placeholder="Enter brewing step">`;
      stepsContainer.appendChild(stepDiv);
    }

    let timer;
    let totalSeconds = 0;
    function startTimer() {
      if (!timer) {
        timer = setInterval(() => {
          totalSeconds++;
          const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
          const seconds = String(totalSeconds % 60).padStart(2, '0');
          document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
        }, 1000);
      }
    }
    function stopTimer() {
      clearInterval(timer);
      timer = null;
    }
    function resetTimer() {
      stopTimer();
      totalSeconds = 0;
      document.getElementById("timerDisplay").textContent = "00:00";
    }

    function addStep() {
      const stepsContainer = document.querySelector('.steps');
      const textarea = document.createElement('textarea');
      textarea.placeholder = `Step ${stepsContainer.querySelectorAll('textarea').length + 1}`;
      stepsContainer.insertBefore(textarea, stepsContainer.querySelector('.add-step'));
    }

    function closePromode() {
      const popup = document.getElementById('promodePopup');
      const overlay = document.getElementById('promodeOverlay');
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }