var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var read  = require('./read');
var insert = require('./insert');
var update = require('./update');
var del = require('./delete');
var request = require('./javaScript');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.post('/',function(req,res){
  console.log(req);
  res.send(read);
});

app.listen(1338,function(){
  console.log("Started on PORT 1338");
})