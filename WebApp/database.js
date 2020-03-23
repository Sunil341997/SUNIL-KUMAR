const pg = require('pg');

const cs = 'postgres://postgres:2046117@localhost:5432/test';

const client = new pg.Client(cs);

client.connect();

var test = {};

client.query('SELECT * FROM datalist where id=1').then(res => {
    
    var data = res.rows;
    console.log(data);
    test.firstRaw = data;
}
);
client.query('SELECT * FROM datalist where id=2').then(res => {
    
    var data = res.rows;
    console.log(data);
    test.secondRaw = data;
}
);
client.query('SELECT * FROM datalist where id=3').then(res => {
    
    var data = res.rows;
    console.log(data);
    test.thirdRaw = data;
}
);
client.query('SELECT * FROM datalist where id=6').then(res => {
    
    var data = res.rows;
    console.log(data);
    test.forthRaw = data;
}
);
module.exports = test;