const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "play",
	description: "Begin interactive learning exercise",
	execute: async(interaction) => {
		setConfig({"gameState": true});
		setConfig({"narrative": 1});

		for(i=0; i < narrative[config.narrative].length; i++){
			await interaction.reply(narrative[config.narrative].body[i]);
		}
		await interaction.reply(narrative[config.narrative].options.Join(" / ") + "?");
	}
}
