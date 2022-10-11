var map;
if ('geolocation' in navigator) {
    function sucess(position) {
        console.log(position.coords.latitude, position.coords.longitude)
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        if (map === undefined) {

            map = L.map('map').setView([latitude, longitude], 13);

        } else {
            map.remove();
            map = L.map('map').setView([latitude, longitude], 13);
        }
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Eu estou aqui!')
            .openPopup();

    }

    function error(err) {
        console.log(err)
    }

    let watchID = navigator.geolocation.watchPosition(sucess, error)

    //navigator.geolocation.clearWatch(watchID)

} else {
    alert("Ops, não foi possível pegar a localização")
}

