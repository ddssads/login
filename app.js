//require 
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const verification = require('./verification')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const results = verification(email, password)
  if (results === 'Email or Password is not correct') {
    res.render('index', { results })
  } else {
    res.render('welcome', { results })
  }
})

//start and listen server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
