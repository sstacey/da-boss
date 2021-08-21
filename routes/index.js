const users = require('./user-routes')

module.exports = (app) => {
  // app.use('/', auth),
  app.use('/users', users)
}
