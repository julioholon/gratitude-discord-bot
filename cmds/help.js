const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let servericon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
    .setTitle("Help Center")
    .setColor("GREEN")
    .setTimestamp(message.createdAt, true)
    .setFooter("GratzBot || 2020 JulioHolon");
  
  for (var cmd in bot.commands.keys()) {
    serverembed.addField(cmd, bot.commands.get(cmd).help.description)
  }
  
  message.channel.send(serverembed);
};
module.exports.help = {
  name: "help",
  description: "Help on commands"
};
