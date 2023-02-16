const express = require('express')
const router = express.Router()

const {
    BadgeController: { purchaseBadge },
} = require('../controllers')

const {
    AuthMiddleware: { isLoggedIn },
} = require('../middleware')

router.use(isLoggedIn)

router.post('/purchase', purchaseBadge)

module.exports = router
