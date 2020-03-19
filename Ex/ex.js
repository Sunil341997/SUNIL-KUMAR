var express = require('express');
var app = express();

app.post('/detailed', function(req,res){
    res.send('Hello world');
    console.log(req.body);

});