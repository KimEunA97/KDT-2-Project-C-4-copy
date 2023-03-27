import http, { Server } from 'http'
import url from 'url'
import path from 'path'

import './module/KEY.js'
import { KEYobj } from './module/KEY.js';



http.createServer(function (request, response) {

  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    let page = firstPage(data);
    response.write(page);
    response.end;

  }



}).listen(2080);

const _URL = KEYobj.APIreqeustURL + "?" + KEYobj.serviceKEY;

function APIload() {

  let pageNo, numOfRows, dataType, base_date, base_time, nx, ny;

  fetch(_URL)
    .then(response => response.json())
    .then(data => console.dir(data))


}

APIload();

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