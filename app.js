const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')

const { sequelize, User } = require('./db/models')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mountRoutes(app)

module.exports = app
