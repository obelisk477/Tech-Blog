const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('dashboard')
})

router.get('/new', async (req, res) => {
    res.render('')
})

router.get('/edit/:id', async (req, res) => {
    res.render('')
})

module.exports = router