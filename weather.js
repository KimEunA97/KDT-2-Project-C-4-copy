import http, { Server } from 'http'
import url from 'url'
import querystring from 'querystring';
import path from 'path'

import { KEYobj } from './module/KEY.js';


let KEYURL = querystring.parse(KEYobj.APIreqeustURL);
console.log(KEYURL);

const _URL = KEYobj.serviceURL
console.log(_URL);

url += "getVilageFcst";
url += "?ServiceKey=" + KEYobj.serviceKEY;
url += "&numOfRows=10";
url += "&pageNo=1";
url += "&dataType=XML";
url += "&base_data=" + base_date;
url += "&base_time" + base_time;
url += "&nx=" + nx;
url += "&ny=" + ny;


function APIload() {

  let pageNo, numOfRows, dataType, base_date, base_time, nx, ny;

  fetch(_URL)
    .then(response => response.json())
    .then(data => console.dir(data))


}

APIload();

http.createServer(function (request, response) {

  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    let page = firstPage(data);
    response.write(page);
    response.end;

  }

}).listen(2080);

function firstPage(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  ${data}
  </body>
  </html>
  `;
}