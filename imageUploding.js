// import http from 'http'
// import multer from 'multer'

// const upload = multer({dest:'/image'});


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <form action="/upload" method="POST" enctype="multipart/form-data">
//       <input type="file" name="image" />
//       <button type="submit">Upload</button>
//   </form>`);
//   if(req.url=="/upload" && req.method=="POST"){
//     upload.single('img');
//     console.log(req.file);e
//   } 
// });




// server.listen(3000, () => {
//   console.log("서버가동");
// });

import http from 'http'
import multer from 'multer'
import fs from 'fs'

const upload = multer({dest:'./image'});


const server = http.createServer((req, res) => {
  if(req.url=="/upload" && req.method=="POST"){
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Failed to upload file");
        return;
      }
      console.log(req.file);
      let readfile = fs.readFileSync(req.file.path);
      console.log(readfile);

      let decode = Buffer.from(readfile ,'base64'); //파일 디코딩
      let makeDecodeFile = fs.writeFileSync('./make.jpg', decode); 
      
      
      res.setHeader('Content-Type','text/html')
      res.end(`<!DOCTYPE html>
      <img src="./make.jpg"`);
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Upl oad</button>
    </form>`);
  }
});

server.listen(3000, () => {
  console.log("서버가동");
});