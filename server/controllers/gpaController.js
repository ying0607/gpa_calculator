const Term = require("../models/Term");
const { calculateTermGPA } = require("../utils/gpaConversion");

exports.createTerm = async (req, res) => {
  const { name, courses } = req.body;
  const term = new Term({ name, courses });
  await term.save();
  res.status(201).json(term);
};

exports.getTermGPA = async (req, res) => {
  const term = await Term.findById(req.params.id);
  if (!term) return res.status(404).send("Term not found");

  const gpa = calculateTermGPA(term.courses, term.courses[0].scale);
  res.json({ term, gpa });
};