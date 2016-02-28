//ONLY JAVASCRIPT MAP
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: /*get*/, lng: /*get*/},
    zoom: 14
  });
}

//HTML and JAVASCRIPT
<!DOCTYPE html>
<html>
  <head>
    <title>Purchase History</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: /*get*/, lng: /*get*/},
          zoom: 14
        });
		//ADD MULTIPLE MARKERS FOR ALL PURCHASES
		marker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation:google.maps.Animation.BOUNCE
          position: {lat: /*get*/, lng: /*get*/}
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF0txcDHGhm7xIsHoEEkmKnorBJcZfZtg&callback=initMap"
    async defer></script>
  </body>
</html>

//USE EQUATION TO FIND DISTANCE BETWEEN GEOCODES
//http://andrew.hedges.name/experiments/haversine/

//GEOCODE API
//https://developers.google.com/maps/documentation/geocoding/intro
https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&bounds=34.172684,-118.604794|34.236144,-118.500938&key=YOUR_API_KEY

//API KEY: AIzaSyBF0txcDHGhm7xIsHoEEkmKnorBJcZfZtg

//GOOGLE PLACES
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

