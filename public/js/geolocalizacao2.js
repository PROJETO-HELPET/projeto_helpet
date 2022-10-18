function success(position) {
  console.log(position.coords.latitude, position.coords.longitude)
  let meuLocal = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: meuLocal,
  });
  const marker = new google.maps.Marker({
    position: meuLocal,
    title: "Eu estou aqui!",
    map: map,
  });
  const caoSemDono = new google.maps.Marker({
    position: { lat: -23.631763531451902, lng: -46.60854484564916 },
    title: "Cão sem dono",
    map: map,
  });
  const zoonoses = new google.maps.Marker({
    position: { lat: -23.509428898465824, lng: -46.11413593863215 },
    title: "CCZ",
    map: map,
  });
  const acaochego = new google.maps.Marker({
    position: { lat: -23.535057545463523, lng: -46.796374271164645 },
    title: "Acãochego",
    map: map,
  });
  const miadosELatidos = new google.maps.Marker({
    position: { lat: -23.534634899150433, lng: -46.575874884656045 },
    title: "Miados e Latidos",
    map: map,
  });
}

function initMap() {

  let watchID = navigator.geolocation.watchPosition(success);

}

window.initMap = initMap;