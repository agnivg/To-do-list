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
