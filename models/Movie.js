import mongoose from "mongoose";

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
  text: {
    type: String,
    require: true,
  },
});

export default mongoose.model("movie", movieSchema);
