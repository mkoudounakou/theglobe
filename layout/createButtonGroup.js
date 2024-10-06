const { ActionRowBuilder } = require("discord.js");

module.exports = function createButtonGroup(buttons){
  const components = [];
  let row = new ActionRowBuilder();

  for(let i = 0; i < buttons.length && i < 25; ++i){
    if(i % 5 === 0 && i > 0){
      components.push(row);
      row = new ActionRowBuilder();
    }
    row.addComponents(buttons[i]);
  }

  return components;
};
