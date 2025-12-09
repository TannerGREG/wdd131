function initMap() {
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 43.822890994684585, lng: -111.78642427995563 },
    zoom: 15,
  });

  BIKES.forEach((bike) => {
    const marker = new google.maps.Marker({
      position: { lat: bike.lat, lng: bike.lng },
      map,
      title: bike.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-size: 16px;">
          <strong> Bike ${bike.id}</strong><br>
          Battery: ${bike.battery}<br>
          Status: ${bike.status}
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open({ anchor: marker, map });
    });
  });
}
