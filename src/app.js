// 외부모듈
import express from 'express'
import {index} from './routes/index.js'
// import fs from 'fs'
// import stat from 'static'
import {board} from './routes/board.js'
let app = express();


app.use('/index',index);

app.use('/board',board);

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views/board_write'));
// app.set('/board_write', stat(path.join(__dirname,'./views/board_write.js')))

app.listen(3000);