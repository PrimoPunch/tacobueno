/* eslint-disable no-useless-escape */
/* eslint-disable quotes */

// COMMAND IS UNFINISHED
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'lenny',
	aliases: false,
	category: '80',
	description: 'Summons a lenny face',
	cooldown: false,
	guildOnly: false,
	NSFW: false,
	args: false,
	usage: '[lenny faces category/`help`]',
	run: async (client, message, args) => {
		let lenny = [];


		// LENNY GENERATOR
		if (args[0] == 'help') {
			const msg = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle('LENNY FACE COMMAND OPTIONS')
				.setDescription(
					'`random`,`basic`, `classic`, `angry`, `attack`, `blush`, `creepy` ',
				)
				.addField('This command is not complete', '*If there are enough poeple wanting more, I will add more to the command*');
			message.channel.send(msg);
		}
		if (args[0] == 'basic' || args[0] == 'random' || args == false) {
			lenny.push('( ͡° ͜ʖ ͡°)', '(☭ ͜ʖ ☭)', '(ᴗ ͜ʖ ᴗ)', '( ° ͜ʖ °)', '(⟃ ͜ʖ ⟄) ', '( ‾ ʖ̫ ‾)', '(͠≖ ͜ʖ͠≖)', '( ͡° ʖ̯ ͡°)', 'ʕ ͡° ʖ̯ ͡°ʔ', '( ͡° ل͜ ͡°)', '( ͠° ͟ʖ ͡°)', '( ͠° ͟ʖ ͠°)', '( ͡~ ͜ʖ ͡°)', '( ͡o ͜ʖ ͡o)', '( ͡◉ ͜ʖ ͡◉)', '( ͡☉ ͜ʖ ͡☉)', '( ͡° ͜V ͡°)', 'ʕ ͡° ͜ʖ ͡°ʔ', '( ͡ᵔ ͜ʖ ͡ᵔ )', '( ͡° ͜ʖ ͡ °)');
		}
		if (args[0] == 'classic') {
			lenny.push(
				'( ͡° ͜ʖ ͡°)',
			);
		}
		if (args[0] == 'angry' || args[0] == 'random') {
			lenny.push('(▀̿Ĺ̯▀̿ ̿)', '( ͡ಠ ͜ʖ ͡ಠ)', '( ͡° ʖ̯ ͡°)', '( ͡°Ĺ̯ ͡° )', '( ͡ಠ ʖ̯ ͡ಠ)', 'ʕ ͡° ʖ̯ ͡°ʔ', 'ʕ  ͡° ʖ̯ ͡°ʔ', '( ° ͜ʖ͡°)╭∩╮', 'ლ(▀̿̿Ĺ̯̿̿▀̿ლ)', '┐( ͡° ʖ̯ ͡°)┌', '( ͡⚆ ͜ʖ ͡⚆)╭∩╮', '( ͡° ͜つ ͡°)╭∩╮', '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄', '┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)', '━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)', '╭∩╮( ͡° ل͟ ͡° )╭∩╮', '┬┴┬┴┤ᕦ( ▀̿ Ĺ̯ ▀̿├┬┴┬', '໒( . ͡° ͟ʖ ͡° . )७┌∩┐', '<:::::[]=¤ (▀̿̿Ĺ̯̿̿▀̿ ̿)', 'ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ',
			);
		}
		if (args[0] == 'attack' || args[0] == 'random') {
			lenny.push(
				'━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)', '┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)', '( ͡° ͜ʖ ͡°)︻̷┻̿═━一-', '(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿-', '( ͡° ͜ʖ ͡°)╯╲___XXXX', '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ', '(∩ ͡ ° ʖ ͡ °) ⊃-(===>', 'デ╦-( ͡ಥʖ̯ಥ;)╯╲___XXXX', '(∩ ͡° ͜ʖ ͡°)⊃━炎炎炎炎炎炎炎炎', '<:::::[]=¤ (▀̿̿Ĺ̯̿̿▀̿ ̿)', '(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ,', '｡*ﾟ+.*.｡(っ ͡° ل͜ ͡°)っ✂╰⋃╯', '༼(∩ ͡°╭͜ʖ╮͡ ͡°)༽⊃━☆ﾟ. * ･ ｡ﾟ', '(ง ͡° ͜ʖ ͡°)=/̵͇̿̿/\'̿\'̿̿̿ ̿ ̿̿', '(∩ ͡° ͜ʖ ͡°)⊃━☆─=≡Σ((( つ◕ل͜◕)つ', '(ง ͠° ͟ل͜ ͡°)ง[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]', `'̿\'\̵͇̿̿\з=( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿`, "̿'̿'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿", "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿", "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿  ",
			);
		}
		if (args[0] == 'blush' || args[0] == 'random') {
			lenny.push(
				"v(▀̿Ĺ̯▀̿*)", "( 灬♥ 3 ♥灬)", "( ♥灬 3灬 ♥)", "(● ͡° ͜ʖ ͡°)", "(♥ ͡° ͜ʖ ͡°)", "(˵ ͡° ͜ʖ ͡°˵)", "(〃 ͡° ͜ʖ ͡°〃ゞ", "(• ͡° ͜ʖ ͡°•)", "(* ͡° ͜ʖ ͡°*)", "(つ ♥灬 ͜ʖ 灬♥)つ", "(* ͡° ͜ʖ ͡°)ゞ", "( ͡° ͜/// ͡°)", "( ͡º˵◞ل͟◟ ͡º˵)", "\\( ͡° ͜/// ͡°)/", "(つ ͡ꈍ ͜ʖ̫ ͡ꈍ )つ", "( ͡°⁄ ⁄ ͜⁄ ⁄ʖ⁄ ⁄ ͡°)", "( ͡☉⁄ ⁄ ͜⁄ ͜ʖ̫⁄ ⁄ ͡☉)", "( ˶˘ ³˘(˵ ͡° ͜ʖ ͡°˵)♡", "(˵ ͡~ ͜ʖ ͡°˵)ﾉ⌒♡*:･。.", "✧･ﾟ: *✧･ﾟ:*( ͡ꈍ ͜ʖ̫ ͡ꈍ )*:･ﾟ✧*:･ﾟ✧",
			);
		}
		if (args[0] == 'creepy' || args[0] == 'random') {
			lenny.push(
				'(◉͜ʖ◉)', '(ʖ ͜° ͜ʖ)', '(͠≖ ͜ʖ͠≖)', '( ✧≖ ͜ʖ≖)', '( ° ͜ʖ °) ', '( ͡⚆ل͜ ͡⚆)', '( ͝° ͜ʖ͡°)', '┐(͠≖ ͜ʖ͠≖)┌', '┬┴┤o ͜ʖ ͡o)', '( ͡º ͜ʖ ͡º )', '(˵ ͜。 ͡ʖ ͜。˵)', '┬┴┤( ͡⚆ل͜├┬┴┬', '(˵ ͡⚆ ͜ʖ ͡⚆˵)', '( ͡◉◞ ͜ʖ◟ ͡◉)', '( ͡º ◞ل͟◟ ͡º)', "( ͡º˵◞ل͟◟ ͡º˵)╱\ ", ' ( ͡⚆ ͜ʖ ͡⚆)', '(˵ ͡☉ ͜ʖ ͡☉˵)ᓄ✂', "/╲/( ͡⎚ ͜U ͡⎚)/\ ", '( ͡ ͡° ͡°  ʖ ͡° ͡°)',
			);
		}
		let x = Math.floor((Math.random() * lenny.length));
		message.channel.send(`${lenny[x]}`)
			.catch (err => console.log(err));

		let y = Math.floor((Math.random() * 10 + 1));

		if (y == 10) {
			message.channel.send('Made with the help of https://www.lennyfaces.net/\nDo (prefix)`lenny help` to get more categories');
		}
	},

};