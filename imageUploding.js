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
import path from 'path'

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
      
      let pathimage= path.join(path.dirname(new URL(import.meta.url).pathname), 'make.jpg');
      console.log(pathimage)
      //const filePath = path.join(__dirname,'image.jpg');
      res.setHeader('Content-Type','image/jpeg')
      res.write(`<img src="${pathimage}">`);
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Upload</button>
    </form>`);
  }
});

server.listen(3000, () => {
  console.log("서버가동");
});