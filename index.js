const express = require('express')
const path = require("path");
const app = express()
const port = 8082

app.use(express.static(__dirname + '/pages'));

// -- Routes
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/map', (req, res) => {
  res.sendFile('map.html')
})

app.get('/howToMakeCoffee', (req, res) => {
  res.sendFile('howToMakeCoffee.html')
})

/* Start server */
let server = require('http').createServer(app).listen(port)
console.log('Server started on port', port)
