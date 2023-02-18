const express = require('express')
const router = express.Router()
const {
    SubtaskController: {
        createSubtask,
        getSubtasks,
        getSubtask,
        updateSubtask,
        deleteSubtask,
        updateSubtaskStatus,
    },
} = require('../controllers')
const {
    SubtaskValidator: { subtaskCreateValidation, subtaskUpdateValidation },
} = require('../validations')
const {
    AuthMiddleware: { isLoggedIn },
    SubtaskMiddleware: { isTaskTypeTeam, isValidUser },
} = require('../middleware')

router.use(isLoggedIn)

router.post(
    '/',
    subtaskCreateValidation,
    isValidUser,
    isTaskTypeTeam,
    createSubtask
)
router.put(
    '/:id',
    subtaskUpdateValidation,
    isValidUser,
    isTaskTypeTeam,
    updateSubtask
)
router.delete('/:id', isValidUser, deleteSubtask)
router.get('/', getSubtasks)
router.get('/:id', isValidUser, getSubtask)
router.get('/status/:id', isValidUser, updateSubtaskStatus)

module.exports = router
