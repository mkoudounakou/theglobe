require('dotenv').config();
const fs = require('fs');
const { REST, Routes } = require('discord.js');

// creating command handlers
module.exports = (client) => {
  fs.readdirSync("./commands").forEach((dir) => {
    const files = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith(".js"));
    for (let file of files) {
      let ref = require(`../commands/${dir}/${file}`);
      // add new entry to client commands collection
      if (ref.hasOwnProperty('data') || ref.hasOwnProperty('execute')) {
        client.commands.set(ref.name, ref);
      } else {
        console.warn(`[Warn] The command at ./commands/${dir}/${file} is missing a required "data" or "execute" property.`);
      }
    }
  });

  // registering slash commands
  const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);
  (async () => {
  	try {
  		console.info("[Info] Registering slash commands..");
  		await rest.put(
  			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
  				body: [...client.commands.values()]
  			}
  		);
  		console.info("[Info] Slash commands registered successfully.");
  	} catch(error) {
  		console.error(`[Error] ${error.stack || error.message}`)
  	}
  })();

}
