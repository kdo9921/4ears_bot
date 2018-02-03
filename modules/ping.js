module.exports = function(bot) {
	bot.on('messageCreate', msg => {
		msg.cleanContent.match(/ping(!)?/i) && bot.createMessage(msg.channel.id, 'Pong!');
	});
}
