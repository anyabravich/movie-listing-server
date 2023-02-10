import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().exec();
    res.status(200).json(movies);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Не удалось получить фильмы",
    });
  }
};

export const getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    Movie.findOneAndUpdate(
      {
        _id: movieId,
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            msg: "Не удалось получить фильм",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Фильм не найден",
          });
        }

        res.json(doc);
      }
    );
  } catch (err) {
    res.status(500).json({
      msg: "Не удалось получить фильм",
    });
  }
};

export const create = async (req, res) => {
  try {
    const movie = new Movie({
      name: req.body.name,
      text: req.body.text,
      img: req.body.img,
      category: req.body.category,
      genre: req.body.genre,
      rating: req.body.rating,
    });

    const film = await movie.save();
    res.json(film);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Не удалось добавить фильм",
    });
  }
};

export const update = async (req, res) => {
  try {
    const movieId = req.params.id;
    await Movie.updateOne(
      {
        _id: movieId,
      },
      {
        name: req.body.name,
        text: req.body.text,
        year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Не удалось обновить статью",
    });
  }
};
