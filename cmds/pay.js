const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help" || args.length < 3){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Pay", "Usage: pay <to> <quantity> [memo]")

    message.channel.send(helpembxd);
    return;
  } 
  let sender = message.user;
  var recipient = args[0];
  var quantity = args[1];  
  var memo = args.lenght > 2 ? args[2] : "";

  const request = require("sync-request");

  var res = request(
    "GET",
    `https://api-esr.hypha.earth/invoice?to=${recipient}&quantity=${quantity}&memo={memo}`,
    {
      headers: {
        "user-agent": "bot-user-agent"
      }
    }
  );
  res = JSON.parse(res.getBody("utf8"));

  const embed = new Discord.RichEmbed();
  embed.addField(
    `Sending ${quantity} Seeds to ${recipient}.`,
    "Scan using SEEDS Wallet"
  );
  embed.setColor("GREEN");
  embed.setImage(res.qr);
  embed.setAuthor("Authorize Payment");
  embed.setTitle("Click to authorize from mobile");
  var link = "https://eosio.to/" + res.esr.slice(6);
  embed.setURL(link);
    
  message.channel.send(embed);
};

module.exports.help = {
  name: "pay",
  description: "Pay user in SEEDS"
};