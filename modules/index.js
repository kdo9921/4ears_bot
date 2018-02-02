module.exports = function(bot) {
	require('fs').readdirSync(__dirname).forEach(function(file) {
		file == 'index.js' || require(`${__dirname}/${file}`)(bot);
	});
}