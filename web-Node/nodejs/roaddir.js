// './test' 'test' 같은 뜻 : ./ 현제 디렉터리에 있다는 뜻    
var testFolder = './data';
var fs = require('fs');
fs = fs.readdir(testFolder, function(error,filelist){
  console.log(filelist); 
})
//web-Node % node nodejs/roaddir.js
//[ 'CSS', 'HTML', 'JavaScript' ]
