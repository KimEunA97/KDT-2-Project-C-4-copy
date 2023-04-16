var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;//var url  // _url
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname
    if( pathname === "/"){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          console.log(filelist);//[ 'CSS', 'HTML', 'JavaScript' ]
          var title = "heeun page"
          var description = "good night"
        //   var list = `<ol>
        //   <li><a href="/?id=HTML">HTML</a></li>
        //   <li><a href="/?id=CSS">CSS</a></li>
        //   <li><a href="/?id=JavaScript">JavaScript</a></li>
        // </ol>`;
          var list = '<ol>';
          var i = 0 ;
          while(i < filelist.length){
            list = list + `<li>${filelist[i]}</li>`
            i = i + 1;
          }
          list = list + '<ol>';

          var templete = `
          <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title> 
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="index.html">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description} </p>
      </body>
      </html>
          `;
          response.writeHead(200);
          response.end(templete); 
        })  

  }else{  
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
      var title = queryData.id; 
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
      response.writeHead(200);
      response.end(templete);
  });
}
    }else{
      response.writeHead(404);
      response.end('not found');
    }
}); 
app.listen(3000);
