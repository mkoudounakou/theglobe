require('dotenv').config();
const fs = require('fs');
const path = require('path');
const {
	Client,
	Collection,
	Events,
	GatewayIntentBits,
	REST,
	Routes
} = require('discord.js');

// instantiating client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

// creating commands list
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// add new entry to client commands collection
		if (command.hasOwnProperty('data') || command.hasOwnProperty('execute')) {
			client.commands.set(command.name, command);
		} else {
			console.warn(`[Warn] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
let commands = [...client.commands.values()];

// registering slash commands
const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);
(async () => {
	try {
		console.info("[Info] Registering slash commands..");
		let commands = [...client.commands.values()];
		console.log(commands);
		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
				body: commands
			}
		);
		console.info("[Info] Slash commands registered successfully.");
	} catch(error) {
		console.error(`[Error] ${error}`)
	}
})();

// on ready event
client.once(Events.ClientReady, async(readyClient) => {
	console.log(`[Log] Bot logged in as ${readyClient.user.tag}`);
});

// on interaction event
client.on(Events.InteractionCreate, interaction => {
	if(interaction.user.id === process.env.CLIENT_ID){
		return;
	}/*
	else if(interaction.isButton()){
		console.info("[Info] Button Interaction Event");
		if(client.commands.hasOwnProperty(interaction.customId)){
			client.commands.get(interaction.customId).execute(interaction)
		}
		else { //this would mean its a numbered action button
			let prev = getConfig();
			setConfig({"selectedOptions": [...prev, ...interaction.customId]});
		}
	}*/
  else if (interaction.isChatInputCommand()){
		console.info("[Info] Chat Input Interaction Event");
		client.commands.get(interaction.commandName).execute(interaction);
	}
	else{
		return;
	}
});

// login with client token
client.login(process.env.TOKEN);
