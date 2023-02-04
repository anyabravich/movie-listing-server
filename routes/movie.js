const router = require("express").Router();
const Movie = require("../models/Movie");

router.get("/:id", async (req, res) => {
  try {
    const id = await Movie.findById(req.params.id).exec();
    res.status(200).json(id);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

module.exports = router;
