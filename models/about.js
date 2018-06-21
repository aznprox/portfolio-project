const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  title: { type: String, required: true },
  summary: String,
  image: String
});

const About = mongoose.model("About", bookSchema);

module.exports = About;
