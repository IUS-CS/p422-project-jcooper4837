const express = require('express');
const scores = require('./controllers/scores');
const levels = require('./controllers/levels');
const games = require('./controllers/games')

let routes = express.Router();

routes.route('/games')
    .get(games.all)

routes.route('/:game/')
    .get(levels.all)

routes.route('/:game/:level')
    .get(scores.all)

routes.route('/')

module.exports = routes;
