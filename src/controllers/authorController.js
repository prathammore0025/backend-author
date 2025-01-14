const Author = require("../models/authorModel");

// Get all authors
const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch authors" });
  }
};

// Get an author by ID
const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the author" });
  }
};

module.exports = { getAuthors, getAuthorById };
