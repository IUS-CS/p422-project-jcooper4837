const Game = require('../models/game');

module.exports = {
    all: function (req, res) {
        Game.find().exec((err, games) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(games);
        });
    },
    details: function (req, res) {
        const game = req.params.game;
        Game.findOne().byGame(game).exec((err, game) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(game);
        });
    }
};