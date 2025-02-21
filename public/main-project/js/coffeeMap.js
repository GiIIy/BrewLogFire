
// Create the map with no tile layer (so the background color shows for the sea)
var map = L.map('map', {
  zoomControl: true,
  attributionControl: true
}).setView([10, 20], 2);

// Set the sea background via CSS on .leaflet-container (see style)

// Coffee origins data
var coffeeOrigins = [
  { name: "Ethiopia", coords: [9.145, 40.489673] },
  { name: "Colombia", coords: [4.570868, -74.297333] },
  { name: "Brazil", coords: [-14.235, -51.9253] },
  { name: "Vietnam", coords: [14.0583, 108.2772] }
];
// Array of country names to highlight (coffee origins)
var highlightedCountries = coffeeOrigins.map(origin => origin.name);

// Load GeoJSON for all countries and style them with a coffee-related palette.
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
  .then(response => response.json())
  .then(geojsonData => {
    // Add a layer for all countries with light beige fill and brown borders
    L.geoJson(geojsonData, {
      style: function(feature) {
        // If the country is in our highlighted list, use a darker fill and thicker border.
        if (highlightedCountries.includes(feature.properties.name)) {
          return {
            color: "#8B4513",      // Brown border
            fillColor: "#A67B5B",  // Tan (darker beige)
            fillOpacity: 0.8,
            weight: 2
          };
        } else {
          return {
            color: "#8B4513",      // Brown border
            fillColor: "#F5DEB3",  // Wheat/light beige
            fillOpacity: 0.8,
            weight: 1
          };
        }
      }
    }).addTo(map);
  })
  .catch(err => console.error('Error loading GeoJSON:', err));

// Create a custom coffee cup icon for the markers
var coffeeIcon = L.icon({
  iconUrl: 'https://img.icons8.com/color/48/000000/coffee-to-go.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Add markers for coffee origins on top of the countries layer
coffeeOrigins.forEach(function(origin) {
  L.marker(origin.coords, { icon: coffeeIcon }).addTo(map)
    .bindPopup("<b>" + origin.name + "</b>");
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
