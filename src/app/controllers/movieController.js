/**
 * Movie controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module Movie controller.
 */

"use strict";
import { movieService } from "../../domain/movie/movieService";

const handleResponse = async (ctx, callback) => {
  let { status, data } = await callback;
  ctx.status = status;
  ctx.body = data ? data : { error: "Internal server error" };
};

export const findMovie = async (ctx, next) => {
  const { title, page } = ctx.query;
  await handleResponse(ctx, movieService.searchMovie(title, page));
};

export const getAllMovies = async (ctx, next) => {
  const { page, pagesize } = ctx.header;
  await handleResponse(ctx, movieService.getAllMovies(parseInt(page), pagesize));
};

export const findMovieAndUpdatePlot = async (ctx, next) => {
  const { movie, find, replace } = ctx.request.body;
  await handleResponse(ctx, movieService.findMovieAndUpdatePlot(movie, find, replace));
};