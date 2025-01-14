require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const authorRoutes = require("./routes/authorRoutes"); // Import author routes
const connectDB = require("./config/db"); // Import DB connection function

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data in requests

// Routes
app.use("/api/authors", authorRoutes); // API route for authors

// Connect to Database and Start Server
const PORT = process.env.PORT || 8081;
connectDB() // Connect to MongoDB
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`); // Start the server
    });
  })
  .catch((err) => console.error("Database connection failed:", err));
