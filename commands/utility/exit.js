const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "exit",
	description: "End the interactive learning exercise",
	execute: async(interaction) => {
		await interaction.reply('Thank you for using the GLOBE Protocol Time Loop Simulation unit! If you enjoyed this activity, please visit globe.gov to learn more about Earth System Science.');
	}
}
