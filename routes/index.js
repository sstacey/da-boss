const users = require('./user-routes')
const jobs = require('./job')
const auth = require('./auth')
const passport = require('passport')

module.exports = (app) => {
  app.use('/', auth)
  app.use('/users', passport.authenticate('jwt', { session: false }), users)
  app.use('/jobs', passport.authenticate('jwt', { session: false }), jobs)
}
