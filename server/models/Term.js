const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  score: Number,
  credits: Number,
  scale: { type: Number, default: 4.0 },
});

const TermSchema = new mongoose.Schema({
  name: String,
  courses: [CourseSchema],
});

module.exports = mongoose.model("Term", TermSchema);