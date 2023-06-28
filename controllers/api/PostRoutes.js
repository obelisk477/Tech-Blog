const router = require('express').Router()
const { User, Post, Comment } = require('../../models')



// Create a post
router.post('/', async (req, res) => {

    // Get user id by username to add to Post.create call 
    const dbUserData = await User.findOne({
        where: {
            username: req.session.username
        }
    })

    let thisUserId = dbUserData.dataValues.id

    let date =  new Date()
    today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    try{
        console.log('\nCreating Post...\n')

        const singlePost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: thisUserId,
            created_date: today
        })

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

        res.status(200).json(singlePost)

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all posts for specific user to be included in dashboard view
router.post('/userPosts', async (req, res) => {
    try{
        const allPosts = await Post.findAll({
            where: {
                user_id: req.body.user_id
            },
            include: [{model: User}, {model: Comment}]
        })
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Update post by post id
router.put('/:id', async (req, res) => {
    console.log(req.body)
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

// Delete post by id
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