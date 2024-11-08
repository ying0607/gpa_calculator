const express = require("express");
const { createTerm, getTermGPA } = require("../controllers/gpaController");

const router = express.Router();

router.post("/terms", createTerm);
router.get("/terms/:id/gpa", getTermGPA);

module.exports = router;