const router = require('express').Router()
const { Job } = require('../db/models')

router.param('id', async (req, res, next) => {
  const job = await Job.findByPk(req.params.id)
  if (job) {
    req.job = job
    return next()
  } else {
    res.status(404).send()
  }
})

router.get('/', async (req, res) => {
  const jobs = await Job.findAll()
  res.json(jobs)
})

router.post('/', async (req, res) => {
  const { name } = req.body
  const newJob = await Job.findOrCreate({
    where: { name },
  })
  const msg = newJob[1] ? 'Job Created' : 'Job Exists'
  res.json({ msg, job: newJob[0] })
})

router.get('/:id', async (req, res) => {
  res.json(req.job)
})

router.put('/:id', async (req, res) => {
  await Job.update(req.body, {
    where: { id: req.params.id },
  })
  const job = await Job.findByPk(req.params.id)
  res.json(job)
})

module.exports = router
