const { body, validationResult } = require('express-validator')

const userRegisterValidation = [
    body('username', 'Username is Required')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long'),
    body('email', 'Email is Required')
        .isEmail()
        .withMessage('Email is not valid')
        .normalizeEmail(),
    body('password', 'Password is Required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    body('confirm_password', 'Confirm Password is Required').custom(
        (value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password')
            }
            return true
        }
    ),
]

const userLoginValidation = [
    body('username')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
]

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = {
    userRegisterValidation,
    userLoginValidation,
    validate,
}
