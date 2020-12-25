//require 
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
  res.render('index')
})


//start and listen server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
