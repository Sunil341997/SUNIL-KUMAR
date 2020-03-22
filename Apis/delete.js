const pg = require('pg');

const cs = 'postgres://postgres:2046117@localhost:5432/test';
const express = require("express");
const client = new pg.Client(cs);

client.connect();

client.query("DELETE FROM datalist WHERE id = 6;");

const sql = 'SELECT * FROM datalist';
    client.query(sql).then(res => {
        
        const data = res.rows;
    
        data.forEach(row => console.log(row));
    
    }).finally(() => {
        client.end()
    });
    
