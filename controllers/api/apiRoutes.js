const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        res.status(200).json({message: "It Works!"})
    } catch (err) {
        res.status(500).json
    }
})


module.exports = router