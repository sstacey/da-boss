const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')

const { sequelize, User } = require('./db/models')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mountRoutes(app)

app.listen(3000, () => {
  console.log('Server up')
  sequelize.authenticate().then(() => {
    console.log('DB Connected')
  })
})
