const express = require("express");
const { getAuthors, getAuthorById } = require("../controllers/authorController");

const router = express.Router();

// Routes to fetch authors
router.get("/", getAuthors);

// Route to fetch a single author by ID
router.get("/:id", getAuthorById);

module.exports = router;
