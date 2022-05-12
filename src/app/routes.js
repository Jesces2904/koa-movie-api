 /**
 * Routes file
 * This file describes any external endpoint of our application, calling their respective controllers.
 * 
 * @module router
 */

'use strict'

import Router from 'koa-router';
import { getAllMovies, findMovie, findMovieAndUpdatePlot } from './controllers';

const router = new Router();

router.get('/', getAllMovies);
router.get('/search', findMovie);
router.post('/update-plot', findMovieAndUpdatePlot);


export default router
