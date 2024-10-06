/*
const createButtonGroup = require('./createButtonGroup.js');
const { ButtonBuilder, ButtonStyle } = require('discord.js');
const nextButton = new ButtonBuilder()
                            .setCustomId("next")
                            .setLabel("Next")
                            .setStyle(ButtonStyle.Primary);
*/

// helper class for sending messages
class Messenger {
  constructor(){}

  async text(interaction, obj){
    if(!obj?.content){ return; }
    await interaction.channel.send({
      content: obj.content
    });
  }
/*
  async buttons(interaction, obj, arr){
    if(!obj?.content){ return; }
    await interaction.channel.send({
      content: obj.content,
      components: arr?.length > 0
                  ? createButtonGroup(arr)
                  : createButtonGroup(nextButton)
    });
  }

  async vote(interaction, obj, arr){
    if(!obj?.content){ return; }
    await interaction.channel.send({
      content: "call vote"
    });
  }
  */
}

let messenger = new Messenger();
module.exports = messenger;
