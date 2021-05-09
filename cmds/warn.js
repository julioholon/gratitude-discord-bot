const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('[SBModeration] You must mention someone to warn them.');
  if (reason.length < 1) return message.channel.send('[SBModeration] You must have a reason for the warning.');

  let dmsWarnEmbed = new Discord.RichEmbed()
  .setTitle("Warn!")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsWarnEmbed);

  message.delete();
  
  message.channel.send("\:white_check_mark:*** " + user.tag + " has been warned***")
  
  

}

exports.help = {
  name: 'warn'
};