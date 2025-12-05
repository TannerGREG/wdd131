function initMap() {
var mapProp= {
  center:new google.maps.LatLng(43.822890994684585, -111.78642427995563),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
const locations = [
    { lat: 43.81488858304542, lng: -111.79005227761711, title: "B1" },
          { lat: 43.8201, lng: -111.7859, title: "B2" },
          { lat: 43.825, lng: -111.789, title: "B3" },
          { lat: 43.8185, lng: -111.783, title: "B4" },
        ];

locations.forEach((loc) => {
          new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map: map,
            title: loc.title,
          });
        });
      }


const apiKey = CONFIG.GOOGLE_MAPS_KEY;

// moves it to the html, and loads the google map API on the page
