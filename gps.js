//GPS

let lat, lon;
let lattag = document.getElementById('lattag');
let lontag = document.getElementById('lontag');


navigator.geolocation.getCurrentPosition(function (position) {

  lat = position.coords.latitude;
  lon = position.coords.longitude;
  lattag.value = lat;
  lontag.value = lon;


  console.log("위도: " + lat, "경도: " + lon);


  let location = new Object();
  location.lat = lat;
  location.lon = lon;

  console.log(location);

})