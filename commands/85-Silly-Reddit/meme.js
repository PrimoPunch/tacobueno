const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = {
	name: 'meme',
	aliases: ['memes', 'me_irl', 'dankmemes', 'wholesomememes', 'MemeEconomy'],
	category: '85',
	description: 'Gives you a meme from Reddit.',
	cooldown : 5,
	args: false,
	usage: false,
	run: async (client, message) => {
		// Subreddits
		const subReddits = ['memes', 'me_irl', 'dankmemes', 'AbruptChaos', 'wholesomememes', 'MemeEconomy'];
		const x = Math.floor((Math.random() * subReddits.length));
		const img = await randomPuppy(subReddits[x]);

		let embed = new MessageEmbed()
			.setTitle(`From /r/${subReddits[x]}`)
			.setColor('RANDOM')
			.setDescription(`[File link just in case the command really breaks](${img})`)
			.setURL(`https://reddit.com/r/${subReddits[x]}/`)
			.setImage(img)
			.setTimestamp();
		if (img.includes(['.mp4'])) {
			embed = new MessageEmbed()
				.setTitle(`From /r/${subReddits[x]}`)
				.setColor('RANDOM')
				.setDescription(`[File link just in case the command really breaks](${img})`)
				.setURL(`https://reddit.com/r/${subReddits[x]}/`)
				.setTimestamp();
		}
		const attchment = new MessageAttachment(img);
		try {
			await message.channel.send(embed);
			if (img.includes(['.mp4'])) {
				await message.channel.send(attchment);
			}
		}
		catch (error) {
			console.error(error);
			message.channel.send(`something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
		}
	},
};