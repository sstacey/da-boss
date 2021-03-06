const router = require('express').Router()
const { User, Job } = require('../db/models')
const bcrypt = require('bcrypt')

router.param('id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: Job,
    })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(404).send()
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

// router.post('/', async (req, res) => {
//   const { name, email, password } = req.body
//   try {
//     const newUser = await User.create({
//       name,
//       email,
//       password: await bcrypt.hash(password, 10),
//     })
//     res.json({
//       user: { newUser },
//     })
//   } catch (e) {
//     res.status(500).json({ error: e })
//   }
// })

router.get('/:id', async (req, res) => {
  res.json({ user: req.user })
})

router.post('/:id/jobs', async (req, res) => {
  const { jobId } = req.body
  const job = await Job.findByPk(jobId)
  await req.user.addJob(job)
  res.json(await req.user.getJobs())
})

module.exports = router
