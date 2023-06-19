const router = require('express').Router()

router.get('/', async (req, res) => {
    res.status(200).json({message: "This is the root home route"})
})

module.exports = router