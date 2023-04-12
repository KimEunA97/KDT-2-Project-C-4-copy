var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);  //콘솔에 표시된다. web-Node/1.html
    //자바스크립트 코드를 통해서 읽어들이게 될 파일을 만들수 있다. 
    response.end( 'jungheeeun :' + url);
    //readFileSync ( node.js ) 그경로의 파일을 읽어서 가져오는것 .  //http://localhost:3000/1.html  => jungheeeun :/1.html
 
});
app.listen(3000);