const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // For handling cross-origin requests
const authorRoutes = require("./routes/authorRoutes");

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for frontend integration
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// API Routes
app.use("/api/authors", authorRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).send("Backend is running!");
});

// 404 Error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
