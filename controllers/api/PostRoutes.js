const router = require('express').Router()
const { User, Post, Comment } = require('../../models')


router.post('/', async (req, res) => {
    try{
        console.log('\nCreating Post...\n')

        console.log(req.body)

        const singlePost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id
        })

        res.status(200).json(singlePost)

    } catch (err) {
        res.status(500).json
    }
})

router.get('/', async (req, res) => {
    try{
        const allPosts = await Post.findAll({
            include: [{model: User}, {model: Comment}]
        })
        console.log(allPosts)
        res.status(200).json(allPosts)
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
