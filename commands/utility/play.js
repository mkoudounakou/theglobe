const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "play",
	description: "Begin interactive learning exercise",
	execute: async(interaction) => {
		await interaction.reply('Lets begin');
	}
}
