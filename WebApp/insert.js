const pg = require('pg');
var express = require("express");
const cs = 'postgres://postgres:2046117@localhost:5432/test';
var app = express();
const client = new pg.Client(cs);
var sendReq = require('./oldex');
client.connect();
client.query("INSERT INTO datalist(id, name, dob, address) values(8, 'sendReq[0].Name', 'sendReq[0].DOB', 'sendReq[0].Address');");

var test = [];

client.query('SELECT * FROM datalist where id=1').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[0] = data;
}
);
client.query('SELECT * FROM datalist where id=2').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[1] = data;
}
);
client.query('SELECT * FROM datalist where id=3').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[2] = data;
}
);
client.query('SELECT * FROM datalist where id=8').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[3] = data;
});
client.query('SELECT * FROM datalist where id=7').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[4] = data;
});
app.post('/',function(req,res){
    console.log(req);
    res.send(test);
  });
  