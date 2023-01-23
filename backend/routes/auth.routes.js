const express = require('express')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const {
    loginUser,
    signupUser,
    logoutUser,
    secureUser,
    insecureUser,
    checkCurrentUser,
} = require('../controllers/auth.controller')

const {
    userRegisterValidation,
    userLoginValidation,
    validate,
} = require('../validations/user.validator')

const router = express.Router()

router.use(passport.initialize())
router.use(passport.session())

router.get('/', (req, res) => {
    res.send('Auth route')
})

router.post('/register', userRegisterValidation, validate, signupUser)
router.post('/login', userLoginValidation, validate, loginUser)
router.post('/logout', logoutUser)
router.post('/secure', secureUser)
router.post('/insecure', insecureUser)
// router.get('/checkUser', checkCurrentUser)

module.exports = router
