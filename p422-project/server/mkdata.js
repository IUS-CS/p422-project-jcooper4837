const mongoose = require('mongoose');
const Score = require('./lib/models/score');
const Level = require('./lib/models/level');
const Game = require('./lib/models/game');

const username000 = new Score({
    game: 'Game-1',
    level: 'Level-1',
    user: 'username',
    score: 1000,
    date: '2020-11-09',
    proof: 'Video',
    comment: 'this score is last place lol',
});

const username001 = new Score({
    game: 'Game-1',
    level: 'Level-2',
    user: 'username',
    score: 5555,
    date: '2020-11-20',
    proof: 'Video',
    comment: 'love this level',
});

const username002 = new Score({
    game: 'Game-2',
    level: 'Level-1b',
    user: 'username',
    score: 12345,
    date: '2020-11-09',
    proof: 'Video',
    comment: 'impressed myself with this one!',
});

const username003 = new Score({
    game: 'Game-2',
    level: 'Level-2b',
    user: 'username',
    score: 1337,
    date: '2020-11-20',
    proof: 'Video',
    comment: 'cool',
});

const username004 = new Score({
    game: 'Game-2',
    level: 'Level-3b',
    user: 'username',
    score: 436,
    date: '2020-11-20',
    proof: 'Video',
    comment: '',
});

const highscoreguy000 = new Score
({
    game: 'Game-1',
    level: 'Level-1',
    user: 'highscoreguy',
    score: 5000,
    date: '2005-06-12',
    proof: 'Picture',
    comment: 'this score exists',
});

const highscoreguy001 = new Score
({
    game: 'Game-2',
    level: 'Level-1b',
    user: 'highscoreguy',
    score: 12321,
    date: '2005-07-26',
    proof: 'Picture',
    comment: '',
});

const highscoreguy002 = new Score
({
    game: 'Game-2',
    level: 'Level-3b',
    user: 'highscoreguy',
    score: 2718281,
    date: '2005-02-09',
    proof: 'Picture',
    comment: 'e',
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

const ultimate_gamer000 = new Score
({
    game: 'Game-1',
    level: 'Level-1',
    user: 'ultimate_gamer',
    score: 25000,
    date: '2017-07-07',
    proof: 'Live Video',
    comment: 'bad will improve later',
});

const ultimate_gamer001 = new Score
({
    game: 'Game-1',
    level: 'Level-2',
    user: 'ultimate_gamer',
    score: 25000,
    date: '2017-07-08',
    proof: 'Live Video',
    comment: 'same as level 1 lol',
});

const ultimate_gamer002 = new Score
({
    game: 'Game-2',
    level: 'Level-1b',
    user: 'ultimate_gamer',
    score: 12346,
    date: '2017-07-09',
    proof: 'Live Video',
    comment: '2ez',
});

const ultimate_gamer003 = new Score
({
    game: 'Game-2',
    level: 'Level-2b',
    user: 'ultimate_gamer',
    score: 6969,
    date: '2017-07-10',
    proof: 'Live Video',
    comment: 'nice',
});

const level_1 = new Level
({
    game: 'Game-1',
    name: 'Level-1',
    isScore: true,
    isAscending: true
});

const level_2 = new Level
({
    game: 'Game-1',
    name: 'Level-2',
    isScore: true,
    isAscending: true
});

const level_1b = new Level
({
    game: 'Game-2',
    name: 'Level-1b',
    isScore: true,
    isAscending: true
});

const level_2b = new Level
({
    game: 'Game-2',
    name: 'Level-2b',
    isScore: true,
    isAscending: true
});

const level_3b = new Level
({
    game: 'Game-2',
    name: 'Level-3b',
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

const game_2 = new Game
({
    name: 'Game-2',
    platforms: [
      'Xbox-360',
      'Playstation-3',
      'Wii'
    ],
    release: "2007-11-01"
});

mongoose.connect('mongodb://localhost:27017/courseware', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
    await Score.deleteMany();
    await Level.deleteMany();
    await Game.deleteMany();

    await username000.save();
    await username001.save();
    await username002.save();
    await username003.save();
    await username004.save();
    await highscoreguy000.save();
    await highscoreguy001.save();
    await highscoreguy002.save();
    await i_dont_cheat.save();
    await ultimate_gamer000.save();
    await ultimate_gamer001.save();
    await ultimate_gamer002.save();
    await ultimate_gamer003.save();

    await level_1.save();
    await level_2.save();
    await level_1b.save();
    await level_2b.save();
    await level_3b.save();

    await game_1.save();
    await game_2.save();
}

save().then(() => console.log('done'));