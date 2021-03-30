const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// setting static files
app.use(express.static('public'))
// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// Setting methodOverride
app.use(methodOverride('_method'))
// Routers
app.use(routes)

// Listen the server when it started
app.listen(PORT, () => {
  console.log(`APP is running on http://localhost:${PORT}`)
})
