const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');
const setConfig = require('../../utils/setConfig.js');
const setActions = require('../../utils/setActions.js');
const narrative = require('../../content/narrative.json');

module.exports = {
	name: "rules",
	description: "rules rules rules",
	execute: async(interaction) => {

		console.info("[Info] Interaction Event");
		console.info(interaction);
		await interaction.reply('Over the course of 5 rounds you’ll have the option to spend money on various projects meant to prepare Lynmouth for the oncoming flood. Keep in mind how long they take to implement, as leaving a big project to the last minute may incur dire consequences.');
	}
}
