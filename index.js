const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');

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
		// add new entry to client commands collection
		if (command.hasOwnProperty('data') || command.hasOwnProperty('execute')) {
			client.commands.set(command.name, command);
		} else {
			console.warn(`[Warn] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

let commands = [...client.commands.values()];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
	//try {
		console.info("[Info] Registering slash commands..");
		let commands = [...client.commands.values()];
		console.log(commands);
		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
				body: commands
			}
		);
		console.info("[Info] Slash commands registered successfully.");
	/*} catch(error) {
		console.error(`[Error] ${error}`)
	}*/
})();

// When the client is ready
client.once(Events.ClientReady, readyClient => {
	console.log(`[Log] Bot logged in as ${readyClient.user.tag}`);
});

// interactions
client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;
	console.info("[Info] Interaction Event");
	console.info(interaction);
	client.commands.get(interaction.commandName).execute();
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
