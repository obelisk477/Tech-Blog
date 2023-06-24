const router = require('express').Router()

const dashboardRoutes = require('./dashboard-routes')
const homeRoutes = require('./home-routes')
const loginRoutes = require('./login-route')
const signUpRoutes = require('./signup-route')

router.use('/dashboard', dashboardRoutes)
router.use('/', homeRoutes)
router.use('/login', loginRoutes)
router.use('/signup', signUpRoutes)

module.exports = router