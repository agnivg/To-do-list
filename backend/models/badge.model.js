const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BadgeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
})

module.exports = Badge = mongoose.model('badges', BadgeSchema)
