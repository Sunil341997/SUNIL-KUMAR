const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getBooks = (request, response) => {
  pool.query('SELECT * FROM datalist', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



app
  .route('/')
  .post(getBooks)

// Start server
app.listen(process.env.PORT || 1338, () => {
  console.log(`Server listening`)
})