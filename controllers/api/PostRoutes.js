const router = require('express').Router()
const { User, Post, Comment } = require('../../models')


// Create a post
router.post('/', async (req, res) => {
    try{
        console.log('\nCreating Post...\n')

        console.log(req.body)

        const singlePost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id
        })

        console.log(singlePost)

        res.status(200).json(singlePost)

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all posts
router.get('/', async (req, res) => {
    try{
        const allPosts = await Post.findAll({
            include: [{model: User}, {model: Comment}]
        })
        console.log(allPosts)
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get post by id

router.get('/:id', async (req, res) => {
    try{
        const singlePost = await Post.findByPk(req.params.id, {
            include: [{model: User}, {model: Comment}]
        })

        if (!singlePost) {
            res.status(404).json({message: 'Post not found!'})
            return
        }

        console.log(singlePost)
        res.status(200).json(singlePost)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/userPosts', async (req, res) => {
    try{
        const allPosts = await Post.findAll({
            where: {
                user_id: req.body.user_id
            },
            include: [{model: User}, {model: Comment}]
        })
        console.log(allPosts)
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const singlePost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        if (!singlePost) {
            res.status(404).json({message: 'No post found with this id!'})
        }

        res.status(200).json({message: "Post successfully updated!"})

    } catch (err) {
        res.status(500).json(err)
    }
})


router.delete('/:id', async (req, res) => {
    try{
        const postDeleteData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!postDeleteData) {
            res.status(404).json({message: 'No post found with this id!'})
        }

        res.status(200).json({message: "Post successfully deleted!"})

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router

// delete current post
