const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help" || args.length < 2){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Acknowledge", "Usage: !gratz <@user> <quantity> <message>")

    message.channel.send(helpembxd);
    return;
  } 
  let sender = message.user;
  var recipient = args[0];
  var quantity = args[1];  
  var memo = args.lenght > 2 ? args[2] : "";
  
  const request = require("sync-request");

  var res = request("POST", `https://api-esr.hypha.earth/qr`, {
    headers: {
      "user-agent": "bot-user-agent"
    },
    json: {
      actions: [
        {
          account: "gratz.seeds",
          name: "give",
          authorization: [
            {
              actor: "............1",
              permission: "............2"
            }
          ],
          data: {
            from: "............1",
            to: recipient,
            quantity: parseFloat(quantity).toFixed(4) + " GRATZ",
            memo: memo
          }
        }
      ]
    }
  });
  res = JSON.parse(res.getBody("utf8"));

  const embed = new Discord.RichEmbed();
  embed.addField(
    `Gifting ${quantity} GRATZ to ${recipient}.`,
    "Scan using your SEEDS Wallet"
  );
  embed.setColor("GREEN");
  embed.setImage(res.qr);
  embed.setAuthor("Authorize Gratitude");
  embed.setTitle("Click to authorize from mobile");
  var link = "https://eosio.to/" + res.esr.slice(6);
  embed.setURL(link);
  
  message.channel.send(embed);
};

module.exports.help = {
  name: "gratz",
  description: "Give Gratitude Tokens to user"
};