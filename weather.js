import http, { Server } from 'http'
import url from 'url'
import path from 'path'


const APIreqeustURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

const serviceURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0"

const serviceKEY = "bb%2BP09bY3vabZXZRYZxaz8tUfEmSfIx58oQHgWjAfSbbI%2B0NnVcuDVgXENmUzfD68uuICVPx4i2y1bAhTq0nQA%3D%3D"

// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=bb%2BP09bY3vabZXZRYZxaz8tUfEmSfIx58oQHgWjAfSbbI%2B0NnVcuDVgXENmUzfD68uuICVPx4i2y1bAhTq0nQA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20210628&base_time=0600&nx=55&ny=127


http.createServer(function (request, response) {

  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    let page = firstPage(data);
    response.write(page);
    response.end;

  }



}).listen(2080);

_URL = APIreqeustURL + "?" + serviceKEY;

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