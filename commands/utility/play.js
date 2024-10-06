const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "play",
	description: "Begin interactive learning exercise",
	execute: async(interaction) => {
		await interaction.reply('Lets begin');

	}
}
