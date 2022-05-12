/**
 * Movie Schema
 * This file describes the Movie Model
 *
 * @module MovieSchema
 */

import mongoose from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

const MovieSchema = new mongoose.Schema({
  imdbID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  year: { type: Number, required: true },
  released: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  actors: { type: String, required: true },
  plot: { type: String, required: true },
  ratings: { type: Object, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

MovieSchema.plugin(mongoosePaginate);

export const MovieModel = mongoose.model("Movie", MovieSchema);

