const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

// Local Strategies
passport.use(
    new LocalStrategy(function verify(username, password, cb) {
        User.findOne({ username: username }, async (err, row) => {
            if (err) {
                return cb(err)
            }
            if (!row) {
                return cb(null, false, { message: 'User does not exist!' })
            }

            bcrypt.compare(
                password,
                row.hashed_password,
                function (err, result) {
                    if (err) {
                        return cb(err)
                    }
                    if (!result) {
                        return cb(null, false, {
                            message: 'Incorrect password!',
                        })
                    }
                    return cb(null, row)
                }
            )
        })
    })
)

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username })
    })
})

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})

exports.loginUser = passport.authenticate('local', {
    failureFlash: false,
    successRedirect: '/',
    failureRedirect: '/api/auth/login',
})

exports.logoutUser = async function (req, res) {
    await req.session.destroy()
    await req.logout(() => {
        res.redirect('/api/auth/login')
    })
}

exports.signupUser = async function (req, res) {
    const { username, email, password, confirm_password } = req.body
    try {
        let user = await User.findOne({
            $or: [{ username: username }, { email: email }],
        })
        if (user) return res.json({ err: 'Username or Email Already Exist' })
        if (password !== confirm_password) {
            return res.json({
                err: 'Password does not match with Confirm Password',
            })
        }

        let hashed_password = await bcrypt.hash(password, 10)

        user = await {
            username: username,
            email: email,
            password: hashed_password,
        }
        let row = await new User(user)
        await row.save()
        // await req.login(user, function (err) {
        //     if (err) {
        //         return next(err)
        //     }
        //     res.redirect('/')
        // })
        return res.json({
            msg: 'User Created Successfully',
            user: user,
        })
    } catch (err) {
        return res.json({ err: err })
    }
}
