function success(position) {
    console.log(position.coords.latitude, position.coords.longitude)
    let meuLocal = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: meuLocal,
    });
    const marker = new google.maps.Marker({
      position: meuLocal,
      map: map,
    });
} 

function initMap() {
  
  let watchID = navigator.geolocation.watchPosition(success)
  
}

window.initMap = initMap;