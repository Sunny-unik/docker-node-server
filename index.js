const express = require("express");
const app = express();
const categories = require("./db/categories.json");
const menuItems = require("./db/menuItems.json");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.CORS_ALLOWED_ORIGIN || "https://sunny-unik.github.io",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello world. :-)" });
});

app.get("/categories", (req, res) => res.json(categories));

app.get("/menu-items", (req, res) => {
  const { category } = req.query;
  if (!category) {
    const error = {
      message: "Category field is required",
      instruction: "Pass category in query params",
    };
    res.status(400).json(error);
  }
  const selectedMenuItems = menuItems.filter((e) => e.category === category);
  const selectedCategory = categories.find((e) => e.short_name === category);
  res.json({ menu_items: selectedMenuItems, category: selectedCategory });
});

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, () => console.log("Server start on http://localhost:" + port));
