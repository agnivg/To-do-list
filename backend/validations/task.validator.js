const { body, validationResult } = require('express-validator')

const taskCreateValidation = [
    body('title', 'Title is Required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),
    body('description', 'Description is Required')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    body('type', 'Type is Required')
        .isIn(['personal', 'professional', 'team'])
        .withMessage('Type must be one of personal, professional or team'),
    body('deadline', 'Deadline is Required')
        .isDate()
        .withMessage('Deadline must be a valid date')
        .isAfter()
        .withMessage('Deadline must be a future date'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    },
]

const taskUpdateValidation = [
    body('title', 'Title is Required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),
    body('description', 'Description is Required')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    body('type', 'Type is Required')
        .isIn(['personal', 'professional', 'team'])
        .withMessage('Type must be one of personal, professional or team'),
    body('deadline', 'Deadline is Required')
        .isDate()
        .withMessage('Deadline must be a valid date')
        .isAfter()
        .withMessage('Deadline must be a future date'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    },
]

module.exports = {
    taskCreateValidation,
    taskUpdateValidation,
}
