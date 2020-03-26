var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Cntent-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.post('/', function(req,res){
const pg = require('pg');
var express = require("express");
const cs = 'postgres://postgres:2046117@localhost:5432/test';
var app = express();
const client = new pg.Client(cs);
client.connect(); 
var rn = "'" +req.body.Name+ "'";
var rd = "'" +req.body.DOB+ "'";
var ra = "'" +req.body.Address+ "'";
console.log(rn);
client.query("INSERT INTO datalist (name, dob, address) values ( rn , rd, ra)");

var test = [];
var t = 0;
client.query('SELECT * FROM datalist').then(res => {
    
   var data = res.rows;
   console.log(data);
   test[t] = data;
});
res.send(test);
});
app.listen(1338, function(){
  console.log("Started on PORT 1338");
});


  
