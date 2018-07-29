const config = require('./config.json');
const { token } = require('./token.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('BLB ready to speak big!');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const msg = message.content;
	const chat = message.channel;
	const command = msg.substring(1, (msg.search(' ') == -1 ? msg.length : msg.search(' '))).toLowerCase();
	const args = msg.substring((msg.search(' ') == -1 ? msg.length : msg.search(' ') + 1), msg.length).toLowerCase();

	if(command === 'blb') {
		if(args.length == 0) {
			message.reply('This command needs some text after it!');
			return;
		}
		const chars = args.split('');
		let tmp;
		let finalMsg = ' ';

		for(const s in chars) {
			if(chars[s] == ' ') {
				tmp = '     ';
			}
			else if(chars[s] == '!') {
				tmp = ':exclamation:';
			}
			else if(chars[s] == '?') {
				tmp = ':question:';
			}
			else if(chars[s] == '.') {
				tmp = '.          ';
			}
			else if(matches(chars[s], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
				tmp = handleNumber(chars[s]);
			}
			else if(chars[s] == 'ä') {
				tmp = ':regional_indicator_a: :regional_indicator_e:';
			}
			else if(chars[s] == 'ö') {
				tmp = ':regional_indicator_o: :regional_indicator_e:';
			}
			else if(chars[s] == 'ü') {
				tmp = ':regional_indicator_u: :regional_indicator_e:';
			}
			else if(chars[s] == 'ß') {
				tmp = ':regional_indicator_s: :regional_indicator_s: ';
			}
			else if(matches(chars[s], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])) {
				tmp = ':regional_indicator_' + chars[s] + ': ';
			}
			else {
				tmp = config.errorIcon;
			}
			finalMsg = finalMsg.concat(tmp);
		}
		message.channel.bulkDelete(1, true);
		chat.send(finalMsg);
	}
	else if(command === 'blbinfo') {
		chat.send(config.bigName);
		chat.send(client.user.displayAvatarURL);
		chat.send(config.desc);
	}
});

client.login(token);

function matches(text, filter) {
	let ret = false;
	for(const f in filter) {
		if(text === filter[f]) {
			ret = true;
		}
	}
	return ret;
}

function handleNumber(text) {
	if(text === '0') {
		return ':zero:';
	}
	else if(text === '1') {
		return ':one:';
	}
	else if(text === '2') {
		return ':two:';
	}
	else if(text === '3') {
		return ':three:';
	}
	else if(text === '4') {
		return ':four:';
	}
	else if(text === '5') {
		return ':five:';
	}
	else if(text === '6') {
		return ':six:';
	}
	else if(text === '7') {
		return ':seven:';
	}
	else if(text === '8') {
		return ':eight:';
	}
	else if(text === '9') {
		return ':nine:';
	}
	else {
		return config.errorIcon;
	}
}