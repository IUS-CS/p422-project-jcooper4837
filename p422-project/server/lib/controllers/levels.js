const Level = require('../models/level');

module.exports = {
    all: function (req, res) {
        const game = req.params.game;
        Level.find().byGame(game).exec((err, levels) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(levels);
        });
    },
    details: function (req, res) {
        const game = req.params.game;
        const level = req.params.level;
        Level.findOne().byGameAndLevel(game, level).exec((err, level) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(level);
        });
    }
};