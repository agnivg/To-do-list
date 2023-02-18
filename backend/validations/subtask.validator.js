const { body, validationResult } = require('express-validator')

const subtaskCreateValidation = [
    body('description')
        .not()
        .isEmpty()
        .withMessage('Description is required')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    body('deadline', 'Deadline is Required')
        .isDate()
        .withMessage('Deadline must be a valid date')
        .isAfter()
        .withMessage('Deadline must be a future date'),
    body('status').isEmpty().withMessage('Status is restricted in create'),
    body('user').not().isEmpty().withMessage('User is required'),
    body('task').not().isEmpty().withMessage('Task is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    },
]

const subtaskUpdateValidation = [
    body('description')
        .not()
        .isEmpty()
        .withMessage('Description is required')
        .isLength({ min: 3 })
        .withMessage('Description must be at least 3 characters long'),
    body('deadline', 'Deadline is Required')
        .isDate()
        .withMessage('Deadline must be a valid date')
        .isAfter()
        .withMessage('Deadline must be a future date'),
    body('user').not().isEmpty().withMessage('User is required'),
    body('task').not().isEmpty().withMessage('Task is required'),
    body('status').isEmpty().withMessage('Status is restricted in update'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
    },
]

module.exports = {
    subtaskCreateValidation,
    subtaskUpdateValidation,
}
