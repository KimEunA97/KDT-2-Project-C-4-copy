import http from 'http'




const server = http.createServer(function (request, response) {



  if (request.url == '/') {

    console.dir(response)
    console.dir(request)

    response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    response.write('hello World')

    response.end();

  }


  else {



  }


})

server.listen(2080, function (error) {

  if (error) {

    console.log("서버 실패");
  }

  else {

    console.log("서버 구동");

  }

});

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