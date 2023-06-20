const router = require('express').Router()

const userRoutes = require('./UserRoutes')
const postRoutes = require('./PostRoutes')
const commentRoutes = require('./CommentRoutes')

router.use('/users', userRoutes)
router.use('/posts', postRoutes)
router.use('/comments', commentRoutes)

module.exports = router





