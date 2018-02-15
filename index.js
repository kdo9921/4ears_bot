const Bot = new (require('eris').CommandClient)(require('./config').token, {}, { prefix: require('./config').prefix });
require('./modules')(Bot);
Bot.connect();

Bot.on('ready', () => {
	console.log('Ready!');
});
