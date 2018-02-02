const Eris = require('eris');
const Bot = Eris(require('./config').token);
require('./modules')(Bot);
Bot.connect();