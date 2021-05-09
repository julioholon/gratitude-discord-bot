const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`(Administrator) Removerole command`)
  .addField("Description:", "Remove a role from member", true)
  .addField("Usage", "!removerole [user] [role]", true)
  .addField("Example", "!removerole @Disaalt Member")
    const addedrole = args.slice(1).join(' ');
    const user = message.mentions.members.first();
    const foundRole = message.guild.roles.find((role) => role.name.toLowerCase() === args.slice(2).join(' ').toLowerCase());

    if (message.mentions.members.size < 1) return message.channel.send(xdemb);
    if (addedrole.length < 1) return message.channel.send(xdemb);
    if (!foundRole) return message.channel.send("Role does not exist.");
    if (user.roles.has(foundRole.id)) return message.channel.send("Member doesnt have the role.");

    user.removeRole(foundRole).then(() => message.channel.send(sreply)).catch(() => message.channel.send("Bot has no permission to remove this role."));
  



    let sreply = "***I just removed the " + foundRole + " from " + user;

    message.delete();
  
}

module.exports.help = {
  name: "removerole",
}