const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('login', {
        signedIn: req.session.loggedIn
    })
})

module.exports = router