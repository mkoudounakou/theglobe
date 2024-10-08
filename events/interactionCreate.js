const { Events } = require('discord.js');
const client = require('../index.js');

module.exports = {
    name: "interactionCreate.js"
};

// on interaction event
client.on(Events.InteractionCreate, interaction => {
	if(interaction.user.id === process.env.CLIENT_ID){
		return;
	}
	else if(interaction.isButton()){
		console.info("[Info] Button Interaction Event");
		if(client.commands.hasOwnProperty(interaction.customId)){
			client.commands.get(interaction.customId).execute(interaction)
		}
		else { //this would mean its a numbered action button
			let prev = getConfig();
			setConfig({"selectedOptions": [...prev, ...interaction.customId]});
		}
	}
  else if (interaction.isChatInputCommand()){
		console.info("[Info] Chat Input Interaction Event");
		client.commands.get(interaction.commandName).execute(interaction);
	}
	else{
		return;
	}
});
