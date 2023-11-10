let map = L.map('map').setView([39.478578, -0.645974],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([39.478578, -0.645974]).addTo(map);

//Si hay que poner un texto en el marcador poner con este comando
//marker.bindPopup().openPopup();

