const { Subtask } = require('../models')

exports.createSubtask = async (req, res) => {
    const { description, user, task } = req.body
    try {
        let subtask = {
            description: description,
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
    const { description, user, task, status } = req.body
    const { id } = req.params
    try {
        let subtask = {
            description: description,
            user: user,
            task: task,
            status: status,
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
        let rows = await Subtask.find({})

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
        let row = await Subtask.findById(id)
        let user = req.user

        row.status = !row.status

        user.points += row.status ? 2 : -2

        await row.save()
        await user.save()

        return res.json({ msg: 'Subtask Status Updated Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}
