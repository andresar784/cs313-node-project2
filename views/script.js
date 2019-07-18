// Initialize and add the map
function initMap() {
    // The location of Uluru
    let lat = document.querySelector(".lat");
    let lng = document.querySelector(".long");
    var uluru = {lat: lat, lng: lng};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    alert("Clicked");
  }
  