const Score = require('../models/score');

module.exports = {
    all: function (req, res) {
        const game = req.params.game;
        const level = req.params.level;
        //console.log(game + " " + level);
        Score.find().byGameAndLevel(game, level).exec((err, scores) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(scores);
        });
    },
    user: function (req, res) {
        const user = req.params.user;
        //console.log(user);
        Score.find().byUser(user).exec((err, scores) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            res.json(scores);
        })
    },
    submit: function (req, res) {
        const sub = new Score(req.body);
        sub.save()
            .then(() => {
                res.json({status: 'success'})
            })
            .catch(err => {
                res.status(400);
                res.json(err);
            });
    }
};