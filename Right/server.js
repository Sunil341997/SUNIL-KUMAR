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
var t = 0;
var i = 0;
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
client.query("INSERT INTO datalist (id, name, dob, address) values (1, rn , rd, ra);");

var test = [];
client.query('SELECT * FROM datalist where id = 1').then(res => {
    
   var data = res.rows;
   console.log(data);
   test[i] = data;
   
   return test;
   
}).then(test => {res.send(test)});
//i++;
});
app.listen(1338, function(){
  console.log("Started on PORT 1338");
});


  
