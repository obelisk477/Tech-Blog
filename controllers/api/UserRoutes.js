const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

// Create new user
router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        newUser.password = await bcrypt.hash(req.body.password, 10)
        const userData = await User.create(newUser)

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = req.body.username
            console.log(req.session)
            res.status(200).json({user: userData, message: 'You are now logged in!'})
        })

    } catch (err) {
        console.log("bad request")
        res.status(400).json(err);
    }
})

// Authenticate user login
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
            req.session.username = req.body.username
            res.status(200).json({user: dbUserData, message: 'You are now logged in!'})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Logout user
router.get('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.json({message: 'Successfully logged out'})
                res.status(204).end()
            })
        } else {
            res.json({message: 'You\'re not logged in'})
            res.status(404).end()
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router