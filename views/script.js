$(document).ready(function(){
      $("#sh").click(function(){
        var lat = $("#lat").val();
        var lng = $("#lng").val();
        var lat_1 = parseFloat(lat);
        var lng_1 = parseFloat(lng); 
        var uluru = {lat: lat_1, lng: lng_1};
         // The map, centered at Uluru
         var map = new google.maps.Map(document.getElementById('map'), 
         {zoom: 12, center: uluru});
         // The marker, positioned at Uluru
         var marker = new google.maps.Marker({position: uluru, map: map});
    });
});

