const express = require("express");
const router = express.Router();
const Demon = require("../models/Demons");

// Create a new demon
router.post("/", async (req, res) => {
  try {
    const demon = new Demon(req.body);
    await demon.save();
    res.status(201).send(demon);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all demons
router.get("/", async (req, res) => {
  try {
    const demons = await Demon.find();
    res.json(demons);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching demons");
  }
});

// Get a demon by ID
router.get("/:id", async (req, res) => {
  try {
    const demon = await Demon.findById(req.params.id);
    if (!demon) {
      return res.status(404).send();
    }
    res.send(demon);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a demon by ID
router.patch("/:id", async (req, res) => {
  try {
    const demon = await Demon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!demon) {
      return res.status(404).send();
    }
    res.send(demon);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a demon by ID
router.delete("/:id", async (req, res) => {
  try {
    const demon = await Demon.findByIdAndDelete(req.params.id);
    if (!demon) {
      return res.status(404).send();
    }
    res.send(demon);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;