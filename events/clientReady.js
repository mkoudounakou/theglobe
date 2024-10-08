const { Events } = require('discord.js');
const client = require('../index.js');

module.exports = {
    name: "clientReady.js"
};

// on ready event
client.once(Events.ClientReady, async(readyClient) => {
	console.log(`[Log] Bot logged in as ${readyClient.user.tag}`);
});
