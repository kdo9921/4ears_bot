module.exports = function(bot) {
	bot.registerCommand('selfname', (msg, args) => {
		if(!args.length) return '변경 할 이름을 말해줘!';
		bot.editNickname(msg.channel.guild.id, args.join(' '));
		return '짠! 이름 변경 완료!';
	});
}
