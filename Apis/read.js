const pg = require('pg');
var CircularJSON = require('circular-json');
const cs = 'postgres://postgres:2046117@localhost:5432/test';

const client = new pg.Client(cs);

client.connect();

const sql = 'SELECT * FROM datalist';


client.query(sql).then(res => {

    const data = res.rows;

    data.forEach(row => console.log(row));
    const Data = CircularJSON.stringify(data);
    console.log(Data);
    return Data;

}).finally(() => {
    client.end()
});