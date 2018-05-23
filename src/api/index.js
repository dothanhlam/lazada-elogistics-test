const express = require('express')
const port = process.env.PORT || 3001
const app = express()
const parsers = require('./parser')
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  // For Karma
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9876')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use( bodyParser.json() )       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

const mockResponse = '{"mydata":[{"id":"1","value":"true"},{"id":"2","value":"false"}]}'
// predefined url
const defaultURLs = '{"urls": [{"id":"1","value":"https://www.lazada.sg/products/asus-zenfone-5-ze620kl-i223607770-s340712861.html"},' +
    '{"id":"2","value":"http://www.lazada.sg/samsung-galaxy-s8-64gb-midnight-black-18155589.html"}]}'

app.get('/api/status', (req, res) => {
  res.json(mockResponse)
})

app.get('/api/urls', (req, res) => {
  res.json(defaultURLs)
})

app.post('/api/parse', (req, res) => {
  const data = req.body.data
  // TODO: just parse 2 products, no more, no less :)
  Promise.all([
    parsers.parseProduct(data[0].value),
    parsers.parseProduct(data[1].value)
  ]).then(results => {
    res.json(JSON.stringify(results))
  }, error => {})

})

app.listen(port)
