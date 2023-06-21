const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        res.status(200).json({message: "Comment Routes!"})
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router


// create new comment
// get all comments for a single post