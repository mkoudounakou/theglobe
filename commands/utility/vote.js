const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "select",
	description: "The committee chair calls for the voting session to begin.",
	execute: async(interaction) => {

		await interaction.reply('Please vote A or B..');
	}
}
