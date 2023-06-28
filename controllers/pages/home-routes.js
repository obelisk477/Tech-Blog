const router = require('express').Router()
const auth = require('../../utils/withAuth')
const { Post, User, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            order: 
                [['id','DESC']]
            

        })   
        const posts = postData.map((post) =>
            post.get({plain: true})
        )
        res.render('home', {
            posts,
            signedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/view/:id', async (req, res) => {
    try{
        let singlePost = await Post.findByPk(req.params.id, {
            include: [{model: User}, {model: Comment}]
        })

        if (!singlePost) {
            res.status(404).json({message: 'Post not found!'})
            return
        }
        console.log(singlePost)
        singlePost = singlePost.get({plain: true})

        console.log(singlePost)

        res.render('viewpost', {
            singlePost,
            signedIn: req.session.loggedIn,
            comments: singlePost.comments
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router