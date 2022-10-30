$(document).ready(() => {
    let params, name, latitude, longitude, map;

    params = new URLSearchParams(location.search);
    name = params.get('name');
    latitude = params.get('latitude');
    longitude = params.get('longitude');
    
    $('#titulo').text(name + ' Map');
    
    map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="../../index.html">Ascencion Orbit</a>'
    }).addTo(map);
});