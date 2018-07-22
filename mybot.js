const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's Go Dave!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!status")) {
    message.channel.send("All bots are functional");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("!duration")) {
    message.channel.send("00");
  }
  });

client.on("message", (message) => {
  if (message.content.startsWith("/help")) {
    message.channel.send("No commands. My work is only to tell the status of the bot.. If you want to check type **'!status'**");
  }
});
client.login("NDY1OTAzNDYwOTIwMDY2MDQ4.DiUR8w.nLsaNVWbB7qcxrkNukKPtRcHmt0");
bot.user.setStatus('Idle')
