const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const { engine } =  require('express-handlebars')

//load picture
//phuong thuc static nhan path va tra path public
app.use(express.static(path.join(__dirname, 'public')));

//sass
const sass = require('sass');

// const result = sass.compile('style.scss');

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})