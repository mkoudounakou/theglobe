const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('Begin Interactive Learning Exercise'),
	async execute(interaction) {
		await interaction.reply('Lets begin');
	},
};
