const router = require('express').Router()
const passport = require('passport')

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.status(201).json({
      message: 'Signup Successful',
      user: req.user,
    })
  }
)

module.exports = router
