const express = require("express");
const router = express.Router();
const Project = require("../models/Projects");
// Create a new project
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects) {
      console.log("-- Info: projects table empty!");
      res.send({ "Error": "projects table empty!" });
    }
    res.send(projects);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a project by ID
router.patch("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a project by ID
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
