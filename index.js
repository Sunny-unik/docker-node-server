const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/health", (req, res) => {
  res.status(200).send("All good");
});

app.listen(port, () => console.log("Server start on http://localhost:" + port));
