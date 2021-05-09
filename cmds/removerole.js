const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Command currently in development.")
  //!addrole <@user> <Role>
  /*if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`(Administrator) Addrole command`)
  .addField("Description:", "Add role to member", true)
  .addField("Usage", "!addrole [user] [role]", true)
  .addField("Example", "!addrole @Disaalt Member")
    const addedrole = args.slice(1).join(' ');
    const user = message.mentions.members.first();
    const foundRole = message.guild.roles.find((role) => role.name.toLowerCase() === args.slice(2).join(' ').toLowerCase());

    if (message.mentions.members.size < 1) return message.channel.send(xdemb);
    if (addedrole.length < 1) return message.channel.send(xdemb);
    if (!foundRole) return message.channel.send("Role does not exist.");
    if (user.roles.has(foundRole.id)) return message.channel.send("Member already has the role.");

    user.removeRole(foundRole).then(() => message.channel.send(sreply)).catch(() => message.channel.send("Bot has no permission to add this role."));
  



    let sreply = "***I just gave " + user + " the "+ foundRole + " role!***";

    message.delete();
*/  
}

module.exports.help = {
  name: "removerole",
}