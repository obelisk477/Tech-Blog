const router = require('express').Router()

const apiRoutes = require('./apiRoutes')

router.use('/apiEndpoints', apiRoutes)

module.exports = router