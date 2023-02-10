import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import dbConnect from "./dbConnect.js";
import movieRoutes from "./routes/movies.js";
import {
  create,
  getMovie,
  getMovies,
  update,
} from "./controllers/MovieController.js";

const app = express();

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

app.get("/api/movies", getMovies);
app.get("/api/movies/:id", getMovie);
app.post("/api/movies", create);
app.patch("/api/movies/:id", update);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
