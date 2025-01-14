const express = require("express");
const { getAllAuthors, getAuthorById } = require("../controllers/authorController");

const router = express.Router();

router.get("/api/authors", getAllAuthors);
router.get("/api/authors/:id", getAuthorById);

module.exports = router;
