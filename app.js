const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const { sequelize, User } = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/users', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body
  // const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const newUser = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    })
    res.json({
      user: { newUser },
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
})

app.get('/users/:id', async (req, res) => {
  const user = await User.findOne({ id: req.params.id })
  res.json(user)
})

app.listen(3000, () => {
  console.log('Server up')
  sequelize.authenticate().then(() => {
    console.log('DB Connected')
  })
})
