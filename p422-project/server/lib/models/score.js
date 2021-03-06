const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: String,
    platform: String,
    proof: String,
    link: String,
    comment: String
});

ScoreSchema.query.byGameAndLevel = function(game, level) {
    return this.where({game: game, level: level});
}

ScoreSchema.query.byUser = function(user) {
    return this.where({user: user});
}

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;