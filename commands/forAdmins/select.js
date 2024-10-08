const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "select",
	description: "The committee chair selects two of the available options to present for a vote.",
	execute: async(interaction) => {

		await interaction.reply('Please select two options..');
	}
}
