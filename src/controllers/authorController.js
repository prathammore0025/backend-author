const Author = require("../models/authorModel");

// Get all authors
const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find(); // Fetch authors from DB
    res.json(authors); // Return the authors in the response
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch authors" }); // Handle errors
  }
};

// Get an author by ID
const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id); // Find author by ID
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author); // Return the author in the response
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the author" }); // Handle errors
  }
};

module.exports = { getAuthors, getAuthorById };
