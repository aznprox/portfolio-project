const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  role: { type: String, required: true },
  tools: String,
  synopsis: String,
  timeframe: String,
  imageurl: String,
  github: String,
  heroku: String
});

const Project = mongoose.model("Project", bookSchema);

module.exports = Project;
