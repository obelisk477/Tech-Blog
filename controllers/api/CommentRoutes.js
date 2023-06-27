const router = require('express').Router()
const { User, Post, Comment } = require('../../models')




router.post('/', async (req, res) => {

    try{
        const dbUserData = await User.findOne({
            where: {
                username: req.session.username
            }
        })

        console.log(req.body)


        const newComment = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: dbUserData.dataValues.id
        })

        if (!newComment) {
            res.status(404).json({message: "Comments not found"})
        }

        console.log(newComment)

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

        console.log(allComments)
        res.status(200).json(allComments)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router


// create new comment
// get all comments for a single post