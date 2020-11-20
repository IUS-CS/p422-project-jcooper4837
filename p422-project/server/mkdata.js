const mongoose = require('mongoose');
const Score = require('./lib/models/score');
const Level = require('./lib/models/level');
const Game = require('./lib/models/game');

const username = new Score({
    game: 'Game-1',
    level: 'Level-1',
    user: 'username',
    score: 1000,
    date: '2020-11-09',
    proof: 'Video',
    comment: 'this score is last place lol',
});

const highscoreguy = new Score
({
    game: 'Game-1',
    level: 'Level-1',
    user: 'highscoreguy',
    score: 5000,
    date: '2005-06-12',
    proof: 'Picture',
    comment: '',
});

const i_dont_cheat = new Score
({
    game: 'Game-1',
    level: 'Level-1',
    user: 'i_dont_cheat',
    score: 1000000,
    date: '2001-09-14',
    proof: 'None',
    comment: 'completely legit did it in my sleep',
});

const ultimate_gamer = new Score
({
    game: 'Game-1',
    level: 'Level-1',
    user: 'ultimate_gamer',
    score: 25000,
    date: '2017-07-07',
    proof: 'Live Video',
    comment: 'bad will improve later',
});

const level_1 = new Level
({
    game: 'Game-1',
    name: 'Level-1',
    isScore: true,
    isAscending: true
});

const game_1 = new Game
({
    name: 'Game-1',
    platforms: [
      'Xbox-One',
      'Playstation-4',
      'Switch',
      'PC',
    ],
    release: "2020-10-31"
});

mongoose.connect('mongodb://localhost:27017/courseware', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
    await Score.deleteMany();
    await Level.deleteMany();
    await Game.deleteMany();

    await username.save();
    await highscoreguy.save();
    await i_dont_cheat.save();
    await ultimate_gamer.save();

    await level_1.save();

    await game_1.save();
}

save().then(() => console.log('done'));