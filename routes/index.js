const users = require('./user-routes')
const jobs = require('./job')

module.exports = (app) => {
  // app.use('/', auth),
  app.use('/users', users)
  app.use('/jobs', jobs)
}
