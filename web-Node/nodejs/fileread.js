var fs = require('fs'); // 노드 모듈 file system
fs.readFile('sample.txt','utf8',function(err,data){
  console.log(data);
});

//fs.readFile('sample.txt', function(err,data){
// <Buffer 45 78 65 72 63 69 74 61 74 69 6f 6e 20 72 65 70 72 65 68 65 6e 64 65 72 69 74 20 76 65 6e 69 61 6d 20 65 6c 69 74 20 63 75 6c 70 61 20 61 6e 69 6d 20 ... 436 more bytes>

// utf8 추가시 sample.txt 파일의 내용을  정상적으로 읽어온다. 