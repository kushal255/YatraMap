const socket = io();

// GET LOCATION
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
        const { latitude, longitude } = position.coords;
        console.log("My location:", latitude, longitude);
        socket.emit('send-location', { latitude, longitude });
    }, (err) => {
        console.log("Geo error:", err);
    });
}

// MAP (less zoomed)
const map = L.map('map').setView([0, 0], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "OpenStreetMap Contributors"
}).addTo(map);

const markers = {};

socket.on('receive-location', function (data) {
    const { latitude, longitude, id } = data;

    console.log("Received:", data);

    // center map on location
    map.setView([latitude, longitude]);

    // update marker
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on('user-disconnected', function (id) {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
