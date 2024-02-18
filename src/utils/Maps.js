// Map.js

function initMap() {

    // Coordenadas
    var lat = -17.770874574937785;
    var lng = -63.18355470591679;

    // Opciones del Mapa
    var options = {
        zoom: 8,
        center: {lat, lng}    
    }

    // Nuevo Mapa
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Marcador
    new google.maps.Marker({
        position: {lat, lng},
        map
    });
}

// Hacer initMap() disponible globalmente
window.initMap = initMap;