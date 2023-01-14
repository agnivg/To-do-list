require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true, credentials: true }))

app.get('/', (req, res) => res.send('Server up and running'))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
