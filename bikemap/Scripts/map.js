function initMap() {
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 43.822890994684585, lng: -111.78642427995563 },
    zoom: 15,
  });


  BIKES.forEach((bike) => {
    const marker = new google.maps.Marker({
      position: { lat: bike.lat, lng: bike.lng },
      map,
      title: `Bike ${bike.id}`,
      icon: {
        url: bike.status === "Available"
          ? "./images/green-bike-icon.png"
          : "./images/red-bike-icon.png",
        scaledSize: new google.maps.Size(35, 35),
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-size: 16px;">
          <strong>Bike ${bike.id}</strong><br>
          Battery: ${bike.battery}<br>
          Status: ${bike.status}
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open({ anchor: marker, map });
    });
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        new google.maps.Marker({
          position: userPos,
          map,
          title: "You Are Here",
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize: new google.maps.Size(40, 40)
          }
        });


      },
      () => {
        console.warn("User denied geolocation.");
      }
    );
  }
}
