const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { User } = require("../models");

// Local Strategies
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      bcrypt.compare(password, user.password, function (err, res) {
        if (err) {
          return done(err);
        }
        if (res === false) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  })
);

exports.signupUser = async function (req, res) {
  const { username, email, password, confirm_password } = req.body;
  try {
    let user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (user) return res.json({ err: "Username or Email Already Exist" });
    if (password !== confirm_password) {
      return res.json({
        err: "Password does not match with Confirm Password",
      });
    }

    let hashed_password = await bcrypt.hash(password, 10);

    user = await {
      username: username,
      email: email,
      password: hashed_password,
    };
    let row = await new User(user);
    await row.save();
    await req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      // res.redirect('/')
      return res.json({
        msg: "User Created Successfully",
        user: user,
      });
    });
  } catch (err) {
    return res.json({ err: err });
  }
};

exports.loginUser = passport.authenticate("local", {
  successRedirect: "/api/auth/secure",
  failureRedirect: "/api/auth/insecure",
  failureFlash: true,
});

exports.logoutUser = async function (req, res) {
  await req.session.destroy();
  await req.logout(() => {
    res.redirect("/api/auth/login");
  });
};

exports.secureUser = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  }
  return res.json({ msg: "You are not authenticated" });
};

exports.insecureUser = (req, res) => {
  res.json({
    msg: "Login Page, Login Failed",
  });
};

exports.checkCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    return res.json({ user: user });
  }
  return res.json({ user: null });
};
