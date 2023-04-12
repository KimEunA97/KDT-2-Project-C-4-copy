import fs from 'fs'
import express from "express";
const app = express();

app.get('/', function (req, res) {


  fs.readFile('./show.html', function (err, data) {

    if (err) {

      res.writeHead(404);
      res.end();

    }

    else {
      res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
      res.write(data);
      res.end();

    }
  })

});

app.post('/location', (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  // 위도와 경도 값을 이용한 로직을 구현할 수 있음

  res.send('Location received');
});


app.listen(2080, (err) => {

  if (err) {

    console.log("Server Error!");

  }

  else {
    console.log("Server Working...")
  }

})

