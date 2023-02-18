const express = require('express')
const router = express.Router()
const {
    TaskController: {
        createTask,
        updateTask,
        deleteTask,
        getTask,
        getTasks,
        updateTaskStatus,
    },
} = require('../controllers')
const {
    TaskValidator: { taskCreateValidation, taskUpdateValidation },
} = require('../validations')
const {
    AuthMiddleware: { isLoggedIn },
    TaskMiddleware: { isValidUser },
} = require('../middleware')

router.use(isLoggedIn)

router.post('/', taskCreateValidation, createTask)
router.put('/:id', taskUpdateValidation, isValidUser, updateTask)
router.delete('/:id', isValidUser, deleteTask)
router.get('/:id', isValidUser, getTask)
router.get('/', getTasks)
router.put('/status/:id', isValidUser, updateTaskStatus)

module.exports = router
