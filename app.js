//require 
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const verification = require('./verification')
//載入session
const expressSession = require('express-session')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
//建立session middleware
app.use(expressSession({
  secret: "aasssx",
  cookie: { maxAge: 60 * 1000 } //cookie存在時間
}))

//route
app.get('/', (req, res) => {
  //如果session.name存在 則導入歡迎頁面 否的話顯示登入頁面
  if (req.session.name) {
    console.log(req.session)
    res.redirect(`/${req.session.name}`)
  } else {
    res.render('index')
  }
})

app.post('/login', (req, res) => {
  //取得使用者表單送出的資訊驗證比對
  //登入成功則將使用者的名字做為session上的key-value(name:${results.firstName})
  //登入失敗顯示帳號或密碼不正確
  const { email, password } = req.body
  const results = verification(email, password)
  if (results) {
    req.session.name = results.firstName
    res.redirect(`/${results.firstName}`)
  } else {
    res.render('index', { message: 'Email or password is not correct！' })
  }
})

app.get('/:name', (req, res) => {
  //渲染使用者歡迎畫面
  const name = req.params.name
  res.render('welcome', { message: `Welcome Back ${name}！` })
})

//start and listen server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
