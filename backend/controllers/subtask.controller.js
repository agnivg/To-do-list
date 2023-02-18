const { User, Subtask } = require('../models')

exports.createSubtask = async (req, res) => {
    const { description, deadline, user, task } = req.body
    try {
        let subtask = {
            description: description,
            deadline: deadline,
            user: user,
            task: task,
        }

        let row = new Subtask(subtask)

        await row.save()

        return res.json({ msg: 'Subtask Created Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.updateSubtask = async (req, res) => {
    const { description, deadline, user, task, status } = req.body
    const { id } = req.params
    try {
        let subtask = {
            description: description,
            deadline: deadline,
            user: user,
            task: task,
        }

        await Subtask.findByIdAndUpdate(id, subtask)

        return res.json({ msg: 'Subtask Updated Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.deleteSubtask = async (req, res) => {
    const { id } = req.params
    try {
        await Subtask.findByIdAndDelete(id)

        return res.json({ msg: 'Subtask Deleted Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.getSubtasks = async (req, res) => {
    try {
        let rows = await Subtask.find({ user: req.user._id })

        return res.json({ rows: rows })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.getSubtask = async (req, res) => {
    const { id } = req.params
    try {
        let row = await Subtask.findById(id)

        return res.json({ row: row })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.updateSubtaskStatus = async (req, res) => {
    const { id } = req.params
    try {
        let subtask = await Subtask.findById(id)
        let user = await User.findById(req.user._id)

        subtask.status = !subtask.status

        user.points += subtask.status ? 2 : -2

        await subtask.save()
        await user.save()

        return res.json({ msg: 'Subtask Status Updated Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}
