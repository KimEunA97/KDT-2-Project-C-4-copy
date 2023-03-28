import url from 'url'
import querystring from 'querystring';
import path from 'path'

import { KEYobj } from './module/KEY.js';


// 날짜 가져오는 메소드
let todayDate = new Date();
let YYYY = todayDate.getFullYear();
//자바스크립트 월은 0월부터 시작이라 1을 더해줘야 함.
let MM = todayDate.getMonth() + 1;
let DD = todayDate.getDate();
let _hour = todayDate.getHours();
console.log(YYYY + "." + MM + "." + DD + "." + _hour);



let KEYURL = querystring.parse(KEYobj.APIreqeustURL);
console.log(KEYURL);

const _URL = KEYobj.serviceURL
console.log(_URL);

let url = "";

url += "getVilageFcst";
url += "?ServiceKey=" + KEYobj.serviceKEY;
url += "&numOfRows=10";
url += "&pageNo=1";
url += "&dataType=XML";
url += "&base_data=" + MM;
url += "&base_time" + _hour;
url += "&nx=" + nx;
url += "&ny=" + ny;





function APIload() {

  let pageNo, numOfRows, dataType, base_date, base_time, nx, ny;

  fetch(_URL)
    .then(response => response.json())
    .then(data => console.dir(data))

}

APIload();


