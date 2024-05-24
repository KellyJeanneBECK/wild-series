const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Export
module.exports = router;
