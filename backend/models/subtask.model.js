const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Task = require('./task.model')
const User = require('./user.model')

const SubtaskSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = Subtask = mongoose.model('subtasks', SubtaskSchema)
