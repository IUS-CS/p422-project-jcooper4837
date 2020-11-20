const mongoose = require('mongoose');

const LevelSchema = mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    isScore: {
        type: Boolean,
        required: true
    },
    isAscending: {
        type: Boolean,
        required: true
    }
});

LevelSchema.query.byGame = function(game) {
    return this.where({game: game});
}

LevelSchema.query.byGameAndLevel = function(game, level) {
    return this.where({game: game, name: level});
}

const Level = mongoose.model('Level', LevelSchema);

module.exports = Level;
