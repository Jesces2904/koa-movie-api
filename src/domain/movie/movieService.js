/**
 * Movie service.
 * This file handles all the business logic of Movies.
 *
 * @module Movies
 */

import { movieRepository } from "./movieRepository";
import { Service } from "../core/service";

class MovieService extends Service {
  constructor() {
    super();
    this.movieRepository = movieRepository;
  }

  async getAllMovies(page, pageSize) {
    let result = {};
    result.data = await this.movieRepository.getAllMovies(page, pageSize);
    result.status = result.data ? 200 : 500;
    return result;
  }

  async searchMovie(title, page) {
    let result = {};
    result.data = await this.movieRepository.searchMovie(title, page);
    console.log(result);
    result.status = result.data ? 200 : 500;
    return result;
  }

  async findMovieAndUpdatePlot(title, find, replace) {
    let result = {};
    console.log(title, find, replace)
    result.data = await this.movieRepository.findAndModifyMovie(title, find, replace);
    console.log(result);
    result.status = result.data ? 200 : 500;
    return result;
  }
}

export const movieService = new MovieService();
