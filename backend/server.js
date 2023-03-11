const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const connectDB = require("./config/db");

const app = express();

// Load env vars
// dotenv.config({ path: './env/.env' })
dotenv.config();

const PORT = process.env.PORT || 1337;

// DB Connection
connectDB();

// Route Imports
const {
  AuthRoutes,
  TaskRoutes,
  SubtaskRoutes,
  BadgeRoutes,
} = require("./routes");

// Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(
  session({
    secret: "jhdlskajdkljaslkdjlkasjdalksjddlkjasdlkjasdkjalwkdjalksjdlkajsd",
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
      uri: process.env.MONGO_URI,
      collection: "sessions",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serialize and Deserialize User
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// Routes
app.get("/", (req, res) => res.send("Server up and running"));

// Route middlewares
app.use("/api/auth", AuthRoutes);
app.use("/api/task", TaskRoutes);
app.use("/api/subtask", SubtaskRoutes);
app.use("/api/badge", BadgeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
