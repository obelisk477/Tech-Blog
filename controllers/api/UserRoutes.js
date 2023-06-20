const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

router.get('/', async (req, res) => {
    try{
        res.status(200).json({message: "User Routes!"})
    } catch (err) {
        res.status(500).json
    }
})



router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        newUser.password = await bcrypt.hash(req.body.password, 10)
        const userData = await User.create(newUser)
        console.log(userData)
        res.status(200).json(userData)

    } catch (err) {
        console.log("bad request")
        res.status(400).json(err);
    }

})


module.exports = router

// create new user
// get user for authenticating login
