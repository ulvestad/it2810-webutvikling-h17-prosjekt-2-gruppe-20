const express = require('express')
const path = require("path")
const app = express()
const port = 8082

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'pages/public')))

// -- Routes
app.get('/', (req, res) => {
  res.redirect('/pages/index.html')
})

app.get('/map', (req, res) => {
  res.redirect('/pages/map.html')
})

app.get('/howToMakeCoffee', (req, res) => {
  res.redirect('/pages/howToMakeCoffee.html')
})

app.get('/facts', (req, res) => {
  res.redirect('/pages/facts.html')
})

/* Start server */
let server = require('http').createServer(app).listen(port)
console.log('Server started on port', port)
