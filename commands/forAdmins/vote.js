const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "select",
	description: "The committee chair calls for the voting session to begin.",
	execute: async(interaction) => {

		await interaction.reply('Please vote A or B..');
	}
}
