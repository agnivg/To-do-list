const express = require('express')
const bcrypt = require('bcryptjs')
const { loginUser, signupUser } = require('../controllers/auth.controller')

const {
    userRegister,
    userLogin,
    validate,
} = require('../validations/user.validator')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Auth route')
})

// router.post('/register', userRegister, validate, (req, res) => {
//     const { error } = user.validate(req.body)

//     if (error) {
//         return res.status(400).send({
//             msg: error.details[0].message,
//         })
//     }

//     const { username, email, password } = req.body

//     const user = {
//         username,
//         email,
//         password,
//     }

//     if (!username) {
//         return res.status(400).send({
//             msg: 'username should not be empty',
//         })
//     }

//     if (!email || !validator.validate(email)) {
//         return res.status(400).send({
//             msg: 'Please enter valid email id',
//         })
//     }
// })

router.post('/register', userRegister, validate, signupUser)
// router.post('/register', signupUser)

module.exports = router
