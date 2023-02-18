const { User, Task } = require('../models')

exports.createTask = async (req, res) => {
    const { title, description, type, deadline } = req.body
    const user = req.user
    try {
        let task = {
            title: title,
            description: description,
            type: type,
            deadline: deadline,
            user: user,
        }

        let row = new Task(task)

        await row.save()

        return res.json({ msg: 'Task Created Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.updateTask = async (req, res) => {
    const { title, description, type, deadline } = req.body
    const user = req.user
    try {
        let task = {
            title: title,
            description: description,
            type: type,
            deadline: deadline,
            user: user._id,
        }

        let row = await Task.findByIdAndUpdate(req.params.id, task)

        return res.json({ msg: 'Task Updated Successfully' })
    } catch (err) {
        return res.json({ err: err })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)

        return res.json({ msg: 'Task Deleted Successfully' })
    } catch (err) {
        return res.json({ err: err })
    }
}

exports.getTask = async (req, res) => {
    try {
        let row = await Task.findById(req.params.id)

        return res.json(row)
    } catch (err) {
        return res.json({ err: err })
    }
}

exports.getTasks = async (req, res) => {
    try {
        let rows = await Task.find({ user: req.user._id })

        return res.json(rows)
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}

exports.updateTaskStatus = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id)
        let user = await User.findById(req.user._id)
        task.status = !task.status

        if (task.type === 'personal' || task.type === 'professional') {
            user.points += task.status ? 5 : -5
        } else if (task.type === 'team') {
            user.points += task.status ? 10 : -10
        } else {
            return res.json({ err: 'Invalid Task Type' })
        }

        await task.save()
        await user.save()

        return res.json({ msg: 'Task Status Updated Successfully' })
    } catch (err) {
        console.log(err)
        return res.json({ err: err })
    }
}
