const { json } = require("express");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  images: Object,
  description: String,
  technologies_used: Array,
  source_code_link: String,
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
