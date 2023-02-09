const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  genre: {
    type: [String],
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

// movieSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// movieSchema.set("toJSON", {
//   virtuals: true,
// });

module.exports = mongoose.model("movie", movieSchema);
