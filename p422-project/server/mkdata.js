const mongoose = require('mongoose');
const Score = require('./lib/models/score');
const Level = require('./lib/models/level');
const Game = require('./lib/models/game');

const ultimate_gamer000 = new Score
({
    game: 'Mario Kart Wii',
    level: 'Luigi Circuit',
    user: 'ultimate_gamer',
    score: 69123,
    date: '2017-07-10',
    platform: 'Wii',
    proof: 'Live Video',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    comment: 'nice',
});

const ultimate_gamer001 = new Score
({
    game: 'Mario Kart Wii',
    level: 'Moo Moo Meadows',
    user: 'ultimate_gamer',
    score: 82436,
    date: '2017-07-11',
    platform: 'Wii',
    proof: 'Picture',
    link: '',
    comment: 'improvable',
});

const ultimate_gamer002 = new Score
({
    game: 'Super Mario 64',
    level: 'Bob-omb Battlefield',
    user: 'ultimate_gamer',
    score: 146,
    date: '2018-02-08',
    platform: 'N64',
    proof: 'Live Video',
    link: '',
    comment: 'cool',
});

const ultimate_gamer003 = new Score
({
    game: 'Super Mario 64',
    level: 'Whomp\'s Fortress',
    user: 'ultimate_gamer',
    score: 192,
    date: '2018-02-10',
    platform: 'N64',
    proof: 'None',
    link: '',
    comment: '',
});

const username000 = new Score({
    game: 'Mario Kart Wii',
    level: 'Luigi Circuit',
    user: 'username',
    score: 70200,
    date: '2020-11-09',
    platform: 'Wii',
    proof: 'Video',
    link: '',
    comment: 'this time is last place lol',
});

const username001 = new Score({
    game: 'Super Mario 64',
    level: 'Bob-omb Battlefield',
    user: 'username',
    score: 121,
    date: '2020-11-15',
    platform: 'Switch',
    proof: 'Video',
    link: '',
    comment: 'where do u get 25 more coins??',
});

const game000level000 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Luigi Circuit',
    isScore: false,
    isAscending: false
});

const game000level001 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Moo Moo Meadows',
    isScore: false,
    isAscending: false
});

const game000level002 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Mushroom Gorge',
    isScore: false,
    isAscending: false
});

const game000level003 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Toad\'s Factory',
    isScore: false,
    isAscending: false
});

const game000level004 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Mario Circuit',
    isScore: false,
    isAscending: false
});

const game000level005 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Coconut Mall',
    isScore: false,
    isAscending: false
});

const game000level006 = new Level
({
    game: 'Mario Kart Wii',
    name: 'DK Summit',
    isScore: false,
    isAscending: false
});

const game000level007 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Wario\'s Gold Mine',
    isScore: false,
    isAscending: false
});

const game000level008 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Daisy Circuit',
    isScore: false,
    isAscending: false
});

const game000level009 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Koopa Cape',
    isScore: false,
    isAscending: false
});

const game000level010 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Maple Treeway',
    isScore: false,
    isAscending: false
});

const game000level011 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Grumble Volcano',
    isScore: false,
    isAscending: false
});

const game000level012 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Dry Dry Ruins',
    isScore: false,
    isAscending: false
});

const game000level013 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Moonview Highway',
    isScore: false,
    isAscending: false
});

const game000level014 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Bowser\'s Castle',
    isScore: false,
    isAscending: false
});

const game000level015 = new Level
({
    game: 'Mario Kart Wii',
    name: 'Rainbow Road',
    isScore: false,
    isAscending: false
});

const game001level000 = new Level
({
    game: 'Super Mario 64',
    name: 'Bob-omb Battlefield',
    isScore: true,
    isAscending: true
});

const game001level001 = new Level
({
    game: 'Super Mario 64',
    name: 'Whomp\'s Fortress',
    isScore: true,
    isAscending: true
});

const game001level002 = new Level
({
    game: 'Super Mario 64',
    name: 'Jolly Roger Bay',
    isScore: true,
    isAscending: true
});

const game001level003 = new Level
({
    game: 'Super Mario 64',
    name: 'Cool, Cool Mountain',
    isScore: true,
    isAscending: true
});

const game001level004 = new Level
({
    game: 'Super Mario 64',
    name: 'Big Boo\'s Haunt',
    isScore: true,
    isAscending: true
});

const game001level005 = new Level
({
    game: 'Super Mario 64',
    name: 'Hazy Maze Cave',
    isScore: true,
    isAscending: true
});

const game001level006 = new Level
({
    game: 'Super Mario 64',
    name: 'Lethal Lava Land',
    isScore: true,
    isAscending: true
});

const game001level007 = new Level
({
    game: 'Super Mario 64',
    name: 'Shifting Sand Land',
    isScore: true,
    isAscending: true
});

const game001level008 = new Level
({
    game: 'Super Mario 64',
    name: 'Dire Dire Docks',
    isScore: true,
    isAscending: true
});

const game001level009 = new Level
({
    game: 'Super Mario 64',
    name: 'Snowman\'s Land',
    isScore: true,
    isAscending: true
});

const game001level010 = new Level
({
    game: 'Super Mario 64',
    name: 'Wet-Dry World',
    isScore: true,
    isAscending: true
});

const game001level011 = new Level
({
    game: 'Super Mario 64',
    name: 'Tall, Tall Mountain',
    isScore: true,
    isAscending: true
});

const game001level012 = new Level
({
    game: 'Super Mario 64',
    name: 'Tiny Huge Island',
    isScore: true,
    isAscending: true
});

const game001level013 = new Level
({
    game: 'Super Mario 64',
    name: 'Tick Tock Clock',
    isScore: true,
    isAscending: true
});

const game001level014 = new Level
({
    game: 'Super Mario 64',
    name: 'Rainbow Ride',
    isScore: true,
    isAscending: true
});

const game000 = new Game
({
    name: 'Mario Kart Wii',
    platforms: [
      'Wii',
    ],
    release: "2008-04-10"
});

const game001 = new Game
({
    name: 'Super Mario 64',
    platforms: [
      'N64',
      'Wii',
      'Wii U',
      'Switch',
    ],
    release: "1996-06-23"
});

mongoose.connect('mongodb://localhost:27017/p422-project', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
    await Score.deleteMany();
    await Level.deleteMany();
    await Game.deleteMany();

    await game000.save();
    await game001.save();

    await game000level000.save();
    await game000level001.save();
    await game000level002.save();
    await game000level003.save();
    await game000level004.save();
    await game000level005.save();
    await game000level006.save();
    await game000level007.save();
    await game000level008.save();
    await game000level009.save();
    await game000level010.save();
    await game000level011.save();
    await game000level012.save();
    await game000level013.save();
    await game000level014.save();
    await game000level015.save();
    await game001level000.save();
    await game001level001.save();
    await game001level002.save();
    await game001level003.save();
    await game001level004.save();
    await game001level005.save();
    await game001level006.save();
    await game001level007.save();
    await game001level008.save();
    await game001level009.save();
    await game001level010.save();
    await game001level011.save();
    await game001level012.save();
    await game001level013.save();
    await game001level014.save();

    await ultimate_gamer000.save();
    await ultimate_gamer001.save();
    await ultimate_gamer002.save();
    await ultimate_gamer003.save();
    await username000.save();
    await username001.save();
}

save().then(() => console.log('done'));