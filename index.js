const app = require('./app')
const { sequelize } = require('./db/models')


app.listen(3000, () => {
  console.log('Server up')
  sequelize.authenticate().then(() => {
    console.log('DB Connected')
  })
})
