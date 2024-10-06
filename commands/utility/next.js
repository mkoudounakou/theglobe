const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "next",
	description: "Continue",
	execute: async(interaction) => {
		await interaction.reply('Next');
	}
}
