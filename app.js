let express = require('express')
let app = express();
let index = require('./routes/index');


app.use('/index',index);

app.listen(3000);