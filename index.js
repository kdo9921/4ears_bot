const Bot = require('eris')(require('./config').token);
require('./modules')(Bot);
Bot.connect();

Bot.on('ready', () => {
	console.log('Ready!');
});
