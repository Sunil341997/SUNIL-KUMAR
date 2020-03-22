const pg = require('pg');

const cs = 'postgres://postgres:2046117@localhost:5432/test';
const express = require("express");
const client = new pg.Client(cs);

client.connect();

client.query("INSERT INTO datalist(id, name, dob, address) values(6, 'Raj', '1967-05-04', 'Jaipur')");

const sql = 'SELECT * FROM datalist';
    client.query(sql).then(res => {
        
        const data = res.rows;
    
        data.forEach(row => console.log(row));
    
    }).finally(() => {
        client.end()
    });
    
