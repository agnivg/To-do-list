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
} = require('../middleware')

// router.use(isLoggedIn)

router.post('/create', taskCreateValidation, createTask)
router.put('/update/:id', taskUpdateValidation, updateTask)
router.delete('/delete/:id', deleteTask)
router.get('/get/:id', getTask)
router.get('/get', getTasks)
router.put('/:id', updateTaskStatus)

module.exports = router
