require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authorRoutes = require("./routes/authorRoutes");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/authors", authorRoutes);

// Connect to Database and Start Server
const PORT = process.env.PORT || 8080;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection failed:", err));
