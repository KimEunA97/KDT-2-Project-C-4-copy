const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// app.get('/',(req, res)=>{
//   // res.render('index');
//   res.render('index',{ title : 'Node.js + zz'});
// });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/get', (req, res) => {
  res.send(`<span>${req.query.id}</span><p></p><span>${req.query.pwd}</span>`)
  // res.send('get 정보 전달 잘 됨.')
});
//http://localhost:3000/get?id=clap&pwd=1234&submit=제출

app.post('/post', (req, res) => {
    // res.send('post 정보 전달 잘 됨.')
    res.send(`<span>${req.body.id}</span><p></p><span>${req.body.pwd}</span>`)
    // console.log(req.body);
    //{id:'clap', pwd:'1234', submit:'제출'}
});
//http://localhost:3000/post

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});