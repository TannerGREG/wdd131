// CONFIG comes from config.js
const apiKey = CONFIG.GOOGLE_MAPS_KEY;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
script.async = true;
script.defer = true;

document.head.appendChild(script);
