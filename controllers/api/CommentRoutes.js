const router = require('express').Router()
const { Comment } = require('../../models')

// Create new comment
router.post('/', async (req, res) => {
    try{    
        // Get today date in format suiatble for UI
        let date =  new Date()
        today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

        const newComment = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            poster_name: req.session.username
        })

        if (!newComment) {
            res.status(404).json({message: "Could not create comment"})
        }

        res.status(200).json(newComment)

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

        res.status(200).json(allComments)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router