const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/login', function (req, res) {
  res.render('login');
});

app.get('/main',(req, res)=>{
    res.send('<h1>나 메인이야~</h1>')
})

// app.get('/login',(req, res)=>{
//     res.send('<h1>나 로그인이야~</h1>')
// })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});