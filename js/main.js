function initMap() {
    let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    let map = document.getElementById("map");
    let option = {
        center: {
            lat: 25.6872,
            lng: 32.6396
        },
        zoom: 8
    };
    let myMap = new google.maps.Map(map,option);
    function createMarker(position,content){
        let marker = new google.maps.Marker({
            map : myMap,
            position : position
        });
        let hello = new google.maps.InfoWindow({
            content : `<h1>${content}</h1>`
        });
        marker.addListener("click",function () {
           hello.open(myMap,marker);
        });
    }
    createMarker({lat: 25.6872, lng: 32.6396},"فرع - الاقصر");
    createMarker({lat: 25.5975, lng: 32.5429},"فرع - الطود");
    map.style.borderTop = `4px solid #7FBA00`;
    map.style.borderBottom = `4px solid #7FBA00`;
}