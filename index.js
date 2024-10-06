const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
const { token, client_id, guild_id } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if (command.hasOwnProperty('data') || command.hasOwnProperty('execute')) {
			client.commands.set(command.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

let commands = [...client.commands.values()];

const rest = new REST({ version: '10'}).setToken(token);

(async () => {
	//try {
		console.log("registering slash commands..");
		let commands = [...client.commands.values()];
		console.log(commands);
		await rest.put(
			Routes.applicationGuildCommands(client_id, guild_id), {
				body: commands
			}
		);
		console.log("slash commands registered successfully.");
	/*} catch(error) {
		console.log(`[Error] ${error}`)
	}*/
})();

// When the client is ready
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// interactions
client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;
	console.info("[Event] Interaction Event");
	console.info(interaction);
	client.commands.get(interaction.commandName).execute();
});

// Log in to Discord with your client's token
client.login(token);
