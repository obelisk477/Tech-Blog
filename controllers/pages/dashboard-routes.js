const router = require('express').Router()
const auth = require('../../utils/withAuth')
const { User, Post, Comment } = require('../../models')
const sequelize = require('sequelize')

router.get('/', auth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                    where: {
                        username: req.session.username
                    }
                },
            ]
        })

        let posts = postData.map((post) =>
            post.get({plain: true})
        )

        res.render('dashboard', {
            posts
        })

    } catch (err) {
        res.status(500).json(err)
    }

    
})

router.get('/new', auth,  async (req, res) => {
    res.render('')
})

router.get('/edit/:id', auth,  async (req, res) => {

    let singlePost = await Post.findByPk(req.params.id, {
        include: [{model: User}, {model: Comment}]
    })

    if (!singlePost) {
        res.status(404).json({message: 'Post not found!'})
        return
    }

    singlePost = singlePost.get({plain: true})


    res.render('postedit', {singlePost})
})

module.exports = router