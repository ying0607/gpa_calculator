const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const gpaRoutes = require("./routes/gpaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", gpaRoutes);

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));