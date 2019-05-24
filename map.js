function initMap() {
    let options = {
        zoom: 15,
        center: {lat: 43.916919, lng: -79.554964}
    }

    let map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({
        position:{lat: 43.916919, lng: -79.554964},
        map: map
    });
}