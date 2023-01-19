require('dotenv').config()
const mongoose = require('mongoose')

const { MONGO_URI } = process.env

mongoose.set('strictQuery', true)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDB = () => {
    mongoose
        .connect(MONGO_URI, options)
        .then(() => console.log('Database connected'))
        .catch((err) => console.log(err))
}

module.exports = connectDB
