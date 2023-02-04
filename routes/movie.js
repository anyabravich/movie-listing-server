const router = require("express").Router();
const Movie = require("../models/Movie");
const movies = require("../config/movies.json");

router.get("/:id", async (req, res) => {
  try {
    res.status(200).json(movies[req.params.id - 1]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

module.exports = router;
