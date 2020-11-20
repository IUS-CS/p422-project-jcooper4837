const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    platforms: [String],
    release: String
});

GameSchema.query.byGame = function(game) {
    return this.where({name: game});
}

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
