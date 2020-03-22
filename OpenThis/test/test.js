const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "2046117",
    host: "DESKTOP-MGHLHS5",
    port: 5432,
    database: "test"
})

client.connect()
.then(() => console.log("Connected successfully"))
.catch(e => console.log)
.finally(() => client.end())