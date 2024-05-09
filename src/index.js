const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projects");
const demonRoutes = require("./routes/demons");

const app = express();
const PORT = 3001;

const MONGO_DB_CONN_STR =
  "mongodb+srv://kareemtahaismail:KimoKluster@kluster.tv4knyr.mongodb.net/MyPortfolio?retryWrites=true&w=majority&appName=Kluster";

mongoose
  .connect(MONGO_DB_CONN_STR)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

app.use(express.json());

// Routes
app.use("/projects", projectRoutes);
app.use("/demons", demonRoutes);

app.listen(PORT, () => console.log("Running express server on port: " + PORT));
