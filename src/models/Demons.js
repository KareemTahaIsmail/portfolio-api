const mongoose = require("mongoose");

const demonSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

const Demon = mongoose.model("demons", demonSchema);

module.exports = Demon;
