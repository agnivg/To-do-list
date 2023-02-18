const { Task } = require('../models')

exports.isValidUser = async (req, res, next) => {
    const task = await Task.findById(req.params.id)
    if (!task) {
        return res.json({ err: 'Task not found' })
    } else if (req.user._id.toString() === task.user.toString()) {
        next()
    } else {
        return res.json({ err: 'Invalid User' })
    }
}
