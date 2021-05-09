const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help" || args.length < 1){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("balance", "Usage: balance <user>")

    message.channel.send(helpembxd);
    return;
  } 
  let sender = message.user;
  var account = args[0];

  const request = require("sync-request");
  const {
    getReceivedGratitude,
    getRemainingGratitude,
    getBalance
  } = require("../seeds");

  const embed = new Discord.RichEmbed();
  //https://github.com/cc32d9/eosio_light_api
  var res = request(
    "GET",
    `https://api.light.xeos.me/api/account/telos/${account}`,
    {
      headers: {
        "user-agent": "bot-user-agent"
      }
    }
  );
  res = JSON.parse(res.getBody("utf8"));
  Promise.all([
    getRemainingGratitude(account),
    getReceivedGratitude(account)
  ]).then(([remaining, received]) => {
    for (var i = 0; i < res.balances.length; i++) {
      embed.addField(res.balances[i].currency, res.balances[i].amount);
    }
    embed.addField("Gratitude to give", remaining);
    embed.addField("Gratitude received", received);
    embed.setColor("GREEN");
    embed.setAuthor("Token Balances");
    embed.setTitle(`Balances for ${account}`);
    message.channel.send(embed);
  });    
  
};

module.exports.help = {
  name: "balance",
  description: "Get user token balances"
};