const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')
const passport = require('passport')
require('./config/passport')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Passport.js
app.use(passport.initialize())
app.use(passport.session())

mountRoutes(app)

module.exports = app
