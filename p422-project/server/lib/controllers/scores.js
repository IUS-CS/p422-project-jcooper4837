const Score = require('../models/score');

module.exports = {
    all: function (req, res) {
        const game = req.params.game;
        const level = req.params.level;
        Score.find().byGameAndLevel(game, level).exec((err, scores) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(scores);
        });
    }
};