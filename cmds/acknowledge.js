const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help" || args.length < 2){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Acknowledge", "Usage: !acknowledge <@user> <message>")

    message.channel.send(helpembxd);
    return;
  } 
  let sender = message.user;
  var recipient = args[0];
  var memo = args[1];

  const request = require("sync-request");

  var res = request("POST", `https://api-esr.hypha.earth/qr`, {
    headers: {
      "user-agent": "bot-user-agent"
    },
    json: {
      actions: [
        {
          account: "gratz.seeds",
          name: "acknowledge",
          authorization: [
            {
              actor: "............1",
              permission: "............2"
            }
          ],
          data: {
            from: "............1",
            to: recipient,
            memo: memo
          }
        }
      ]
    }
  });
  res = JSON.parse(res.getBody("utf8"));

  const embed = new Discord.RichEmbed();
  var msg = memo ? `Acknowledging gratitude to ${recipient} for ${memo}` : `Acknowledging gratitude to ${recipient}`
  embed.addField(
    msg,
    "Scan using your SEEDS Wallet"
  );
  embed.setColor("GREEN");
  embed.setImage(res.qr);
  embed.setAuthor("Authorize Gratitude");
  embed.setTitle("Click to authorize from mobile");
  var link = "https://eosio.to/" + res.esr.slice(6);
  embed.setURL(link);

  //const channel = message.guild.channels.find(ch => ch.name === 'gratitude');
  //channel.send(`${sender} sent ${quantity} gratitude to ${recipient}`)
  
  message.channel.send(embed);
};

module.exports.help = {
  name: "acknowledge",
  description: "Acknowledge user for Gratitude Tokens"
};