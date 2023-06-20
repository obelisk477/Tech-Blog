const router = require('express').Router()

router.get('/', async (req, res) => {
    try{
        res.status(200).json({message: "Post Routes!"})
    } catch (err) {
        res.status(500).json
    }
})


module.exports = router

// get single post info to render for click on single post
// get all posts from all users
// get *my* posts (for signed in user)
// create new post in dashboard
// update current post
// delete current post
