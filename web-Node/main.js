var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);//HTML  // console.log(queryData); => [Object: null prototype] { id: 'HTML' }   
    // url=>  '?id=HTML' url 을 분석해서 값을 추출해야 한다.  분석 = parse 
    if(_url== '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + _url);  //콘솔에 표시된다. web-Node/1.html
    //자바스크립트 코드를 통해서 읽어들이게 될 파일을 만들수 있다. 
    response.end(queryData.id);

    // response.end(fs.readFileSync(__dirname + _url));
    //readFileSync ( node.js ) 그경로의 파일을 읽어서 가져오는것 .  //http://localhost:3000/1.html  => jungheeeun :/1.html

});
app.listen(3000);