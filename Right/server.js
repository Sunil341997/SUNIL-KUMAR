var express = require('express');
var app = express();
var hw = express.Router();

var database = require('./database');
var CircularJSON = require('circular-json');
var bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
var jsonParser = bodyParser.json({ type: 'json'} );

app.post(jsonParser,function(req,res){
  console.log(database);
  res.send(JSON.stringify(database));
});

app.use('/',hw);
var server = require('http').Server(app);
server.listen(1338, function(){
    console.log('Listening at port 1338');
    
});