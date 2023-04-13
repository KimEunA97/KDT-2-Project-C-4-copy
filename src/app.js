// 외부모듈
import express from 'express'
import {index} from './routes/index.js'
let app = express();



app.use('/index',index);


app.listen(3000);