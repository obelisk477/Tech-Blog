const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('signup', {
        signedIn: req.session.loggedIn
    })
})

module.exports = router