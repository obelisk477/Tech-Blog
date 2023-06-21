const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')


router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        newUser.password = await bcrypt.hash(req.body.password, 10)
        const userData = await User.create(newUser)
        res.status(200).json(userData)

    } catch (err) {
        console.log("bad request")
        res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.session)
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        if (!dbUserData) {
            res.status(400).json({message: 'Incorrect email or password. Please try again!'})
            return
        }

        const validPassword = await dbUserData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or password. Please try again!'})
            return
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(req.session)

            res.status(200).json({user: dbUserData, message: 'You are now logged in!'})
        })


    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router

// create new user
// get user for authenticating login
