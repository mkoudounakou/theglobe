const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "rules",
	description: "rules rules rules",
	execute: async(interaction) => {
		await interaction.reply('rules');
	}
}
