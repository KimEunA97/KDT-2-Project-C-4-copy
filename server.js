import fs from 'fs'
import express from 'express'
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

app.listen(2080, (err) => {

  if (err) {

    console.log("Server Error!");

  }

  else {
    console.log("Server Working...")
  }

})

