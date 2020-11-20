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
    proof: String,
    comment: String
});

ScoreSchema.query.byGameAndLevel = function(game, level) {
    return this.where({game: game, level: level});
}

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;