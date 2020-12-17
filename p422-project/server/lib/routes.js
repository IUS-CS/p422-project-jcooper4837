const express = require('express');
const scores = require('./controllers/scores');
const levels = require('./controllers/levels');
const games = require('./controllers/games')

let routes = express.Router();

routes.route('/games')
    .get(games.all)

routes.route('/:game/')
    .get(levels.all)

routes.route('/:game/2')
    .get(games.details)

routes.route('/:game/:level')
    .get(scores.all)
    .post(scores.submit)

routes.route('/:game/:level/2')
    .get(levels.details)

routes.route('/:user/user/3')
    .get(scores.user)

routes.route('/:user/user/4')
    .get(levels.full)

routes.route('/')

module.exports = routes;
