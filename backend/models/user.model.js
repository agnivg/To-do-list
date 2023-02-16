const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Badge = require('./badge.model')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        default: 0,
    },
    badges: {
        type: [Schema.Types.ObjectId],
        ref: 'Badge',
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = User = mongoose.model('users', UserSchema)
