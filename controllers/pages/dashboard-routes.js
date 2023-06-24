const router = require('express').Router()
const auth = require('../../utils/withAuth')

router.get('/', auth, async (req, res) => {
    res.render('dashboard')
})

router.get('/new', auth, async (req, res) => {
    res.render('')
})

router.get('/edit/:id', auth, async (req, res) => {
    res.render('')
})

module.exports = router