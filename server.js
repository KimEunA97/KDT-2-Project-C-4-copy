import http from 'http'
import fs from 'fs'
import qs from 'querystring'
// import htmlparser from 'htmlparser2';




const server = http.createServer(function (request, response) {



  if (request.method === 'GET' && request.url === '/') {

    fs.readFile('./test.html', function (error, data) {

      if (error) {
        response.writeHead(404);
        console.error("에러!");
      }

      else {
        response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });


        response.end(data);


        // let handler = new htmlparser.DomHandler(function (error, dom) {

        //   if (error) {


        //   }
        //   else {

        //   }

        // })

        // let parser = new htmlparser.Parser(handler);
        // parser.write(data);
        // parser.end();
        // console.log(data);

        let buf = Buffer.from(data);
        let jsbuf = buf.toString();




        // let parseData = JSON.parse(buf);
        // console.log(parseData);

      }
    })

  }


  let body = "";
  if (request.method === 'POST' && request.url === '/location') {


    request.on('data', function (data) {

      body += data;

    });
    request.on('end', function () {
      console.log(body);



      response.writeHead(200);
      response.end()
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

