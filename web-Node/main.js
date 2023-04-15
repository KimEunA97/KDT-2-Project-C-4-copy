var http = require('http');
var fs = require('fs');
var url = require('url');//이제 url은 모듈 url을 가리킨다 
var app = http.createServer(function(request,response){
    var _url = request.url;//var url  // _url
    var queryData = url.parse(_url, true).query;
    var title = queryData.id; // 깔끔하게 보기위해서 
    console.log(queryData.id);// HTML //css // JavaScript
    // console.log(_url);
    if(_url == '/'){
      // _url = '/index.html';    // templete 가져와서 필요 없음. 
      title= "heen Homepage !";   // 최상의 경로 30일때 표시 . 
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
      var templete = `
      <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title> 
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>${description} </p>
  </body>
  </html>
      `;
      //이제 본문 내용을 바꿔줘도 node main.js를 껐다가 켤 필요없이 본문내용이 업데이트 된다. 
      response.end(templete);
    })
    // console.log(__dirname + url);
    // response.end(fs.readFileSync(__dirname + _url));

    //이렇게 만들어놓으면 몇천개이던지 , 바꿀수 있는 큰 효과이다. 

 
});
app.listen(3050);