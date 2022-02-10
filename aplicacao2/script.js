let mapOptions = {
  center: [-8.063590221798542, -34.87405631490368],
  zoom: 10
};


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// let teste = MQ.mapLayer();
map.addLayer(layer);

let marker = new L.Marker([-8.063590221798542, -34.87405631490368]);
marker.addTo(map);
let marker2 = new L.Marker([-7.9085182, -34.9306523]);
marker2.addTo(map);
let marker3 = new L.Marker([-7.8991977, -34.9009787]);
marker3.addTo(map);
let marker4 = new L.Marker([-8.0455357, -34.9108615]);
marker4.addTo(map);
L.Routing.control({
  waypoints: [
    L.latLng(-8.063590221798542, -34.87405631490368),
    L.latLng(-7.9085182, -34.9306523),
    L.latLng(-7.8991977, -34.9009787)
  ]
}).addTo(map);
// let marker3 = new L.Marker([-7.8991977, -34.9009787]);
// marker3.addTo(map);
