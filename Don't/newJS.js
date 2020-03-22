const {pool, client} = require('pg')
const connectionString = "postgres://2046117@DESKTOP-MGHLHS5:5432/datalist";

const clients = new client ({
    connectionString : connectionString
})

clients.connect()
clients.querytool('select * from datalist' , (err,res)=>{
    console.log(err,res)
    clients.end()

})

