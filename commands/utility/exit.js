const messenger = require('../../layout/messenger.js');
/*
const { ButtonBuilder, ButtonStyle } = require('discord.js');
const globeButton = new ButtonBuilder()
                            .setLabel("Join the GLOBE Project")
                            .setStyle(ButtonStyle.Primary)
														.setURL("https://globe.gov/");
const repoButton = new ButtonBuilder()
			                      .setLabel("View our code repository")
			                      .setStyle(ButtonStyle.Primary)
														.setURL("https://github.com/mkoudounakou/timeLoopSimulator");

module.exports = {
	name: "exit",
	description: "End the interactive learning exercise",
	execute: (interaction) => {
		messenger.buttons(interaction, {
			content: 'Thank you for using the GLOBE Protocol Time Loop Simulation unit! If you enjoyed this activity, please visit globe.gov to learn more about Earth System Science.'
		}, [globeButton, repoButton]);
	}
}
*/

module.exports = {
	name: "exit",
	description: "End the interactive learning exercise",
	execute: (interaction) => {
		messenger.text(interaction, {
			content: 'Thank you for using the GLOBE Protocol Time Loop Simulation unit! If you enjoyed this activity, please visit globe.gov to learn more about Earth System Science.'
		});
	}
}
