const { Task, Subtask } = require('../models')

exports.isTaskTypeTeam = async (req, res, next) => {
    const { task } = req.body
    try {
        let row = await Task.findById(task)
        if (row.type === 'team') {
            next()
        } else {
            return res.json({ msg: 'This task is not a team task' })
        }
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.isValidUser = async (req, res, next) => {
    try {
        if (
            req.body.user &&
            req.user._id.toString() === req.body.user.toString()
        ) {
            next()
        } else if (req.params.id !== undefined) {
            let row = await Subtask.findById(req.params.id)
            if (!row) {
                return res.json({ msg: 'Subtask not found' })
            } else if (row.user.toString() === req.user._id.toString()) {
                next()
            } else {
                return res.json({ msg: 'Invalid user' })
            }
        } else {
            return res.json({ msg: 'Invalid user' })
        }
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}
