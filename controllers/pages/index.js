const router = require('express').Router()

const dashboardRoutes = require('./dashboard-routes')
const homeRoutes = require('./home-routes')
const loginRoutes = require('./home-routes')

router.use('/dashboard', dashboardRoutes)
router.use('/', homeRoutes)
router.use('/login', loginRoutes)

module.exports = router