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

var i = 1;
app.post('/', function(req,res){
const pg = require('pg');
var express = require("express");
const cs = 'postgres://postgres:2046117@localhost:5432/test';
var app = express();
const client = new pg.Client(cs);
client.connect(); 
var rn = req.body.Name;
var rd = new Date("'" +req.body.DOB+ "'");
var ra = req.body.Address;
console.log(rd);
const text = 'INSERT INTO datalist(id, name, dob, address) VALUES($1, $2, $3, $4) RETURNING *'
const values = [i, rn, rd, ra]
// callback
client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})

var test = [];
client.query('SELECT * FROM datalist where id = $1', [i]).then(res => {
    
   var data = res.rows;
   //console.log(data);
   test[i] = data;
   
   return test;
   
}).then(test => {res.send(test)});
i++;
});
app.listen(1338, function(){
  console.log("Started on PORT 1338");
});


  
