//const { SlashCommandBuilder } = require('discord.js');
const getConfig = require('../../utils/getConfig.js');
const setConfig = require('../../utils/setConfig.js');
const getActions = require('../../utils/getActions.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');
const messenger = require('../../layout/messenger.js');

module.exports = {
	name: "play",
	description: "Begin interactive learning exercise",
	execute: (interaction) => {
		let config = getConfig();
		let i = ++config.narrative;
		setConfig({
			"gameState": true,
			"narrative": i
		});

		for(let j=0; j < narrative[i].body.length; j++){
			messenger.text({ content: narrative[i].body[j]});
		}

		messenger.text({ content: narrative[i].options.join(" / ") + "?"});
	}
}
