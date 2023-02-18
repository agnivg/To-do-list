const express = require('express')
const passport = require('passport')
const {
    AuthController: {
        loginUser,
        signupUser,
        logoutUser,
        secureUser,
        insecureUser,
        checkCurrentUser,
    },
} = require('../controllers')
const {
    UserValidator: { userRegisterValidation, userLoginValidation, validate },
} = require('../validations')
const {
    AuthMiddleware: { isLoggedIn },
} = require('../middleware')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Auth route')
})
router.get('/login', (req, res) => {
    res.send('Login route')
})

router.post('/register', userRegisterValidation, validate, signupUser)
router.post('/login', userLoginValidation, validate, loginUser)
router.get('/logout', logoutUser)
router.get('/secure', secureUser)
router.get('/insecure', insecureUser)
router.get('/check', isLoggedIn, checkCurrentUser)

module.exports = router
