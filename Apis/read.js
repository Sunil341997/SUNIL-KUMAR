const pg = require('pg');

const cs = 'postgres://postgres:2046117@localhost:5432/test';

const client = new pg.Client(cs);

client.connect();

const sql = 'SELECT * FROM datalist';


client.query(sql).then(res => {

    const data = res.rows;

    data.forEach(row => console.log(row));

}).finally(() => {
    client.end()
});