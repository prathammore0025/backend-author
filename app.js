const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authorRoutes = require("./routes/authorRoutes");

dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json());

// Routes
app.use(authorRoutes);

module.exports = app;
