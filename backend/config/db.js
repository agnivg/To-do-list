const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './env/.env' })

const MONGO_URI = process.env.MONGO_URI

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
