const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "select",
	description: "The committee chair selects two of the available options to present for a vote.",
	execute: async(interaction) => {

		await interaction.reply('Two options selected..');
	}
}
