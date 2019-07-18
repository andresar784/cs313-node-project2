
// Initialize and add the map
function initMap() {
    // The location of Uluru
    //let lat = document.querySelector(".lat");
    //let lng = document.querySelector(".long");
    let lat = -31.474498102;
    let lng = -55.240165706;
    var uluru = {lat: lat, lng: lng};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    alert("Clicked");
  }
  
  $(document).ready(function(){
    $("#sh").click(function(){
      $("#map").hide();
    });
  });