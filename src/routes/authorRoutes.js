const express = require("express");
const { getAuthors, getAuthorById } = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthors);
router.get("/:id", getAuthorById);

module.exports = router;
