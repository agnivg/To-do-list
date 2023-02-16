const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')

const connectDB = require('./config/db')

const app = express()

// Load env vars
dotenv.config({ path: './env/.env' })

const PORT = process.env.PORT || 5000

// DB Connection
connectDB()

// Route Imports
const {
    AuthRoutes,
    TaskRoutes,
    SubtaskRoutes,
    BadgeRoutes,
} = require('./routes')

// Seeders
const {
    BadgeSeeder: { seedBadges },
} = require('./seeders')

seedBadges()

// Middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true, credentials: true }))
app.use(
    session({
        secret: 'SECRET',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 604800000 }, // 1 Week Session
    })
)
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.get('/', (req, res) => res.send('Server up and running'))

// Route middlewares
app.use('/api/auth', AuthRoutes)
app.use('/api/task', TaskRoutes)
app.use('/api/subtask', SubtaskRoutes)
app.use('/api/badge', BadgeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
