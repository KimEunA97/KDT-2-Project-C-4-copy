const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const port = 3000;
const fs = require('fs')


app.use(fileUpload());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Upload</button>
    </form>`);
});
app.post('/upload', (req, res) => {
  // Log the files to the console
  console.log(req.files.image.data);
  let decode = Buffer.from(req.files.image.data, 'base64'); //파일 디코딩

let makeDecodeFile = fs.writeFileSync('./decode.jpg', decode); 

  // All good
  res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});