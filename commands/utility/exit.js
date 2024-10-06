const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "exit",
	description: "End the interactive learning exercise",
	execute: async(interaction) => {
		await interaction.reply('Thank you for using the GLOBE Protocol Time Loop Simulation unit! If you enjoyed this activity, please visit globe.gov to learn more about Earth System Science.');
	}
}
