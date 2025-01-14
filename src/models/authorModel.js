const mongoose = require("mongoose");

// Define the schema for an author
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
});

// Create the Author model based on the schema
const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
