const router = require('express').Router()
const { User, Post, Comment } = require('../../models')




router.post('/', async (req, res) => {
    try{
        const newPost = await Comment.create(req.body)

        if (!newPost) {
            res.status(404).json({message: "Comments not found"})
        }

        console.log(newPost)

        res.status(200).json(newPost)

    } catch (err) {
        res.status(500).json(err)
    }
})


// Get comments by post id in req.body
router.post('/postComments', async (req, res) => {
    try{
        const allComments = await Comment.findAll({
            where: {
                post_id: req.body.post_id
            }
        })

        if (!allComments) {
            res.status(404).json({message: "Comments not found"})
        }

        console.log(allComments)
        res.status(200).json(allComments)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router


// create new comment
// get all comments for a single post