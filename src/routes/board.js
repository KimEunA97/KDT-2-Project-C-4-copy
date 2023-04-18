import {board} from '../../util/database.js';
import express from 'express'
let router = express.Router();

// import fs from 'fs'

router.get('/', function(req, res) {  
    res.render('board_write');
    // res.send('GET board_write.');
});

router.post('/', function(req, res) {
    // res.send('POST board_write.');
    console.log(req.body);   
    let title= req.body.title;
    let content = req.body.content;

    board(title, content);
});

export{router as board}