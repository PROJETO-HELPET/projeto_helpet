/* function sucess(position) {
    console.log(position.coords.latitude, position.coords.longitude)
    let meuLocal = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
} 
let watchID = navigator.geolocation.watchPosition(sucess) */

function initMap() {
    const uluru = { lat: -25.344, lng: 131.031 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
   
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}


window.initMap = initMap;


 
