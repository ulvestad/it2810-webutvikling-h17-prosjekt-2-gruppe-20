const express = require('express')
const app = express()
const port = 8082

// -- Routes
app.get('/', (req, res) => { 
  res.send('<3')
})

/* Start server */
let server = require('http').createServer(app).listen(port)
console.log('Server started on port', port)