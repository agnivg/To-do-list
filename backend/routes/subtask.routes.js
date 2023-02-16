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
    SubtaskMiddleware: { isTaskTypeTeam },
} = require('../middleware')

router.use(isLoggedIn)
router.use(isTaskTypeTeam)

router.post('/create', subtaskCreateValidation, createSubtask)
router.put('/update/:id', subtaskUpdateValidation, updateSubtask)
router.delete('/delete/:id', deleteSubtask)
router.get('/', getSubtasks)
router.get('/:id', getSubtask)
router.put('/:id', updateSubtaskStatus)

module.exports = router
