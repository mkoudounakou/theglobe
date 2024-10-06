const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "rules",
	description: "rules rules rules",
	execute: async(interaction) => {
		await interaction.reply('rules');
	}
}
