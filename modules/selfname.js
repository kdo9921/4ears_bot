module.exports = function(bot) {
	bot.on('messageCreate', message => {
		if(message.author.bot) return;
		if(message.channel.type === "dm") return;
		if(message.content.startsWith ("!selfname ")) {
			msgArray = message.content.split(" ");
			msg = msgArray.join('').substr(9);
			bot.editNickname(message.channel.guild.id,msg,"command played");
			bot.createMessage(message.channel.id, '짠! 이름 변경 완료!');
		}		
	});
}
