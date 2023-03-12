const dotenv = require("dotenv");
const mongoose = require("mongoose");
const {
  BadgeSeeder: { seedBadges },
} = require("../seeders");

// dotenv.config({ path: './env/.env' })
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", true);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = () => {
  mongoose
    .connect(MONGO_URI, options)
    .then(() => console.log("Database connected"))
    .then(seedBadges())
    .catch((err) => console.log(err));
};

module.exports = connectDB;;
