/**
 * Movies repository.
 * This module handle all requests with the Movies Collection in mongo databases.
 *
 * @module moviesRepository
 */

import axios from "axios";
import mongoose from "mongoose";
import { env } from "../../infra/env";
const Movie = mongoose.model("Movie");

const getMoviesFromomdbapi = async (title, page = 1) => {
  const movies = await Movie.findOne({ title }).exec();
  if (!movies) {
    const dataRes = await axios.get(
      `${env.URL_MOVIES_API_SEARCH}${title}&page=${page}`
    );
    const moviesApi = dataRes.data;
    if (moviesApi) {
      const newMovie = await Movie.create({
        imdbID: moviesApi.imdbID,
        title: moviesApi.Title,
        year: moviesApi.Year,
        released: moviesApi.Released,
        genre: moviesApi.Genre,
        director: moviesApi.Director,
        actors: moviesApi.Actors,
        plot: moviesApi.Plot,
        ratings: moviesApi.Ratings,
      });
      return newMovie;
    }
  } else {
    return movies;
  }
};

const getAllMoviesPaginate = async (page, pageSize) => {
  const query = {};
  const options = {
    lean: true,
    page: page,
    limit: pageSize,
  };
  return await Promise.all([Movie.paginate(query, options)]);
};

const findAndModifyMovie = async (title, find, replace) => {
  const dataREsult = await Movie.findOne({ title: { $regex: title } });
  dataREsult.plot = dataREsult.plot.replace(find, replace);
  return await Movie.findOneAndUpdate(
    { _id: dataREsult._id },
    { plot: dataREsult.plot },
    { new: true }
  );
};

export const movieRepository = {
  getAllMovies: async (page = 1, pageSize = 5, ctx) =>
    getAllMoviesPaginate(page, pageSize),
  searchMovie: async (title, page) => getMoviesFromomdbapi(title, page),
  findAndModifyMovie: async (title, find, replace) =>
    findAndModifyMovie(title, find, replace),
};
