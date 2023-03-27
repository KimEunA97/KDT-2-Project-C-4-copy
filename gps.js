import './module/Kmagrid.js';



function eleMaker(ele) {

  let element = document.createElement(ele);
  return element;
}

const root = document.getElementById('root');

for (let i = 0; i < 3; i++) {
  const loc = eleMaker('div');
  root.append(loc);
}


firstChild = root.children[0];
secondChild = root.children[1];
thirdChild = root.children[2];

function styling(Target, Wsize, Hsize, BorCol, inText, fontCol) {
  Target.style.width = Wsize;
  Target.style.height = Hsize;
  Target.style.border = BorCol;
  Target.style.color = fontCol;
  Target.textContent = inText;


}


//GPS

let lat, lon;

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position);
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log("위도 : " + lat + " 경도 :" + lon);

  console.log((lat, lon));

})


function com() {

  styling(firstChild, "200px", "100px", "1px solid black", lat + " " + lon, "black");
  styling(secondChild, "200px", "100px", "1px solid black", lon, "black");
  styling(thirdChild, "200px", "100px", "1px solid black", "asdsd", "black");

  console.log(lat);
}

console.log("asd : \n", firstChild.innerText);

