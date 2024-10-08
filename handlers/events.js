const fs = require("fs");

// creating event handlers
module.exports = (client) => {
  const files = fs.readdirSync(`./events`).filter((file) => file.endsWith(".js"));
  for (let file of files) {
    let ref = require(`../events/${file}`);
    // add new entry to client events collection
    if (ref.name) {
      client.events.set(ref.name, ref);
      console.info(`[Info] ./events/${ref.name} Event handler registered successfully.`);
    } else {
      console.error(`[Error] Missing 'name' property on ./events/${file} module exports.`);
    }
  }
};
