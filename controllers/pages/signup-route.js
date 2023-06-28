const router = require('express').Router()

// Render signup screen
router.get('/', async (req, res) => {
    res.render('signup', {
        signedIn: req.session.loggedIn
    })
})

module.exports = router