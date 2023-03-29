import http from 'http'
import fs from 'fs'
import qs from 'querystring'
import url from 'url'



const server = http.createServer(function (request, response) {



  if (request.method === 'GET' && request.url === '/') {

    fs.readFile('./show.html', function (error, data) {

      if (error) {
        console.error("에러!");
      }

      else {
        response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        console.log(data);


        let buf = Buffer.from(data,'base64');
        console.dir(buf);



        response.end(data);
      }
    })

  }


  let body = "";
  if (request.method === 'POST' && request.url === '/location') {


    request.on('data', function (data) {

      body += data;

    });
    request.on('end', function () {
      let post = qs.parse(body);
      console.log(post);
    })

  }


})

server.listen(2080, function (error) {

  if (error) {
    console.log("서버 구동 실패");
  }
  else {
    console.log("서버 구동");
  }
});

