require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');

// instantiating client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

// handlers
client.commands = new Collection();
client.events = new Collection();

module.exports = client;

["commands", "events"].forEach((file) => {
    require(`./handlers/${file}`)(client);
});

// login with client token
client.login(process.env.TOKEN);
