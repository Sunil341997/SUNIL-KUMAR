const pg = require('pg');
var express = require("express");
const cs = 'postgres://postgres:2046117@localhost:5432/test';
var app = express();
const client = new pg.Client(cs);

client.connect();

client.query("UPDATE datalist SET id = 5, name = 'Hussen', dob = '1875-04-07', address = 'Nepal' WHERE id =4;");

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
client.query('SELECT * FROM datalist where id=6').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[3] = data;
});
client.query('SELECT * FROM datalist where id=4').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[3] = data;
});
client.query('SELECT * FROM datalist where id=5').then(res => {
    
    var data = res.rows;
    console.log(data);
    test[3] = data;
});
app.post('/',function(req,res){
    console.log(req);
    res.send(test);
  });
  module.exports = test;
