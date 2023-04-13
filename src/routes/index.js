import express from 'express'
let router = express.Router();

router.get('/', function(req, res) {  
    res.send('GET handler for /dogs route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});

export{router as index} 